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
      <div className='w-10/12 flex flex-col justify-center mx-auto mt-20 '>
        <h1 className='text-4xl font-bold'>Tablero Principal</h1>
        <div className='flex flex-wrap gap-8 my-10 text-white'>
          <NavLink to='/bills'  className='flex justify-between flex-col text-start w-80 lg:w-64 border-4 border-teal-700 h-28 bg-teal-700 p-4 rounded-lg hover:bg-teal-800'>
            <h3 className='text-2xl font-bold '>Facturar</h3>
            <p>Nueva factura</p>
          </NavLink>
          <NavLink to='/level1/inventory' className=' flex justify-between flex-col text-start w-80 lg:w-64 border-4 border-cyan-800 h-28 bg-cyan-800 p-4 rounded-lg hover:bg-cyan-900'>  
            <h3 className=''>{nombreArticulo}</h3>
            <p>Producto mas vendido</p>
          </NavLink>
          <NavLink to='/level1/inventory' className='flex justify-between flex-col text-start w-80 lg:w-64 border-4 border-yellow-500 h-28 bg-yellow-500 p-4 rounded-lg hover:bg-yellow-600'>
            <h3 className='text-2xl font-bold'>{facturasDelDia}</h3>
            <p>facturas realizadas</p>
          </NavLink>
          <div className='flex justify-between flex-col  text-start w-80 lg:w-64 border-4 border-red-900 h-28 bg-red-800 p-4 rounded-lg hover:bg-red-900'> 
            <h3 className='text-2xl font-bold'>{parseFloat(dineroDelDia).toFixed(2)}</h3>
            <p>Dinero en caja</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index