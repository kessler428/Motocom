import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../../components/admin/header/Header'
import { SideBar } from '../../../components/admin/SideBar'

const Index = () => {
  return (
    <>
        <SideBar />
        <Header />

      <hr />

        <div className="mx-auto w-11/12 sm:pl-12 py-24">
            <h1 className="text-2xl sm:text-4xl md:text-4xl text-titleTextColor font-bold">
                Tiendas
            </h1>
            <div className="mt-6 flex flex-col items-center p-4">
          <div className="bg-dark-blue text-white p-4 rounded-lg border w-full">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold">Tienda #1</h3>
              <div className='flex flex-wrap justify-center gap-6 mt-4'>
                <NavLink to='/admin/shop/1/inventory' className='bg-sky-500 w-56 px-3 py-3 rounded-lg'>
                    <p className='font-semibold text-lg'>Ver Inventario</p>
                    <p className=''>5000 Productos</p>
                </NavLink>
                <NavLink to='/admin/shop/1/inventory' className='bg-yellow-500 w-56 px-3 py-2 rounded-lg'>
                    <p className='font-semibold text-lg'>Ver Facturas Realizadas</p>
                    <p>12</p>
                </NavLink>
                <div className='bg-red-600 w-56 px-3 py-2 rounded-lg'>
                    <p className='font-semibold text-lg'>Dinero en caja</p>
                    <p>C$ 8000</p>
                </div>
                <div className='bg-blue-600 w-56 px-3 py-2 rounded-lg'>
                    <p className='font-semibold text-lg'>Inversion</p>
                    <p>C$ 75000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-dark-blue text-white p-4 rounded-lg border w-full mt-4">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold">Tienda #2</h3>
              <div className='flex flex-wrap justify-center gap-6 mt-4'>
                <div className='bg-sky-500 w-56 px-3 py-3 rounded-lg'>
                    <NavLink className='font-semibold text-lg' to='/admin/shop/1/inventory'>Ver Inventario</NavLink>
                    <p className=''>5000 Productos</p>
                </div>
                <div className='bg-yellow-500 w-56 px-3 py-2 rounded-lg'>
                    <NavLink className='font-semibold text-lg' to='/admin/shop/1/inventory'>Ver Facturas Realizadas</NavLink>
                    <p>12</p>
                </div>
                <div className='bg-red-600 w-56 px-3 py-2 rounded-lg'>
                    <p className='font-semibold text-lg'>Dinero en caja</p>
                    <p>C$ 8000</p>
                </div>
                <div className='bg-blue-600 w-56 px-3 py-2 rounded-lg'>
                    <p className='font-semibold text-lg'>Inversion</p>
                    <p>C$ 75000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-dark-blue text-white p-4 rounded-lg border w-full mt-4">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold">Tienda #3</h3>
              <div className='flex flex-wrap justify-center gap-6 mt-4'>
                <div className='bg-sky-500 w-56 px-3 py-3 rounded-lg'>
                    <NavLink className='font-semibold text-lg' to='/admin/shop/1/inventory'>Ver Inventario</NavLink>
                    <p className=''>5000 Productos</p>
                </div>
                <div className='bg-yellow-500 w-56 px-3 py-2 rounded-lg'>
                    <NavLink className='font-semibold text-lg' to='/admin/shop/1/inventory'>Ver Facturas Realizadas</NavLink>
                    <p>12</p>
                </div>
                <div className='bg-red-600 w-56 px-3 py-2 rounded-lg'>
                    <p className='font-semibold text-lg'>Dinero en caja</p>
                    <p>C$ 8000</p>
                </div>
                <div className='bg-blue-600 w-56 px-3 py-2 rounded-lg'>
                    <p className='font-semibold text-lg'>Inversion</p>
                    <p>C$ 75000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-dark-blue text-white p-4 rounded-lg border w-full mt-4">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold">Tienda #4</h3>
              <div className='flex flex-wrap justify-center gap-6 mt-4'>
                <div className='bg-sky-500 w-56 px-3 py-3 rounded-lg'>
                    <NavLink className='font-semibold text-lg' to='/admin/shop/1/inventory'>Ver Inventario</NavLink>
                    <p className=''>5000 Productos</p>
                </div>
                <div className='bg-yellow-500 w-56 px-3 py-2 rounded-lg'>
                    <NavLink className='font-semibold text-lg' to='/admin/shop/1/inventory'>Ver Facturas Realizadas</NavLink>
                    <p>12</p>
                </div>
                <div className='bg-red-600 w-56 px-3 py-2 rounded-lg'>
                    <p className='font-semibold text-lg'>Dinero en caja</p>
                    <p>C$ 8000</p>
                </div>
                <div className='bg-blue-600 w-56 px-3 py-2 rounded-lg'>
                    <p className='font-semibold text-lg'>Inversion</p>
                    <p>C$ 75000</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </>
  )
}

export default Index