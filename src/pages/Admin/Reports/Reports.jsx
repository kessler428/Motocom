import React from 'react'
import pedidos from "../../../img/pedidos.png";
import { Header } from '../../../components/admin/header/Header'
import { SideBar } from '../../../components/admin/SideBar'
import { useSelector } from 'react-redux'
import { TableData } from '../../../components/admin/reports/TableData';
import { SpinerLoading } from '../../../components/SnpinnerLoading';

const Reports = () => {

    const { listReports } = useSelector((state) => state.reports)
    const { isLoading } = useSelector((state) => state.ui)

    return (
        <>
            {
                isLoading ? <SpinerLoading /> : (
                    <>
                        <SideBar/>
                        <Header/>

                        <div className="mx-auto w-10/12 sm:pl-12 py-24">
                            <div className='w-full flex flex-row justify-between'>
                                <h1 className="text-2xl sm:text-4xl md:text-4xl text-titleTextColor font-bold mb-10">
                                    Reporte de ventas
                                </h1>
                            </div>

                            {listReports.products.length === 0 ? (
                                <div className="flex flex-col mt-10 justify-center ml-20">
                                    <div className="flex justify-center">
                                        <img
                                            src={pedidos}
                                            alt=""
                                            className="h-32 bg-gray-100 rounded-full p-4 w-32"
                                        />
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="text-gray-600 font-bold">
                                            No hay productos en stock
                                        </p>
                                    </div>
                                </div>
                                ) : (
                                <TableData />
                            )}
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Reports;