import React from 'react'
import {SideBar} from '../../components/admin/SideBar'
import {Header} from '../../components/admin/header/Header'
import { FaWarehouse, FaUsers, FaCashRegister, FaMoneyBillWave } from 'react-icons/fa'
import SalesChart from '../../components/admin/shop/SalesChart'
import DonutChart from '../../components/admin/shop/DonutChart'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getInfoIndex } from '../../redux/slices/admin/thunks'

const Index = () => {

  const dispatch = useDispatch();
  const {index} = useSelector((state) => state.admin);

  
  useEffect(() => {
    dispatch(getInfoIndex());
  }, [dispatch]);

  const {dineroCaja, usuarios, sumaProductos, costoCompra, costoVenta, utilidadBruta} = index;

  console.log(index);

  return (
    <div className='flex flex-row'>
      <SideBar />
      <Header />

      <div className="mx-auto w-11/12 lg:pl-52 py-24">
        <h1 className="text-2xl sm:text-4xl lg:text-4xl text-titleTextColor font-bold">
          Tablero Principal
        </h1>
        <div className='flex flex-wrap gap-6 mt-8'>
          <div className='bg-dark-blue w-full lg:w-56 h-20 rounded-lg flex flex-row text-white'>
            <div className='w-20 flex justify-center items-center'>
              <FaUsers className='bg-sky-400 w-16 h-16 p-4 rounded-lg' />
            </div>
            <div className='h-14 my-auto flex flex-col justify-between'>
              <p>Usuarios</p>
              <p>{usuarios}</p>
            </div>
          </div>
          <div className='bg-dark-blue w-full lg:w-56 h-20 rounded-lg flex flex-row text-white'>
            <div className='w-20 flex justify-center items-center'>
              <FaCashRegister className='bg-red-700 w-16 h-16 p-4 rounded-lg' />
            </div>
            <div className='h-14 my-auto flex flex-col justify-between'>
              <p>Ventas del dia</p>
              <p>0</p>
            </div>
          </div>
          <div className='bg-dark-blue w-full lg:w-56 h-20 rounded-lg flex flex-row text-white'>
            <div className='w-20 flex justify-center items-center'>
              <FaMoneyBillWave className='bg-green-700 w-16 h-16 p-4 rounded-lg' />
            </div>
            <div className='h-14 my-auto flex flex-col justify-between'>
              <p>Dinero en caja</p>
              <p>{parseFloat(dineroCaja).toLocaleString('us-Us')}</p>
            </div>
          </div>
          <div className='bg-dark-blue w-full lg:w-56 h-20 rounded-lg flex flex-row text-white'>
            <div className='w-20 flex justify-center items-center'>
              <FaWarehouse className='bg-yellow-400 w-16 h-16 p-4 rounded-lg' />
            </div>
            <div className='h-14 my-auto flex flex-col justify-between'>
              <p>Inventario</p>
              <p>{parseFloat(sumaProductos).toLocaleString('us-Us')}</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center lg:flex-row lg:gap-8'>
          <SalesChart />
          <DonutChart />
        </div>
        <div className='flex flex-col sm:flex-row gap-2 mt-6'>
          <div className='w-full sm:w-1/3 bg-dark-blue text-white font-semibold flex justify-center items-center rounded-lg flex-col p-4'>
            <p>C${parseFloat(costoCompra).toLocaleString('us-Us')}</p>
            <p>Costo</p>
          </div>
          <div className='w-full sm:w-1/3 bg-dark-blue text-white font-semibold flex justify-center items-center rounded-lg flex-col p-4'>
           <p>C${parseFloat(costoVenta).toLocaleString('us-Us')}</p>
           <p>Costo de ventas</p>
          </div>
          <div className='w-full sm:w-1/3 bg-dark-blue text-white font-semibold flex justify-center items-center rounded-lg flex-col p-4'>
           <p>C${parseFloat(utilidadBruta).toLocaleString('us-Us')}</p>
           <p>Utilidad bruta</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Index