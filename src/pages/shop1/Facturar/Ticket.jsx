import React from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment';

const Ticket = () => {

    const { oneBill } = useSelector((state) => state.bill);
    const { id, cliente, tipoFactura, createdAt, detalleFacturas, total, usuario, telefonoUsuario, direccionCliente } = oneBill;

    return (
        <div className='bg-white p-1 h-screen text-xs'>
            <div className='flex flex-row justify-between items-center'>
                <div className='text-4xl'>
                    M
                </div>
                <div className='text-center'>
                    <p>MOTOCOM DE NICARAGUA</p>
                    <p>MANAGUA NICARAGUA</p>
                </div>
                <div>
                    <p>NO. {id}</p>
                </div>
            </div>
            <div className='border-blue-600 border mt-8'>
                <div className='flex flex-row text-blue-600 '>
                    <div className='w-1/2 flex flex-row'>
                        <p className='border-blue-600 border-r w-[138px]'>Señor(A):</p>
                        <p className='border-blue-600 border-r w-full ml-4'>{cliente}</p>
                    </div>
                    <div className='w-1/2 flex flex-row text-center'>
                        <div className='w-1/2 border-blue-600 border-r'>
                            <p className='border-blue-600 border-b '>FECHA</p>
                            <p>{moment(createdAt).format('LLL')}</p>
                        </div>
                        <div className='w-1/2'>
                            <p className='border-blue-600 border-b '>CONDICION DE COMPRA</p>
                            <p className='text-red-600 uppercase'>{tipoFactura}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row border-blue-600 border-t text-blue-600 '>
                    <div className='w-1/2 flex flex-row'>
                        <p className='border-blue-600 border-r w-[138px]'>Direccion:</p>
                        <p className='border-blue-600 border-r w-full ml-4'>{direccionCliente}</p>
                    </div>
                    <div className='w-1/2 flex flex-row text-center'>
                        <div className='w-1/2 border-blue-600 border-r'>
                            <p className='border-blue-600 border-b '>VENDEDOR</p>
                            <p className='uppercase'>{usuario}</p>
                        </div>
                        <div className='w-1/2'>
                            <p className='border-blue-600 border-b '>TELFONO</p>
                            <p className='uppercase'>{telefonoUsuario}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row w-full justify-between border-y border-black font-semibold text-blue-800 bg-gray-200'>
                    <div className='w-28 border-r border-black text-center'>
                        <p>CANTIDAD</p>
                    </div>
                    <div className='w-28 border-r border-black text-center'>
                        <p>CODIGO</p>
                    </div>
                    <div className='w-28 border-r border-black text-center'>
                        <p>MODELO</p>
                    </div>
                    <div className='w-48 border-r border-black text-center'>
                        <p>ARTICULO</p>
                    </div>
                    <div className='w-24 border-r border-black text-center'>
                        <p>UNIDAD</p>
                    </div>
                    <div className='w-40 border-r border-black text-center'>
                        <p>PRECIO UNITARIO</p>
                    </div>
                    <div className='w-40 text-center'>
                        <p>PRECIO TOTAL</p>
                    </div>
                </div>
                {
                    detalleFacturas.map((detalle) => (
                        <div key={detalle.id} className='flex flex-row w-full justify-between border-black text-blue-600 h-8'>
                            <div className='w-28 border-r text-center border-black'>
                                <p>{detalle.unidades}</p>
                            </div>
                            <div className='w-28 border-r border-black text-center'>
                                <p>{detalle.codigoUno}</p>
                            </div>
                            <div className='w-28 border-r border-black text-center'>
                                <p>{detalle.modelo}</p>
                            </div>
                            <div className='w-48 border-r border-black text-center'>
                                <p>{detalle.almacen}</p>
                            </div>
                            <div className='w-24 border-r border-black text-center'>
                                <p>{detalle.TipoStock}</p>
                            </div>
                            <div className='w-40 border-r border-black text-center'>
                                <p>C$ {detalle.precioVenta}</p>
                            </div>
                            <div className='w-40 text-center'>
                                <p>C$ {detalle.unidades * detalle.precioVenta}</p>
                            </div>
                        </div>
            
                    ))
                }
                <div className='flex flex-row justify-between border-t border-black w-full text-blue-600 '>
                    <div className='border-r border-blue-800 w-48 text-center'>
                        <p>SUCURSAL</p>
                    </div>
                    <div className='border-r border-blue-800 w-72 text-center'>
                        <p>MANAGUA</p>
                    </div>
                    <div className='border-r border-blue-800 w-96 text-center'>
                        <p>FORMA DE PAGO</p>
                    </div>
                    <div className='border-r border-blue-800 w-96 text-center'>
                        <p className='text-red-600 uppercase'>{tipoFactura}</p>
                    </div>
                    <div className='w-60'>
                        <div className='flex flex-row justify-between w-full border-b border-blue-800'>
                            <p className='border-r border-blue-800 w-32'>SUB-TOTAL</p>
                            <p className='text-center w-64'>C$ {total}</p>
                        </div>
                        <div className='flex flex-row justify-between w-full'>
                            <p className='border-r border-black w-32'>TOTAL</p>
                            <p className='text-center w-64'>C$ {total}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket