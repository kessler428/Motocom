import React, { useEffect } from 'react'
import pedidos from "../../../img/pedidos.png";
import { Header } from '../../../components/admin/header/Header'
import { SideBar } from '../../../components/admin/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { TableData } from '../../../components/admin/credits/closedCredits/TableData';
import { getAllClosedCredits } from '../../../redux/slices/Credits/thunks';
import { NavLink } from 'react-router-dom';

const ClosedCredits = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllClosedCredits())
    },[dispatch])

    const { closedCreditsList } = useSelector((state) => state.credits)

    return (
        <>
            <SideBar/>
            <Header/>

            <div className="mx-auto w-11/12 lg:pl-56 py-24">
                <NavLink 
                    to='/credits'
                    className='text-blue-600 hover:underline'
                >
                    {'< Regresar'}
                </NavLink>
                <div className='w-full flex flex-row mt-8 justify-between'>
                    <h1 className="text-2xl sm:text-4xl md:text-4xl text-titleTextColor font-bold">
                        Creditos Cancelados
                    </h1>
                </div>

                {closedCreditsList === [] ? (
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

export default ClosedCredits;