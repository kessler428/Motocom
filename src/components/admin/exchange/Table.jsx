import React from 'react'

export const Table = ({cantidad, productId}) => {

  return (
    <div className="flex flex-row gap-4 p-2 border-b-2">
        <div className='w-1/3 text-center'>
            <p>{cantidad}</p>
        </div>
        <div className='w-1/3 text-center'>
            <p>{productId}</p>
        </div>
        <div className='w-1/3 text-center'>
            <p>{productId}</p>
        </div>
    </div>
  )
}