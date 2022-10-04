import React from 'react'

export const Table = ({data, deleteProduct}) => {
  return (
    <>
      {
        data.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row gap-4 p-2">
            <div className='md:w-1/4 text-sm text-center flex justify-between md:justify-center'>
              <p className='font-semibold md:hidden'>Cantidad:</p>
              <p>{item.stock}</p>
            </div>
            <div className='md:w-1/4 text-sm text-center flex justify-between md:justify-center'>
              <p className='font-semibold md:hidden'>Nombre:</p>
              <p>{item.productName}</p>
            </div>
            <div className='md:w-1/4 text-sm text-center flex justify-between md:justify-center'>
              <p className='font-semibold md:hidden'>Codigo:</p>
              <p>{item.codigoUno}</p>
            </div>
            <div className='w-full md:w-1/4 text-sm text-center'>
              <button onClick={() => deleteProduct(item.id)} className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 w-full md:w-28 rounded-full'>
                Eliminar
              </button>
            </div>
          </div>
        ))
      }
    </>
  )
}