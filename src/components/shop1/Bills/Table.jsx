import React from 'react'

export const Table = ({ list, deleteProduct }) => {
  return (
    <>
      {list.map((item, index) => (
        <div key={index} className="flex flex-col sm:flex-row gap-4 p-2 border">
            <div className='w-full flex flex-row justify-between sm:justify-center sm:w-1/4 sm:text-center items-center'>
              <p className='sm:hidden font-semibold text-sx'>Unidades:</p>
              <p className='text-sm'>{item.cantidad}</p>
            </div>
            <div className='w-full flex flex-row justify-between sm:justify-center sm:w-1/4 sm:text-center items-center'>
              <p className='sm:hidden font-semibold text-sx'>Producto:</p>
              <p className='text-sm'>{item.nombre}</p>
            </div>
            <div className='w-full flex flex-row justify-between sm:justify-center sm:w-1/4 sm:text-center items-center'>
              <p className='sm:hidden font-semibold text-sx'>Modelo:</p>
              <p className='text-sm'>{item.modelo}</p>
            </div>
            <div className='w-full flex flex-row justify-between sm:justify-center sm:w-1/4 sm:text-center items-center'>
              <p className='sm:hidden font-semibold text-sx'>Precio:</p>
              <p className='text-sm'>{parseFloat(item.subTotal).toFixed(2)}</p>
            </div>
            <div className='w-full sm:w-1/4 sm:text-center'>
              <button
                onClick={() => deleteProduct(item.id, item.subTotal)}
                className='bg-red-500 text-white text-sm font-bold p-2 rounded-lg w-full sm:w-20'
              >
                Eliminar
              </button>
            </div>
        </div>
      ))}
    </>
  )
}