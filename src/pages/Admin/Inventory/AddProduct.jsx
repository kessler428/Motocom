import React, { useState } from 'react'
import { SideBar } from '../../../components/admin/SideBar'
import { Header } from '../../../components/admin/header/Header'

import { NavLink } from 'react-router-dom';

const AddProduct = () => {

    const [datos, setDatos] = useState({
        nombreArticulo: '',
        codigoUno: '',
        codigoDos: '',
        modelo: '',
        marca: '',
        precioVenta: '',
        precioCompra: '',
        notas: '',
        stock: [],
    })

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <SideBar/>
            <Header/>

            <hr />

            <div className="mx-auto w-10/12 sm:pl-12 py-24">
                <NavLink 
                    to='/inventory'
                    className='text-blue-600 hover:underline'
                >
                    {'< Regresar'}
                </NavLink>
                <form 
                    className=' rounded-3xl px-6 mt-14 bg-white'
                >
                    <div className='text-4xl py-4 text-orange font-bold'>
                        <h1>Agregar Producto</h1>
                    </div>
                    <div className='flex flex-row gap-8 font-bold mt-2'>
                        <div className='w-1/3'>
                            <label className='flex flex-col my-2 text-lg'>Nombre del producto
                                <input
                                    type="text"
                                    name='nombreArticulo'
                                    onChange={handleChange}
                                    value={datos.nombreArticulo}
                                    className='border rounded-lg border-black py-2 px-3 text-lg font-normal'
                                />
                            </label>
                        </div>
                        <div className='w-1/3'>
                            <label className='flex flex-col my-2 text-lg'>Codigo 1
                                <input
                                    min={0}
                                    type="text"
                                    name='codigoUno'
                                    onChange={handleChange}
                                    value={datos.codigoUno}
                                    className='border rounded-lg border-black py-2 px-3 text-lg font-normal'
                                />
                            </label>
                        </div>
                        <div className='w-1/3'>
                            <label className='flex flex-col my-2 text-lg'>Codigo 2
                                <input
                                    type="text"
                                    name='codigoDos'
                                    onChange={handleChange}
                                    value={datos.codigoDos}
                                    className='border rounded-lg border-black py-2 px-3 text-lg font-normal'
                                />
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-row gap-8 font-bold mt-2'>
                        <div className='w-1/3'>
                            <label className='flex flex-col my-2 text-lg'>Precio de compra
                                <input
                                    min={0}
                                    type="number"
                                    name='precioCompra'
                                    onChange={handleChange}
                                    value={datos.precioCompra}
                                    className='border rounded-lg border-black py-1 px-2 font-light '
                                />
                            </label>
                        </div>
                        <div className='w-1/3'>
                            <label className='flex flex-col my-2 text-lg'>Precio de venta
                                <input
                                    min={0}
                                    type="number"
                                    name='precioVenta'
                                    onChange={handleChange}
                                    value={datos.precioVenta}
                                    className='border rounded-lg border-black py-1 px-2 font-light '
                                />
                            </label>
                        </div>
                        <div className='w-1/3'>
                            <label className='flex flex-col my-2 text-lg'>Stock
                                <input
                                    min={0}
                                    type="number"
                                    name='stock'
                                    onChange={handleChange}
                                    value={datos.stock}
                                    className='border rounded-lg border-black py-1 px-2 font-light '
                                />
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-row gap-8 font-bold mt-2 mb-8'>
                        <div className='w-1/3'>
                            <label className='flex flex-col my-2 text-lg'>Marca
                                <input
                                    type='text'
                                    name='marca'
                                    value={datos.marca}
                                    onChange={handleChange}
                                    className='border rounded-lg border-black py-1 px-2 font-normal'
                                />
                            </label>
                        </div>
                        <div className='w-1/3'>
                            <label className='flex flex-col my-2 text-lg'>Modelo / Presentacion
                                <input
                                    type="text"
                                    name='modelo'
                                    onChange={handleChange}
                                    value={datos.modelo}
                                    className='border rounded-lg border-black py-2 px-3 text-lg font-normal'
                                />
                            </label>
                        </div>
                        <div className='w-1/3'>
                            <label className='flex flex-col my-2 text-lg'>Comentario
                                <input
                                    type="text"
                                    name='notas'
                                    value={datos.notas}
                                    onChange={handleChange}
                                    className='border rounded-lg border-black py-2 px-3 text-lg font-normal'
                                />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-center my-6'>
                        <button className='bg-orange hover:bg-hover-orange px-4 py-2 rounded-lg text-white font-bold'>
                            Agregar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddProduct