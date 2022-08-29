import React, { useEffect } from 'react'
import pedidos from "../../../img/pedidos.png";
import { Header } from '../../../components/admin/header/Header'
import { SideBar } from '../../../components/admin/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { TableData } from '../../../components/admin/credits/creditsAdmin/TableData';
import { getAllCredits } from '../../../redux/slices/Credits/thunks';

const Credits = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCredits())
    },[dispatch])

    const { listCredits } = useSelector((state) => state.credits)

    return (
        <>
            <SideBar/>
            <Header/>

            <div className="mx-auto w-10/12 sm:pl-12 py-24">
                <div className='w-full flex flex-row justify-between'>
                    <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold">
                        Creditos
                    </h1>
                    <NavLink to='/closed_credits' className='bg-orange hover:bg-hover-orange px-4 py-2 rounded-lg text-white font-bold'>
                        Ver creditos cancelados
                    </NavLink>
                </div>

                {listCredits === [] ? (
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

export default Credits