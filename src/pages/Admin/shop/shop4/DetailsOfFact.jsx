import React from 'react'
import pedidos from "../../../../img/pedidos.png";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../../../components/admin/header/Header'
import { SideBar } from '../../../../components/admin/SideBar'
import { getHistoryOfBills } from '../../../../redux/slices/bills/thunks';
import { TableData } from '../../../../components/admin/shop/shop3/TableData';

const DetailsOfFact = () => {

    const dispatch = useDispatch();
  const { historyOfBills } = useSelector((state) => state.bill);

  useEffect(() => {
    dispatch(getHistoryOfBills(5))
  }, [dispatch])

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
            <div className="flex flex-col mt-32 justify-center">
              <div className="flex justify-center">
                <img
                  src={pedidos}
                  alt=""
                  className="h-32 bg-gray-100 rounded-full p-4 w-32"
                />
              </div>
              <div className="flex justify-center">
                <p className="text-gray-600 font-bold">
                  No se han realizado facturas
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

export default DetailsOfFact