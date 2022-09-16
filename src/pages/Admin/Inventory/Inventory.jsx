import React, { useEffect } from 'react'
import pedidos from "../../../img/pedidos.png";
import { useDispatch, useSelector } from 'react-redux'
import {SideBar} from '../../../components/admin/SideBar'
import {Header} from '../../../components/admin/header/Header'
import { getAllInventoryAdmin } from '../../../redux/slices/inventory/thunks'
import { TableData } from '../../../components/admin/inventory/TableData';

import { NavLink } from 'react-router-dom';
import { setIsLoading } from '../../../redux/slices/ui/uiSlices';
import { SpinerLoading } from '../../../components/SpinnerLoading';

const Inventory = () => {

    const dispatch = useDispatch();
    const { isLoading } = useSelector(state => state.ui)

    useEffect(() => {
        dispatch(setIsLoading(true));
        dispatch(getAllInventoryAdmin())
    },[dispatch])

    const { listInventory } = useSelector((state) => state.inventory)
    
    return isLoading ? <SpinerLoading /> : (
        <div className='flex flex-row'>
            <SideBar />
            <Header />

            <div className="mx-auto w-11/12 lg:pl-56 py-24">
                <div className='w-full flex flex-row justify-between'>
                    <h1 className="text-4xl text-titleTextColor font-bold">
                        Inventario
                    </h1>
                    <NavLink to='/add_product' className='bg-orange hover:bg-hover-orange px-4 py-2 rounded-lg text-white font-bold'>
                        Agregar Producto
                    </NavLink>
                </div>

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
                    <TableData />
                )}
            </div>
        </div>
      )
}

export default Inventory