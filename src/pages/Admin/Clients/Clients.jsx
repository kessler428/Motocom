import React, { useEffect } from 'react'
import pedidos from "../../../img/pedidos.png";
import { Header } from '../../../components/admin/header/Header'
import { SideBar } from '../../../components/admin/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { TableData } from '../../../components/admin/clients/TableData';
import { getAllClients } from '../../../redux/slices/clients/thunks';

const Clients = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllClients())
    },[dispatch])

    const { listClients } = useSelector((state) => state.clients)

    return (
        <div className='flex flex-row'>
            <SideBar/>
            <Header/>

            <div className="mx-auto w-11/12 sm:pl-56 py-24">
                <div className='w-full flex flex-row justify-between'>
                    <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold">
                        Clientes
                    </h1>
                    <NavLink to='/add_client' className='bg-orange hover:bg-hover-orange px-4 py-2 rounded-lg text-white font-bold'>
                        Agregar cliente
                    </NavLink>
                </div>

                {listClients === [] ? (
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
        </div>
    )
}

export default Clients;