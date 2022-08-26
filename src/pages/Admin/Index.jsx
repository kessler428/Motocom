import React from 'react'
import {SideBar} from '../../components/admin/SideBar'
import {Header} from '../../components/admin/header/Header'
import { FaWarehouse, FaUsers, FaCashRegister, FaMoneyBillWave } from 'react-icons/fa'

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
        <div>
          <h1 className="text-2xl sm:text-4xl md:text-4xl text-titleTextColor font-bold mt-16">
            Tiendas
          </h1>
          <div>
            <div className='bg-dark-blue text-white p-4 rounded-lg mt-4'>
              <h3 className='text-xl font-bold'>Tienda #1</h3>
              <div className='flex flex-wrap justify-between m-2 gap-4'>
                <div className='bg-red-700 p-4 rounded-lg font-bold text-lg w-60'>
                  <p>Ventas Realizadas:</p>
                  <p> 20</p>
                </div>
                <div className='bg-yellow-400 p-4 rounded-lg font-bold text-lg w-60'>
                  <p>Dinero en caja: </p>
                  <p>C$23,000</p>
                </div>
                <div className='bg-green-700 p-4 rounded-lg font-bold text-lg w-60'>
                  <p>Inventario: </p>
                  <p>20</p>
                </div>
                <div className='bg-blue-600 p-4 rounded-lg font-bold text-lg w-60'>
                  <p>Facturas pendientes</p>
                  <p>5</p>
                </div>
              </div>
            </div>
            <div className='bg-dark-blue text-white p-4 rounded-lg mt-4'>
              <h3 className='text-xl font-bold'>Tienda #2</h3>
              <div className='flex flex-wrap justify-between m-2 gap-4'>
                <div className='bg-red-700 p-4 rounded-lg font-bold text-lg w-60'>
                  <p>Ventas Realizadas:</p>
                  <p> 20</p>
                </div>
                <div className='bg-yellow-400 p-4 rounded-lg font-bold text-lg w-60'>
                  <p>Dinero en caja: </p>
                  <p>C$23,000</p>
                </div>
                <div className='bg-green-700 p-4 rounded-lg font-bold text-lg w-60'>
                  <p>Inventario: </p>
                  <p>20</p>
                </div>
                <div className='bg-blue-600 p-4 rounded-lg font-bold text-lg w-60'>
                  <p>Facturas pendientes</p>
                  <p>5</p>
                </div>
              </div>
            </div>
            <div className='bg-dark-blue text-white p-4 rounded-lg mt-4'>
              <h3 className='text-xl font-bold'>Tienda #3</h3>
              <div className='flex flex-wrap gap-4 justify-between m-2'>
                <div className='bg-red-700 p-4 rounded-lg font-bold text-lg w-60'>
                  <p>Ventas Realizadas:</p>
                  <p> 20</p>
                </div>
                <div className='bg-yellow-400 p-4 rounded-lg font-bold text-lg w-60'>
                  <p>Dinero en caja: </p>
                  <p>C$23,000</p>
                </div>
                <div className='bg-green-700 p-4 rounded-lg font-bold text-lg w-60'>
                  <p>Inventario: </p>
                  <p>20</p>
                </div>
                <div className='bg-blue-600 p-4 rounded-lg font-bold text-lg w-60'>
                  <p>Facturas pendientes</p>
                  <p>5</p>
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