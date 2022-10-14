import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { SpinerLoading } from '../../../components/SpinnerLoading'
import 'moment/locale/es';
import { TableContado } from '../../../components/admin/reports/TableContado';
import { TableCredits } from '../../../components/admin/reports/TableCredits';
import { TableTarjeta } from '../../../components/admin/reports/TableTarjeta';

const ReportTotalSales = () => {
    const { isLoading } = useSelector((state) => state.ui);
    const { listReports } = useSelector((state) => state.reports)  

    return isLoading ? <SpinerLoading /> : (
        <>
            <div className="mx-auto w-11/12 py-8">
                <div className='w-full flex flex-row justify-between'>
                    <h1 className="text-3xl font-semibold">
                        Reporte de ventas
                    </h1>
                    <NavLink to='/generate_report' className="bg-blue-600 p-2 rounded-lg text-white font-bold">
                        Regresar
                    </NavLink>
                </div>
                <div>
                    <TableContado />
                    <TableCredits />
                    <TableTarjeta />
                </div>
                <div className='mt-8 flex flex-col sm:flex-row justify-between gap-8'>
                    <div className='bg-green-700 text-white rounded-lg font-semibold p-2 w-full sm:w-1/3 text-center'>
                        <h1 className="text-xl font-semibold">Abonos</h1>
                        {
                            listReports.data.credito.sumaAbonos > 0 ? (
                                <p className="font-semibold mt-2">
                                    Total de abonos: C${listReports.data.credito.sumaAbonos}
                                </p>
                            ) : (
                                <p className="font-semibold mt-2">
                                    No hay abonos
                                </p>
                            )
                        }
                    </div>
                    <div className='bg-green-700 text-white rounded-lg font-semibold p-2 w-full sm:w-1/3 text-center'>
                        <h1 className="text-xl font-semibold">Ventas de contado mas abonos:</h1>
                        <p className="font-semibold mt-2">C${parseFloat(listReports.data.contado.sumaTotal + listReports.data.credito.sumaAbonos).toLocaleString('us-Us')}</p>
                    </div>
                    <div className='bg-green-700 text-white rounded-lg font-semibold p-2 w-full sm:w-1/3 text-center'>
                        <h1 className="text-xl font-semibold">Total Ventas:</h1>
                        <p className="font-semibold mt-2">C${parseFloat(listReports.data.contado.sumaTotal + listReports.data.credito.sumaTotal + listReports.data.tarjeta.sumaTotal).toLocaleString('us-Us')}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReportTotalSales