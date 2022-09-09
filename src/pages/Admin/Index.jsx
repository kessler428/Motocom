import React from 'react'
import {SideBar} from '../../components/admin/SideBar'
import {Header} from '../../components/admin/header/Header'
import { FaWarehouse, FaUsers, FaCashRegister, FaMoneyBillWave } from 'react-icons/fa'
import SalesChart from '../../components/admin/shop/SalesChart'
import DonutChart from '../../components/admin/shop/DonutChart'

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
        
      </div>
    </>
  )
}

export default Index