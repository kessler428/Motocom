import React, { Fragment, useEffect } from 'react'
import { SideBar } from '../../components/shop1/SideBar'
import { Header } from '../../components/shop1/header/Header'
import { NavLink } from 'react-router-dom'
import { getIndexInfo } from '../../redux/slices/shop/thunks'
import { useDispatch, useSelector } from 'react-redux'

const Index = () => {
  const dispatch = useDispatch();
  const { Access } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(getIndexInfo(Access.almacenId))
  }, [Access.almacenId, dispatch])

  const { index } = useSelector(state => state.shop);
  const { dineroDelDia, facturasDelDia, nombreArticulo } = index;
  
  return (
    <>
      <SideBar />
      <Header/>
      <div className="mx-auto w-11/12 lg:pl-56 py-24">
        <h1 className='text-4xl font-bold'>Tablero Principal</h1>
        <div className='flex flex-wrap gap-4 my-10 text-white'>
          <NavLink to='/bills'  className='flex justify-between flex-col text-start w-full sm:w-72 md:w-96 lg:w-60 border-4 border-teal-700 h-28 bg-teal-700 p-4 rounded-lg hover:bg-teal-800'>
            <p className='text-2xl font-bold'>Nueva factura</p>
            <h3 className=''>Facturar</h3>
          </NavLink>
          <NavLink to='/shop/inventory' className=' flex justify-between flex-col text-start w-full sm:w-72 md:w-96 lg:w-60 border-4 border-cyan-800 h-28 bg-cyan-800 p-4 rounded-lg hover:bg-cyan-900'>  
            <p className='text-lg font-bold'>Producto mas vendido</p>
            <h3>{nombreArticulo}</h3>
          </NavLink>
          <NavLink to='/details_bills' className='flex justify-between flex-col text-start w-full sm:w-72 md:w-96 lg:w-60 border-4 border-yellow-500 h-28 bg-yellow-500 p-4 rounded-lg hover:bg-yellow-600'>
          <p className='text-xl font-bold'>facturas realizadas</p>
            <h3 className='text-xl font-bold'>{facturasDelDia}</h3>
          </NavLink>
          <div className='flex justify-between flex-col  text-start w-full sm:w-72 md:w-96 lg:w-60 border-4 border-red-900 h-28 bg-red-800 p-4 rounded-lg hover:bg-red-900'> 
          <p className='text-xl font-bold'>Dinero en caja</p>
            {
              dineroDelDia === null ? (
                <>
                  <h3 className='text-2xl font-bold'>0</h3>
                </>
              ) : (
                <>
                  <h3 className='text-2xl font-bold'>C${parseFloat(dineroDelDia).toLocaleString('us-Us')}</h3>
                </>
              )
            }
          </div>
          {
            Access.almacenId === 2 && (
              <NavLink to='/details_bills' className='flex justify-between flex-col text-start w-full sm:w-72 md:w-96 lg:w-60 border-4 border-green-500 h-28 bg-green-500 p-4 rounded-lg hover:bg-green-600'>
                <p className='text-xl font-bold'>Facturas Pendientes</p>
                <h3 className='text-2xl font-bold'>{facturasDelDia}</h3>
              </NavLink>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Index