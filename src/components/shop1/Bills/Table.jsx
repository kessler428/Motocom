import React from 'react'

export const Table = ({ data, deleteProduct }) => {

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="flex flex-row gap-4 p-2">
            <div className='w-1/4 text-center'>
              <p>{item.cantidad}</p>
            </div>
            <div className='w-1/4 text-center'>
              <p>{item.productId}</p>
            </div>
            <div className='w-1/4 text-center'>
              <p>{item.productId}</p>
            </div>
            <div className='w-1/4 text-center'>
              <button
                onClick={() => deleteProduct(item.id)}
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