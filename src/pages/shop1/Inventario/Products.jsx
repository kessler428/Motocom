import React, { useEffect } from 'react'
import pedidos from "../../../img/pedidos.png";
import { useDispatch, useSelector } from 'react-redux'
import {SideBar} from '../../../components/shop1/SideBar'
import {Header} from '../../../components/shop1/header/Header'
import { getAllInventory } from '../../../redux/slices/inventory/thunks'
import { TableData } from '../../../components/shop1/inventory/TableData';

const Inventory = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllInventory())
  },[dispatch])

  const { listInventory } = useSelector((state) => state.inventory)
    
  return (
    <>
      <SideBar />
      <Header />

      <hr />

      <div className="bg-white">
          <div className="mx-auto w-10/12 sm:pl-12 py-24">
              <h1 className="text-2xl sm:text-4xl md:text-4xl text-titleTextColor font-bold">
                  Inventario
              </h1>

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
    </>
  )
}

export default Inventory