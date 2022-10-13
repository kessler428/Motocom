import React, { useEffect } from 'react'
import pedidos from "../../../../img/pedidos.png";
import { useDispatch, useSelector } from 'react-redux'
import { Header } from "../../../../components/admin/header/Header";
import { SideBar } from "../../../../components/admin/SideBar";
import { getAllInventoryIndex } from '../../../../redux/slices/inventory/thunks'
import { TableData } from '../../../../components/shop1/inventory/TableData';
import { useParams } from 'react-router-dom';

const Inventory = () => {

  const dispatch = useDispatch();
  const { Access } = useSelector(state => state.auth)

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllInventoryIndex(id))
  },[Access.almacenId, dispatch, id])

  const { listInventory } = useSelector((state) => state.inventory)
    
  return (
    <>
      <SideBar />
      <Header />

      <hr />

      <div className="mx-auto w-11/12 lg:pl-56 py-24">
        <div className="w-full flex flex-col justify-between">
          <h1 className="text-4xl md:text-5xl font-bold text-orange">
              Inventario
          </h1>

          {listInventory.length === 0 ? (
            <div className="flex flex-col mt-20">
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

export default Inventory;