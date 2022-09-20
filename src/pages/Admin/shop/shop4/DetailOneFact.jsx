import React from "react";
import { NavLink, useParams } from "react-router-dom";
import moment from "moment";
import { useEffect } from "react";
import { fetchConToken } from "../../../../helpers/fecth";
import { useState } from "react";
import { useDispatch } from "react-redux";

const DetailOneFact = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const [oneBill, setOneBill] = useState('')

  useEffect(() => {
    const getOneBill = async () => {
      const resp = await fetchConToken(`factura/historial/${id}`);
      const data = await resp.json();
      
      setOneBill(data.factura);
    };
    getOneBill();
  }, [dispatch, id])
  
  const { cliente, tipoFactura, createdAt, detalleFacturas,  total, montoPagado, cambio } = oneBill;

  return  (
    <div className="fixed inset-0 bg-gray-400 bg-opacity-70 overflow-y-auto h-full w-full z-50">
      <div className="w-full h-full flex justify-center items-center">
        <div className="mx-auto p-5 border w-11/12 shadow-lg rounded-md bg-white">
            <div className="flex flex-row justify-between">
                <h1 className="text-3xl">Detalle de factura</h1>
                <NavLink to='/shop_four/inventory' className="bg-blue-600 p-2 rounded-lg text-white font-bold">
                    Regresar
                </NavLink>
            </div>
          <div className="flex flex-row justify-between mt-8">
            <div className="flex flex-row">
              <p className="font-semibold">Cliente:</p>
              <p className="ml-4">{cliente}</p>
            </div>
            <div className="flex flex-row">
              <p className="font-semibold">Tipo de pago:</p>
              <p className="ml-4">{tipoFactura}</p>
            </div>
            <div className="flex flex-row">
              <p className="font-semibold">Fecha:</p>
              <p className="ml-4">{moment(createdAt).format('LLL')}</p>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between mt-8 font-semibold border-2 p-2">
                <div className="flex flex-row w-1/6 justify-center text-center">
                  <p>Unidades</p>
                </div>
                <div className="flex flex-row w-1/6 justify-center text-center">
                  <p>Tipo</p>
                </div>
                <div className="flex flex-row w-1/6 justify-center text-center">
                  <p>Productos</p>
                </div>
                <div className="flex flex-row w-1/6 justify-center text-center">
                  <p>Modelo</p>
                </div>
                <div className="flex flex-row w-1/6 justify-center text-center">
                  <p>Precio de venta</p>
                </div>
                <div className="flex flex-row w-1/6 justify-center text-center">
                  <p>Total</p>
                </div>
              </div>
          </div>
          <div>
            {
              oneBill && detalleFacturas.map((detalle) => (
              <div
                key={detalle.id}
                className="flex flex-row justify-between border-b-2 border-x-2 p-2"
              >
                <div className="flex flex-row w-1/6 justify-center text-center">
                  <p>{detalle.unidades}</p>
                </div>
                <div className="flex flex-row w-1/6 justify-center text-center">
                  <p>{detalle.TipoStock}</p>
                </div>
                <div className="flex flex-row w-1/6 justify-center text-center">
                  <p>{detalle.almacen}</p>
                </div>
                <div className="flex flex-row w-1/6 justify-center text-center">
                  <p>{detalle.modelo}</p>
                </div>
                <div className="flex flex-row w-1/6 justify-center text-center">
                  <p>{detalle.precioVenta}</p>
                </div>
                <div className="flex flex-row w-1/6 justify-center text-center">
                  <p>{detalle.precioVenta * detalle.unidades}</p>
                </div>
              </div>
            ))}
          </div>
            <div className="w-full p-4 rounded-3xl flex flex-col items-end">
                <div className="w-80">
                    <h3 className="text-xl font-semibold py-2 text-center">
                        Detalles del pago
                    </h3>
                    <div className="flex flex-row justify-between border-y-2 py-2">
                        <p className="font-semibold">Total: </p>
                        <span className="font-light">C${total}</span>
                    </div>
                    <div className="flex flex-row justify-between border-b-2 py-2">
                        <p className="font-semibold">Total pagado: </p>
                        <span className="font-light">{montoPagado}</span>
                    </div>
                    <div className="py-2 flex flex-row justify-between">
                        <p className="font-semibold">Vuelto: </p>
                        <span className="font-light">C${cambio}</span>
                    </div>
                </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default DetailOneFact;
