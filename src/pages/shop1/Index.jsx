import React, { Fragment } from 'react'
import { SideBar } from '../../components/shop1/SideBar'
import { Header } from '../../components/shop1/header/Header'

const Index = () => {
  return (
    <>
      <SideBar />
      <Header/>
      <div className='w-10/12 flex flex-col justify-center mx-auto mt-20 '>
        <h1 className='text-4xl font-bold'>Tablero Principal</h1>
        <div className='flex flex-wrap  gap-8 my-10 text-white'>
          <div className='w-80 lg:w-72 border-4 border-sky-600 h-28 bg-sky-400 p-2 rounded-2xl'>
            <h3 className='text-2xl font-bold'>Facturar</h3>
            <p>Nueva factura</p>
          </div>
          <div className='w-80 lg:w-72 border-4 border-green-900 h-28 bg-green-700 p-2 rounded-2xl'>  
          <h3 className='text-2xl font-bold'>Productos</h3>
          <p>Producto mas vendido</p>
          </div>
          <div className='w-80 lg:w-72 border-4 border-yellow-700 h-28 bg-yellow-500 p-2 rounded-2xl'>
          <h3 className='text-2xl font-bold'>Facturas</h3>
          <p>facturas realizadas</p>
          </div>
          <div className='w-80 lg:w-72 border-4 border-red-900 h-28 bg-red-700 p-2 rounded-2xl'> 
          <h3 className='text-2xl font-bold'>Dinero</h3>
          <p>Dinero en caja</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index