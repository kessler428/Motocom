import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";

import { Table } from "../../../components/shop1/Bills/Table";
import { Header } from "../../../components/shop1/header/Header";
import { SideBar } from "../../../components/shop1/SideBar";
import { getAllInventory, getOneProduct } from "../../../redux/slices/inventory/thunks";
import { createBill } from "../../../redux/slices/bills/thunks";
import { setButtonState } from "../../../redux/slices/inventory/inventorySlices";
import { getAllClients, getOneClient } from "../../../redux/slices/clients/thunks";
import { SpinerLoading } from "../../../components/SpinnerLoading";
import { setIsLoading } from "../../../redux/slices/ui/uiSlices";
import { fetchConToken } from "../../../helpers/fecth";
import ModalAddClient from "../../../components/shop1/Bills/ModalAddClient";
import Swal from "sweetalert2";

const Facturar = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.ui);
  
  // Traer informacion de la store del redux
  const { listInventory, oneProduct, buttonState } = useSelector((state) => state.inventory);
  const { Access } = useSelector((state) => state.auth);
  const { listClients, oneClient } = useSelector((state) => state.clients);
  const { precioVenta, precioCompra, stock, tipoStock } = oneProduct;

  useEffect(() => {
    dispatch(getAllInventory(Access.almacenId));
  }, [Access.almacenId, dispatch])

  // Arrays para guardar los productos seleccionados
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [precioDeVenta, setPrecioDeVenta] = useState(0);
  const [total, setTotal] = useState(0);
  const [subTotalAddProduct, setSubTotalAddProduct] = useState(0);
  const [subTotal, setSubTotal] = useState("");
  const [totalRecibido, setTotalRecibido] = useState(0);
  const [tipoFac, setTipoFac] = useState("");
  const [tipoFactura, setTipoFactura] = useState("");
  const [tipoDeFactura, setTipoDeFactura] = useState("");
  const [stockView, setStock] = useState(0);
  const [facButton, setFacButton] = useState(false);
  const [clientes, setClientes] = useState("");
  const [clientesId, setClientesId] = useState("");

  const [descuento, setDescuento] = useState('');
  const [descuentoValue, setDescuentoValue] = useState(0);

  const [modalAddClient, setModalAddClient] = useState(false);

  const [products, setProducts] = useState({
    cantidad: "",
    productId: "",
    productName: "",
  });

  useEffect(() => {
    setSubTotalAddProduct(precioDeVenta * products.cantidad);
  }, [precioDeVenta, products.cantidad]);

  // Funcion para cambiar el valor del total
  useEffect(() => {
    if (descuentoValue === 0) {
      setTotal(subTotal);
    } else if (descuentoValue > 0) {
      setTotal(subTotal - subTotal * (descuentoValue / 100));
    }
  }, [descuentoValue, subTotal]);

  useEffect(() => {
    dispatch(getAllClients());
  }, [dispatch, modalAddClient])  

  // Carga del precio de venta y del stock del producto seleccionado
  useEffect(() => {
    if (products.productId !== "") {
      setPrecioDeVenta(precioVenta);
      setStock(stock?.[0].stock);
    }
  }, [precioVenta, products.productId, stock]);

  // Funcion para renombrar los estados de los productos
  const handleInputChange = (e) => {
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });

    dispatch(setButtonState(true));
  };

  // Funcion para eliminar un producto del carrito
  const deleteProduct = (id, subtotal) => {
    const filteredProducts = list.filter((item) => item.id !== id);
    const filteredProductsData = data.filter((item) => item.almacenId !== id);
    setList(filteredProducts);
    setData(filteredProductsData);

    setSubTotal(Number(subTotal) - subtotal);
  };


  // Mostrar los clientes y los productos en el select
  const options = listClients.map((item) => {
    return { value: `${item.id}`, label: `${item.nombres} ${item.apellidos} / ${item.ruc}` };
  });

  const options2 = listInventory.map((item) => {
    return { value: `${item.id}`, label: `${item.nombreArticulo} / ${item.codigoUno} / ${item.marca}` };
  });

  // Funcion para obtener el id del cliente seleccionado
  const handleClientChange = (e) => {
    setClientesId(e.value);
    setClientes(e);   
    
    dispatch(getOneClient(e.value));
  };
  

  // funcion para agregar productos al carrito
  const handleProductChange = (e) => {
    dispatch(setButtonState(false));
    dispatch(getOneProduct(e.value, Access.almacenId));

    setProducts({
      ...products,
      productId: e.value,
      productName: e.label,
    });
  }

  // Efecto para obtener el tipo de factura
  useEffect(() => {
    const getTipoFactura = async() => {
      const response = await fetchConToken('catalogo/tipo-factura');
      const data = await response.json();
      setTipoDeFactura(data.data);
    }
    getTipoFactura();
  }, [])

  useEffect(() => {
    const getDescuentos = async() => {
      const response = await fetchConToken(`catalogo/descuentos/${Access.almacenId}`);
      const data = await response.json();
      
      setDescuento(data.descuentosValidos);
    }
    getDescuentos();
  }, [Access.almacenId])

  // Validacion para el boton de facturar
  useEffect(() => {
    if (total !== 0 && totalRecibido !== 0 && tipoFac !== "" && clientesId !== "" && tipoFactura !== "") {
      setFacButton(true);
    }
  }, [clientesId, tipoFac, tipoFactura, total, totalRecibido]);

  // Funcion para agregar productos al array de productos seleccionados
  const addProducts = (products) => {
    const product = {
      id: oneProduct.id,
      cantidad: products.cantidad,
      productId: products.productId,
      nombre: oneProduct.nombreArticulo,
      modelo: oneProduct.modelo,
      precioVenta,
      precioCompra,
      subTotal: subTotalAddProduct,
    };

    const newProduct = {
      unidades: Number(products.cantidad),
      almacenId: Number(products.productId),
      precioVenta,
      precioCompra,
    };

    if (oneProduct.stock[0].stock >= products.cantidad) {
      if (products.cantidad !== "" && products.productId !== "") {
        if (list.length === 0) {
          setData([...data, newProduct]);
          setList([...list, product]);
        } else if (list.length > 0) {
          const validate = list.map(
            (item) => item.productId === products.productId
          );
          if (validate.includes(true)) {
            Swal.fire(
              "Error",
              "El producto ya se encuentra en el carrito",
              "error"
            );
          } else {
            setData([...data, newProduct]);
            setList([...list, product]);
          }
        }
      } else {
        Swal.fire("Error", "Debe seleccionar un producto", "error");
      }
    } else {
      Swal.fire("Error", "No hay stock suficiente", "error");
    }

    // sumar el subtotal de los productos
    setSubTotal(Number(subTotal) + Number(subTotalAddProduct));
    dispatch(setButtonState(false));
  };

  // funcion para realizar el post de la factura
  const addFact = () => {
    if(Number(tipoFac) === 1){
      if(oneClient.crediticio > total) {
        const values = {
          montoPagado: Number(totalRecibido),
          tipoFacturaId: Number(tipoFac),
          usuarioId: Access.id,
          tipoAlmacenId: Access.almacenId,
          clienteId: Number(clientesId),
          descuento: Number(descuentoValue),
        };
    
        const {
          montoPagado,
          tipoFacturaId,
          clienteId,
          usuarioId,
          tipoAlmacenId,
          descuento,
        } = values;
        
        dispatch(
          createBill(
            total,
            montoPagado,
            tipoFacturaId,
            usuarioId,
            tipoAlmacenId,
            descuento,
            subTotal,
            clienteId,
            data,
            Number(tipoFactura),
          )
        );
        dispatch(setIsLoading(true))
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El cliente no tiene suficiente credito',
        })
      }
    }else{
      const values = {
        montoPagado: Number(totalRecibido),
        tipoFacturaId: Number(tipoFac),
        usuarioId: Access.id,
        tipoAlmacenId: Access.almacenId,
        clienteId: Number(clientesId),
        descuento: Number(descuentoValue),
      };
  
      const {
        montoPagado,
        tipoFacturaId,
        clienteId,
        usuarioId,
        tipoAlmacenId,
        descuento,
      } = values;
      
      dispatch(
        createBill(
          total,
          montoPagado,
          tipoFacturaId,
          usuarioId,
          tipoAlmacenId,
          descuento,
          subTotal,
          clienteId,
          data,
          Number(tipoFactura),
        )
      );
      dispatch(setIsLoading(true))
    }
  };

  return isLoading ? <SpinerLoading /> : (
    <>
      <SideBar />
      <Header />

      <div className="mx-auto w-11/12 lg:pl-56 py-24">
        <div className="w-full flex flex-row justify-between">
          <h1 className="text-4xl md:text-5xl font-bold text-orange">
            Facturar
          </h1>
        </div>
        <div className="mt-10 bg-white p-8 rounded-xl">
          <div>
            <h4 className="text-2xl font-bold mb-6">Seleccionar un cliente</h4>
            <div className="flex flex-col md:flex-row items-end gap-6 w-full justify-between">
              <div className="flex flex-col w-full">
                <label className="font-semibold">Clientes</label>
                <Select
                  value={ clientes }
                  options={options}
                  onChange={handleClientChange}
                />
              </div>
              <div className="w-full md:w-3/12 flex justify-end">
                <button
                  onClick={() => setModalAddClient(true)}
                  className="bg-orange text-white p-2 px-4 rounded-lg hover:bg-hover-orange"
                >
                  Agregar Cliente
                </button>
              </div>
            </div>
          </div>
          <ModalAddClient modal={modalAddClient} setModal={setModalAddClient} />
          <div className="mt-8">
            <h4 className="text-2xl font-bold mb-6">Seleccione productos</h4>
            <div className="flex flex-col lg:flex-row gap-4 lg:items-end">
              <div className="w-full">
                <label className="flex flex-col">Producto</label>
                <Select
                  value={ products.productName.label }
                  options={options2}
                  onChange={handleProductChange}
                />
              </div>
              <div className="w-full lg:w-24">
                <label className="flex flex-col">
                  Unidades
                  <input
                    min={0}
                    type="number"
                    name="cantidad"
                    className="border-2 rounded-lg p-2 mt-1"
                    placeholder="12"
                    value={products.cantidad}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className="w-full lg:w-24">
                <label className="flex flex-col">
                  Stock
                  <input
                    type="number"
                    className="border-2 rounded-lg p-2 mt-1"
                    value={stockView}
                    disabled
                  />
                </label>
              </div>
              <div className="w-full lg:w-24">
                <label className="flex flex-col">
                  Tipo stock
                  <input
                    type="text"
                    className="border-2 rounded-lg p-2 mt-1"
                    value={tipoStock}
                    disabled
                  />
                </label>
              </div>
              <div className="w-full lg:w-24">
                <label className="flex flex-col">
                  Precio
                  <input
                    min={0}
                    type="number"
                    name="precioDeVenta"
                    className="border-2 rounded-lg p-2 mt-1"
                    placeholder="500"
                    value={precioDeVenta}
                    disabled
                  />
                </label>
              </div>
              <div className="w-full lg:w-24">
                <label className="flex flex-col">
                  Total
                  <input
                    type="number"
                    name="subTotalAddProduct"
                    value={subTotalAddProduct}
                    className="border-2 rounded-lg p-2 mt-1"
                    placeholder="6000"
                    disabled
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              {buttonState ? (
                <button
                  onClick={() => addProducts(products)}
                  className="bg-orange hover:bg-hover-orange text-white font-bold py-2 px-4 rounded-lg"
                >
                  Agregar
                </button>
              ) : (
                <div className="bg-gray-200 text-white font-bold py-2 px-4 rounded-lg">
                  Agregar
                </div>
              )}
            </div>
          </div>
          <div className="mt-6">
            {list.length > 0 && (
              <div className="border-2 rounded-lg p-4">
                <h3 className="text-3xl mb-2 font-semibold">Factura</h3>
                <div className="mb-6 text-xl">
                  <p className="">Cliente: {clientes.label}</p>
                </div>
                <div className="border-2 rounded-xl p-2">
                  <div className="hidden sm:flex flex-row gap-4 text-lg font-bold py-2 border-b-2">
                    <div className="w-1/4 text-center">
                      <p>Unidades</p>
                    </div>
                    <div className="w-1/4 text-center">
                      <p>Producto</p>
                    </div>
                    <div className="w-1/4 text-center">
                      <p>Modelo</p>
                    </div>
                    <div className="w-1/4 text-center">
                      <p>Subtotal</p>
                    </div>
                    <div className="w-1/4 text-center">
                      <p>Accion</p>
                    </div>
                  </div>
                  <Table deleteProduct={deleteProduct} list={list} />
                </div>
                <div className="flex flex-col lg:flex-row my-6 gap-6 justify-between">
                  <div className="w-full lg:w-80">
                    <div className=" mb-2">
                      <label className="text-xl font-semibold">
                        Tipo de pago
                      </label>
                      <select
                        className="border-2 p-2 rounded-lg w-full mt-1"
                        onChange={(e) => setTipoFac(e.target.value)}
                      >
                        <option value="none">Seleccione un tipo de pago</option>
                        {
                          tipoDeFactura.map((item) => (
                            <option key={item.id} value={item.id}>{item.nombre}</option>
                          ))
                        }
                      </select>
                    </div>
                    <div className="flex flex-col mb-2">
                      <label className="text-xl font-semibold">Descuento</label>
                      <select
                        className="border-2 p-2 rounded-lg w-full mt-1"
                        onChange={(e) => setDescuentoValue(e.target.value)}
                      >
                        <option value="none">Seleccione un tipo de pago</option>
                        {
                          descuento.map((item) => (
                            <option key={item.value} value={item.value}>{item.text}</option>
                          ))
                        }
                      </select>
                    </div>
                    <div className="flex flex-col mb-2">
                      <label className="text-xl font-semibold">Total</label>
                      <input
                        min={0}
                        type="number"
                        name="totalRecibido"
                        className="border-2 rounded-lg p-2 mt-1 w-full"
                        placeholder="C$ 6000"
                        value={totalRecibido}
                        onChange={(e) => setTotalRecibido(e.target.value)}
                      />
                    </div>
                    <div className=" mb-2">
                      <label className="text-xl font-semibold">
                        Tipo de factura
                      </label>
                      <select
                        className="border-2 p-2 rounded-lg w-full mt-1"
                        onChange={(e) => setTipoFactura(e.target.value)}
                      >
                        <option value="none">Seleccione un tipo de factura</option>
                        <option value="1">Baucher</option>
                        <option value="2">Factura</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full lg:w-80 border p-4 rounded-3xl">
                    <h3 className="text-xl font-semibold py-2 text-center">
                      Detalles del pago
                    </h3>
                    <div className="flex flex-row justify-between border-y-2 py-2">
                      <p className="font-semibold">Subtotal: </p>
                      <span className="font-light">C${parseFloat(subTotal).toFixed(2)}</span>
                    </div>
                    <div className="flex flex-row justify-between border-b-2 py-2">
                      <p className="font-semibold">Descuento: </p>
                      <span className="font-light">{descuentoValue}%</span>
                    </div>
                    <div className="flex flex-row justify-between border-b-2 py-2">
                      <p className="font-semibold">Total: </p>
                      <span className="font-light">C${parseFloat(total).toFixed(2)}</span>
                    </div>
                    <div className="py-2 flex flex-row justify-between">
                      <p className="font-semibold">Vuelto: </p>
                      <span className="font-light">
                        C${parseFloat(totalRecibido - total).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-end justify-end mt-10 gap-8">
                  {facButton ? (
                    <button
                      onClick={addFact}
                      className="bg-green-600 hover:bg-green-700 text-white font-bold py-[10px] px-4 rounded-lg"
                    >
                      Facturar
                    </button>
                  ) : (
                    <div className="bg-gray-200 text-white font-bold py-[10px] px-4 rounded-lg">
                      Facturar
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Facturar;
