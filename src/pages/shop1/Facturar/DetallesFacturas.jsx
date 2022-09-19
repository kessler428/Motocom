import React, { useEffect } from 'react'
import pedidos from "../../../img/pedidos.png";
import { TableData } from '../../../components/shop1/Bills/TableData'
import { Header } from '../../../components/shop1/header/Header'
import { SideBar } from '../../../components/shop1/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { getHistoryOfBills } from '../../../redux/slices/bills/thunks';

const DetallesFacturas = () => {

  const dispatch = useDispatch();
  const { historyOfBills } = useSelector((state) => state.bill);
  const { Access } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getHistoryOfBills(Access.almacenId))
  }, [Access.almacenId, dispatch])
  

  return (
    <>
      <SideBar/>
      <Header />

      <div className="mx-auto w-11/12 lg:pl-56 py-24">
        <div className="w-full flex flex-col justify-between">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-orange">
            Detalles de facturas
          </h1>

          {historyOfBills?.length === 0 ? (
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

export default DetallesFacturas