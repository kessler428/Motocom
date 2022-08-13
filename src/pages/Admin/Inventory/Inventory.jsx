import React, { useEffect } from 'react'
import pedidos from "../../../img/pedidos.png";
import { useDispatch, useSelector } from 'react-redux'
import { GridSearchBar } from '../../../components/admin/inventory/GridSearch'
import {SideBar} from '../../../components/admin/SideBar'
import {Header} from '../../../components/header/Header'
import { getAllInventory } from '../../../redux/slices/inventory/thunks'
import { TableData } from '../../../components/admin/inventory/TableData';

import { NavLink } from 'react-router-dom';

const Inventory = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllInventory())
    },[])

    const { listInventory } = useSelector((state) => state.inventory)
    
    return (
        <>
            <Header />
            <SideBar />

            <hr />

            <div className="bg-white">
                <div className="mx-auto w-10/12 sm:pl-12 py-24">
                    <div className='w-full flex flex-row justify-between'>
                        <h1 className="text-2xl sm:text-4xl md:text-4xl text-titleTextColor font-bold">
                            Inventario
                        </h1>
                        <NavLink to='/add_product' className='bg-orange hover:bg-hover-orange px-4 py-2 rounded-lg text-white font-bold'>
                            Agregar Producto
                        </NavLink>
                    </div>
                

                    <GridSearchBar />

                    {listInventory.length === 0 ? (
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
                        <div className='text-7xl font-bold text-center mt-20 uppercase'>
                            <h1>Y Aqui Hubiera data</h1>
                            <h1>Si el back end hubiera</h1>
                            <h1>Trabajado.</h1>
                        </div>
                        // <TableData />
                    )}
                </div>
            </div>
        </>
      )
}

export default Inventory