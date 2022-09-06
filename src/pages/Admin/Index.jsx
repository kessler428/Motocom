import React from 'react'
import {SideBar} from '../../components/admin/SideBar'
import {Header} from '../../components/admin/header/Header'
import { FaWarehouse, FaUsers, FaCashRegister, FaMoneyBillWave } from 'react-icons/fa'
import SalesChart from '../../components/admin/shop/SalesChart'
import DonutChart from '../../components/admin/shop/DonutChart'
import { NavLink } from 'react-router-dom'

const Index = () => {
  return (
    <>
      <SideBar />
      <Header />

      <hr />

      <div className="mx-auto w-10/12 sm:pl-12 py-24">
        <h1 className="text-2xl sm:text-4xl md:text-4xl text-titleTextColor font-bold">
          Tablero Principal
        </h1>
        <div className='flex flex-row gap-6 mt-8'>
          <div className='bg-dark-blue w-1/4 h-20 rounded-lg flex flex-row text-white'>
            <div className='w-20 flex justify-center items-center'>
              <FaUsers className='bg-sky-400 w-16 h-16 p-4 rounded-lg' />
            </div>
            <div className='h-14 my-auto flex flex-col justify-between'>
              <p>Usuarios</p>
              <p>0</p>
            </div>
          </div>
          <div className='bg-dark-blue w-1/4 h-20 rounded-lg flex flex-row text-white'>
            <div className='w-20 flex justify-center items-center'>
              <FaCashRegister className='bg-red-700 w-16 h-16 p-4 rounded-lg' />
            </div>
            <div className='h-14 my-auto flex flex-col justify-between'>
              <p>Ventas del dia</p>
              <p>0</p>
            </div>
          </div>
          <div className='bg-dark-blue w-1/4 h-20 rounded-lg flex flex-row text-white'>
            <div className='w-20 flex justify-center items-center'>
              <FaWarehouse className='bg-yellow-400 w-16 h-16 p-4 rounded-lg' />
            </div>
            <div className='h-14 my-auto flex flex-col justify-between'>
              <p>Dinero en caja</p>
              <p>0</p>
            </div>
          </div>
          <div className='bg-dark-blue w-1/4 h-20 rounded-lg flex flex-row text-white'>
            <div className='w-20 flex justify-center items-center'>
              <FaMoneyBillWave className='bg-green-700 w-16 h-16 p-4 rounded-lg' />
            </div>
            <div className='h-14 my-auto flex flex-col justify-between'>
              <p>Inventario</p>
              <p>0</p>
            </div>
          </div>
        </div>
        <div className='flex flex-row gap-8'>
          <SalesChart />
          <DonutChart />
        </div>
        <h1 className="text-4xl sm:text-4xl md:text-4xl text-titleTextColor font-bold mt-8">
          Tiendas
        </h1>
        <div className="mt-6 flex flex-row justify-between items-center p-4">
          <div className="bg-dark-blue text-white p-4 rounded-lg border w-60">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold">Tienda #1</h3>
              <NavLink to="/shop_one" className="bg-orange hover:bg-hover-orange p-2 rounded-lg mt-2">
                Ir a la tienda
              </NavLink>
            </div>
          </div>
          <div className="bg-dark-blue text-white p-4 rounded-lg border w-60">
            <div className="flex flex-col justify-between items-center">
              <h3 className="text-xl font-bold">Tienda #2</h3>
              <NavLink to="/shop_two" className="bg-orange hover:bg-hover-orange p-2 rounded-lg mt-2">
                Ir a la tienda
              </NavLink>
            </div>
          </div>
          <div className="bg-dark-blue text-white p-4 rounded-lg border w-60">
            <div className="flex flex-col justify-between items-center">
              <h3 className="text-xl font-bold">Tienda #3</h3>
              <NavLink to="/shop_three" className="bg-orange hover:bg-hover-orange p-2 rounded-lg mt-2">
                Ir a la tienda
              </NavLink>
            </div>
          </div>
          <div className="bg-dark-blue text-white p-4 rounded-lg border w-60">
            <div className="flex flex-col justify-between items-center">
              <h3 className="text-xl font-bold">Tienda #4</h3>
              <NavLink to="/shop_four" className="bg-orange hover:bg-hover-orange p-2 rounded-lg mt-2">
                Ir a la tienda
              </NavLink>
            </div>
          </div>
          </div>
      </div>
    </>
  )
}

export default Index