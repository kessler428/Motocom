import React from 'react'
import { SideBar } from '../../../components/admin/SideBar'
import { Header } from '../../../components/admin/header/Header'

import { NavLink } from 'react-router-dom';

const AddProduct = () => {
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
                className='border-2 rounded-3xl border-orange px-6 mt-14 bg-white'
            >
                <div className='text-center text-4xl py-4 text-orange font-bold'>
                    <h1>Agregar Producto</h1>
                </div>
                <div className='flex flex-row gap-8 font-bold mt-2'>
                    <div className='w-1/3'>
                        <label className='text-center flex flex-col'>Nombre del producto
                            <input className='border rounded-lg border-black py-1 px-2 font-normal ' type="text" />
                        </label>
                    </div>
                    <div className='w-1/3'>
                        <label className='text-center flex flex-col'>Codigo 1
                            <input className='border rounded-lg border-black py-1 px-2 font-normal ' min={0} type="text" />
                        </label>
                    </div>
                    <div className='w-1/3'>
                        <label className='text-center flex flex-col'>Codigo 2
                            <input className='border rounded-lg border-black py-1 px-2 font-normal ' type="text" />
                        </label>
                    </div>
                </div>
                <div className='flex flex-row gap-8 font-bold mt-2'>
                    <div className='w-1/3'>
                        <label className='text-center flex flex-col'>Precio de compra
                            <input className='border rounded-lg border-black py-1 px-2 font-light ' min={0} type="number" />
                        </label>
                    </div>
                    <div className='w-1/3'>
                        <label className='text-center flex flex-col'>Precio de venta
                            <input className='border rounded-lg border-black py-1 px-2 font-light ' min={0} type="number" />
                        </label>
                    </div>
                    <div className='w-1/3'>
                        <label className='text-center flex flex-col'>Stock
                            <input className='border rounded-lg border-black py-1 px-2 font-light ' min={0} type="number" />
                        </label>
                    </div>
                </div>
                <div className='flex flex-row gap-8 font-bold mt-2 mb-8'>
                    <div className='w-1/3'>
                        <label className='text-center flex flex-col'>Marca
                            <input className='border rounded-lg border-black py-1 px-2 font-normal' type="text" />
                        </label>
                    </div>
                    <div className='w-1/3'>
                        <label className='text-center flex flex-col'>Modelo / Presentacion
                            <input className='border rounded-lg border-black py-1 px-2 font-normal ' type="text" />
                        </label>
                    </div>
                    <div className='w-1/3'>
                        <label className='text-center flex flex-col'>Comentario
                            <input className='border rounded-lg border-black py-1 px-2 font-normal ' type="text" />
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