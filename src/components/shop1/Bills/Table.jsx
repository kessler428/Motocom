import React from 'react'

export const Table = ({ list, deleteProduct }) => {
  return (
    <>
      {list.map((item, index) => (
        <div key={index} className="flex flex-row gap-4 p-2">
            <div className='w-1/4 text-center'>
              <p>{item.cantidad}</p>
            </div>
            <div className='w-1/4 text-center'>
              <p>{item.nombre}</p>
            </div>
            <div className='w-1/4 text-center'>
              <p>{item.modelo}</p>
            </div>
            <div className='w-1/4 text-center'>
              <p>{item.subTotal}</p>
            </div>
            <div className='w-1/4 text-center'>
              <button
                onClick={() => deleteProduct(item.id, item.subTotal)}
                className='bg-red-500 text-white text-sm font-bold p-2 rounded-lg'
              >
                Eliminar
              </button>
            </div>
        </div>
      ))}
    </>
  )
}