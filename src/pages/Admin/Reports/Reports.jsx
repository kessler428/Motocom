import React from 'react'
import { Header } from '../../../components/admin/header/Header'
import { SideBar } from '../../../components/admin/SideBar'
import { useSelector } from 'react-redux'
import { SpinerLoading } from '../../../components/SpinnerLoading';
import { NavLink } from 'react-router-dom';
import { SideBar as SideBarUser } from "../../../components/shop1/SideBar";
import { Header as HeaderUser } from "../../../components/shop1/header/Header";
import { TableData } from '../../../components/admin/reports/TableData';

const Reports = () => {

    const { listReports } = useSelector((state) => state.reports)
    const { isLoading } = useSelector((state) => state.ui)
    const { Access } = useSelector((state) => state.auth);

    const { contado, abonados, credito, reporte } = listReports;

    return (
        <>
            {
                isLoading ? <SpinerLoading /> : (
                    <>
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
                            <div className='w-full flex flex-row justify-between'>
                                <h1 className="text-3xl font-semibold">
                                    Reporte de ventas
                                </h1>
                                <NavLink to='/generate_report' className="bg-blue-600 p-2 rounded-lg text-white font-bold">
                                    Regresar
                                </NavLink>
                            </div>

                            {
                                Access.rol === "Vendedor" ? (
                                    <div className='border-2 w-4/5 p-2 rounded-lg border-gray-700 mt-8'>
                                        <div className='flex flex-row justify-between'>
                                            <p className='font-semibold text-xl'>Total de venta de contado:</p>
                                            <p className='text-xl'>C${parseFloat(contado.suma).toLocaleString('us-Us')}</p>
                                        </div>
                                        <div className='flex flex-row justify-between'>
                                            <p className='font-semibold text-xl'>Total de venta de creditos:</p>
                                            <p className='text-xl'>C${parseFloat(credito.suma).toLocaleString('us-Us')}</p>
                                        </div>
                                        <div className='flex flex-row justify-between'>
                                            <p className='font-semibold text-xl'>Total de abonos:</p>
                                            <p className='text-xl'>C${parseFloat(abonados.suma).toLocaleString('us-Us')}</p>
                                        </div>

                                        <div className='flex flex-row justify-between'>
                                            <p className='font-semibold text-xl'>Total de ventas:</p>
                                            <p className='text-xl'>C${parseFloat(contado.suma + abonados.suma + credito.suma).toLocaleString('us-Us')}</p>
                                        </div>
                                        <div className='flex flex-row justify-between'>
                                            <p className='font-semibold text-xl'>Ventas de contado mas abono:</p>
                                            <p className='text-xl'>C${parseFloat(contado.suma + abonados.suma).toLocaleString('us-Us')}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <h3 className='text-xl mt-6'>Tipo de reporte: {reporte}</h3>
                                        <TableData />
                                    </>
                                )
                            }
                            
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Reports;