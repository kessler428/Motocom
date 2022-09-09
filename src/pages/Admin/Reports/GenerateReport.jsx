import React, { useState } from 'react'
import { SideBar } from '../../../components/admin/SideBar'
import { Header } from '../../../components/admin/header/Header'
import { useDispatch } from 'react-redux'
import { generateReports } from '../../../redux/slices/reports/thunks'
import { useNavigate } from 'react-router-dom'
import { setIsLoading } from '../../../redux/slices/ui/uiSlices'

const GenerateReport = () => {

    const dispatch = useDispatch()
    const Navigate = useNavigate()

    const [data, setData] = useState({
        startDate: '',
        finalDate: '',
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
            typeOfReport: Number(data.typeOfReport)
        }

        const {
            startDate,
            finalDate,
            typeOfReport
        } = values

        dispatch(generateReports(startDate, finalDate, typeOfReport ))
        dispatch(setIsLoading(true))

        Navigate('/generate_report/report')
    }

    return (
        <div className='flex flex-row'>
            <SideBar/>
            <Header/>
    
            <hr />
    
            <div className="mx-auto w-11/12 sm:pl-56 py-24">
                <form 
                    className='border rounded-3xl bg-white px-6 mt-14 py-8'
                    onSubmit={onsubmit}
                >
                    <div className='text-4xl pb-6 font-bold'>
                        <h1>Generar reporte</h1>
                    </div>
                    <div className='flex flex-row gap-8 font-semibold mt-2'>
                        <div className='w-1/3'>
                            <label className='flex flex-col'>Fecha de inicio
                                <input 
                                    className='border rounded-lg border-black py-1 px-2 font-normal my-2' 
                                    type="date"
                                    name='startDate'
                                    value={data.startDate}
                                    onChange={ handleInputChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className='w-1/3'>
                            <label className='flex flex-col'>Fecha final
                                <input 
                                    className='border rounded-lg border-black py-1 px-2 font-normal my-2' 
                                    type="date"
                                    name='finalDate'
                                    value={data.finalDate}
                                    onChange={ handleInputChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className='w-1/3'>
                            <label className='flex flex-col'>Tipo de reporte</label>
                            <select 
                                name="typeOfReport" 
                                id="typeOfReport" 
                                value={ data.typeOfReport }
                                onChange={ handleInputChange }
                                className='border rounded-lg w-full border-black py-1 px-2 font-normal my-2'
                                required
                            >
                                <option value="none">Seleccione una opcion</option>
                                <option value="1">Ventas de Contado</option>
                                <option value="2">Ventas de Credito</option>
                                <option value="3">Ventas de Tarjeta / Transferencia</option>
                                <option value="0">Ventas Totales</option>
                            </select>
                        </div>
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