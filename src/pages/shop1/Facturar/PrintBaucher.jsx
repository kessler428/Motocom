import moment from 'moment';
import 'moment/locale/es';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SpinerLoading } from '../../../components/SpinnerLoading';
import { fetchConToken } from '../../../helpers/fecth';
import logo from '../../../img/motocom.jpg'

const Baucher = () => {

    moment.locale('es');

    const { id } = useParams();
    const { Access } = useSelector((state) => state.auth);

    const [oneBill, setOneBill] = useState('')

    useEffect(() => {
        const getBaucher = async () => {
            const resp = await fetchConToken(`factura/historial/${id}`);
            const data = await resp.json();

            setOneBill(data.factura);
        }
        getBaucher();
    }, [id])
    

    const {createdAt, tipoFactura, cliente, detalleFacturas, total, montoPagado, cambio} = oneBill;

    return oneBill === '' ? <SpinerLoading /> : (
        <div className='bg-white flex'>
            <div key={id} className='w-80 flex flex-col justify-center items-center text-sm bg-white'>
                <div>
                    <img className='w-28' src={logo} alt="" />
                </div>
                <div className='flex flex-row'>
                    <p className='font-semibold'>Fecha</p>
                    <p className='ml-2'>{moment(createdAt).format('lll')}</p>
                </div>
                <div className='flex flex-row'>
                    <p className='font-semibold'>Factura</p>
                    <p className='ml-2'>#00{id}</p>
                </div>
                <div className='flex flex-row'>
                    <p className='font-semibold'>Tipo de factura:</p>
                    <p className='ml-2'>{tipoFactura}</p>
                </div>
                <div className='flex flex-row'>
                    <p className='font-semibold'>Cliente</p>
                    <p className='ml-2'>{cliente}</p>
                </div>
                <div className='w-80 flex flex-row justify-between bg-gray-200 mt-4 font-semibold'>
                    <div className='w-10 text-center'><p>Cant.</p></div>
                    {
                        Access.almacenId === 5 ? (
                            <div className='w-20 text-center'><p>Modelo</p></div>
                        ) : (
                            <div className='w-20 text-center'><p>Código</p></div>
                        )
                    }
                    <div className='w-20 text-center'><p>Producto</p></div>
                    <div className='w-10 text-center'><p>Precio</p></div>
                    <div className='w-10 text-center'><p>Total</p></div>
                </div>
                {
                    detalleFacturas?.map((detalle) => (
                        <div key={detalle.id} className='w-80 flex flex-row justify-between mt-2'>
                            <div className='w-10 text-center text-xs'><p>{detalle.unidades}</p></div>
                            {
                                Access.almacenId === 5 ? (
                                    <div className='w-20 text-center text-xs'><p>{detalle.modelo}</p></div>
                                ) : (
                                    <div className='w-20 text-center text-xs'><p>{detalle.codigoUno}</p></div>
                                )
                            }
                            <div className='w-20 text-center text-xs'><p>{detalle.almacen}</p></div>
                            <div className='w-10 text-center text-xs'><p>{parseFloat(detalle.precioVenta).toLocaleString('us-Us')}</p></div>
                            <div className='w-10 text-center text-xs'><p>{parseFloat(detalle.precioTotalVenta).toLocaleString('us-Us')}</p></div>
                        </div>
                    ))
                }
                <div className='w-72 flex flex-col items-end mt-4'>
                    <div className='flex flex-row w-40 justify-between'>
                        <p className='font-semibold'>Total</p>
                        <p className='ml-2'>C${parseFloat(total).toLocaleString('us-Us')}</p>
                    </div>
                    <div className='flex flex-row w-40 justify-between'>
                        <p className='font-semibold'>Monto recibido</p>
                        <p className='ml-2'>C${parseFloat(montoPagado).toLocaleString('us-Us')}</p>
                    </div>
                    <div className='flex flex-row w-40 justify-between'>
                        <p className='font-semibold'>Cambio</p>
                        <p className='ml-2'>C${parseFloat(cambio).toLocaleString('us-Us')}</p>
                    </div>
                </div>
                <div className='mt-4'>
                    <p>¡Gracias por su compra!</p>
                </div>
            </div>
        </div>
    )
}

export default Baucher