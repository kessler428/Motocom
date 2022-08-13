import React from 'react'
import { SideBar } from '../../../components/admin/SideBar'
import { Header } from '../../../components/header/Header'

const GenerateReport = () => {
    return (
        <>
            <Header/>
            <SideBar/>
    
            <hr />
    
            <div className="mx-auto w-10/12 sm:pl-12 py-24">
                <form 
                    className='border-4 rounded-3xl border-orange px-6 mt-14 py-8'
                >
                    <div className='text-center text-4xl pb-6 text-orange font-bold'>
                        <h1>Generar reporte</h1>
                    </div>
                    <div className='flex flex-row gap-8 font-bold mt-2'>
                        <div className='w-1/3'>
                            <label className='text-center flex flex-col'>Fecha de inicio
                                <input className='border-2 border-black py-1 px-2 font-normal my-2' type="date" />
                            </label>
                        </div>
                        <div className='w-1/3'>
                            <label className='text-center flex flex-col'>Fecha final
                                <input className='border-2 border-black py-1 px-2 font-normal my-2' type="date" />
                            </label>
                        </div>
                        <div className='w-1/3'>
                            <label className='text-center flex flex-col'>Tipo de reporte</label>
                            <select name="" id="" className='border-2 w-full border-black py-1 px-2 font-normal my-2'>
                                <option value="">Seleccione una opcion</option>
                                <option value="">Ventas de Contado</option>
                                <option value="">Ventas de Credito</option>
                                <option value="">Ventas de Tarjeta / Transferencia</option>
                                <option value="">Ventas Totales</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex justify-center my-6'>
                        <button className='bg-orange hover:bg-hover-orange px-4 py-2 rounded-lg text-white font-bold'>
                            Agregar
                        </button>
                    </div>
                </form>
            </div>
        </>
      )
}

export default GenerateReport;