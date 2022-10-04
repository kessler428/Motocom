import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoading } from '../../../redux/slices/ui/uiSlices'
import { generateReports, generateReportsAdmin } from '../../../redux/slices/reports/thunks'

// Componentes
import { SideBar } from '../../../components/admin/SideBar'
import { Header } from '../../../components/admin/header/Header'
import { SideBar as SideBarUser } from "../../../components/shop1/SideBar";
import { Header as HeaderUser } from "../../../components/shop1/header/Header";

const GenerateReport = () => {

    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const { Access } = useSelector((state) => state.auth);

    const [data, setData] = useState({
        startDate: '',
        finalDate: '',
        almacenId: '',
        typeOfReport: ''
    })

    const handleInputChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
    };

    const onsubmit = (e) =>{
        e.preventDefault();
 
        const values = {
            startDate: data.startDate,
            finalDate: data.finalDate,
            almacenId: data.almacenId,
            tipoFactura: data.typeOfReport
        }

        const {
            startDate,
            finalDate,
            almacenId,
            tipoFactura
        } = values

        if(Access.rol === 'Vendedor'){
            dispatch(generateReports(Access.almacenId, startDate, finalDate ))
        }else{
            dispatch(generateReportsAdmin(startDate, finalDate, almacenId, tipoFactura))
        }

        dispatch(setIsLoading(true))
        if(tipoFactura === '0'){
            Navigate('report_total_sales')
        }else{
            Navigate('report')
        }
    }

    return (
        <div className='flex flex-row'>
            {Access.rol === "Vendedor" ? (
                    <>
                        <SideBarUser />
                        <HeaderUser />
                    </>
                ) : (
                    <>
                        <SideBar />
                        <Header />
                    </>
                )
            }
    
            <div className="mx-auto w-11/12 lg:pl-56 py-24">
                <form 
                    className='border rounded-3xl bg-white px-6 mt-14 py-8'
                    onSubmit={onsubmit}
                >
                    <div className='text-4xl pb-6 font-bold'>
                        <h1>Generar reporte de ventas</h1>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-2 font-semibold mt-2'>
                        <div className='w-full sm:w-1/2'>
                            <label className='flex flex-col'>Fecha de inicio
                                <input 
                                    className='border rounded-lg border-black py-1 px-2 font-normal my-2 w-full' 
                                    type="date"
                                    name='startDate'
                                    value={data.startDate}
                                    onChange={ handleInputChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className='w-full sm:w-1/2'>
                            <label className='flex flex-col'>Fecha final
                                <input 
                                    className='border rounded-lg border-black py-1 px-2 font-normal my-2 w-full' 
                                    type="date"
                                    name='finalDate'
                                    value={data.finalDate}
                                    onChange={ handleInputChange}
                                    required
                                />
                            </label>
                        </div>
                        {Access.rol === 'Administrador' && (
                            <>
                                <div className='w-full sm:w-1/2'>
                                    <label className='flex flex-col'>Almacen
                                            <select
                                                className='border rounded-lg border-black py-1 px-2 font-normal my-2 w-full'
                                                name='almacenId'
                                                value={data.almacenId}
                                                onChange={ handleInputChange}
                                                required
                                            >
                                                <option value='none'>Seleccione un almacen</option>
                                                <option value='2'>Almacen Principal</option>
                                                <option value='3'>Camion Marlon</option>
                                                <option value='4'>Camion Miguel</option>
                                                <option value='5'>Camion Pokemon</option>
                                                <option value='0'>Todos los puntos de ventas</option>
                                            </select>
                                    </label>
                                </div>
                                <div className='w-full sm:w-1/2'>
                                    <label className='flex flex-col'>Tipo de reporte
                                            <select
                                                className='border rounded-lg border-black py-1 px-2 font-normal my-2 w-full'
                                                name='typeOfReport'
                                                value={data.typeOfReport}
                                                onChange={ handleInputChange}
                                                required
                                            >
                                                <option value='none'>Seleccione un tipo de reporte</option>
                                                <option value='1'>credito</option>
                                                <option value='2'>contado</option>
                                                <option value='3'>Tarjeta</option>
                                                <option value='0'>Total de ventas</option>
                                            </select>
                                    </label>
                                </div>
                            </>
                        )}
                    </div>
                    <div className='flex justify-end my-6'>
                        <button className='bg-orange hover:bg-hover-orange px-4 py-2 rounded-lg text-white font-bold'>
                            Generar
                        </button>
                    </div>
                </form>
            </div>
        </div>
      )
}

export default GenerateReport;