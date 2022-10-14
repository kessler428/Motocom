import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Header } from "../../../../components/admin/header/Header";
import { SideBar } from "../../../../components/admin/SideBar";
import { getIndexInfo } from "../../../../redux/slices/shop/thunks";

const Shop1 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIndexInfo(3));
  }, [dispatch]);

  const { index } = useSelector((state) => state.shop);
  const { dineroDelDia, facturasDelDia, inversion } = index;

  return (
    <>
      <SideBar />
      <Header />
      <div className="mx-auto w-11/12 lg:pl-56 py-10">
        <h1 className="text-4xl sm:text-4xl md:text-4xl text-titleTextColor font-bold mt-16">
          Tienda #2
        </h1>
        <div className="flex flex-wrap gap-8 my-10 text-white">
          <NavLink
            to={`inventory/3`}
            className="flex justify-between flex-col text-start w-56 border-4 border-green-700 h-28 bg-green-700 p-4 rounded-lg"
          >
            <h3 className="text-xl font-bold">Inventario</h3>
            <p className="text-lg">Ver inventario</p>
          </NavLink>
          <NavLink
            to="inventory"
            className="flex justify-between flex-col text-start w-56 border-4 border-yellow-500 h-28 bg-yellow-400 p-4 rounded-lg hover:bg-yellow-500"
          >
            <h3 className="text-xl font-bold">facturas realizadas</h3>
            <p className="text-lg">{facturasDelDia}</p>
          </NavLink>
          <div className="flex justify-between flex-col  text-start w-56 border-4 border-red-900 h-28 bg-red-800 p-4 rounded-lg ">
            <p className="text-xl font-bold">Dinero en caja</p>
            <h3 >
              {
                dineroDelDia === null ? (
                  <p className="text-lg">0</p>
                ) : (
                  <p className="text-lg">C$ {parseFloat(dineroDelDia).toLocaleString('us-Us')}</p>
                )
              }
            </h3>
          </div>
          <div
            className="flex justify-between flex-col text-start w-56 border-4 border-teal-700 h-28 bg-teal-700 p-4 rounded-lg"
          >
            <h3 className="text-xl font-bold">Inversion</h3>
            <p className="text-lg">C$ {parseFloat(inversion).toLocaleString('us-Us')}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop1;