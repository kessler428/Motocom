import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Header } from "../../../../components/admin/header/Header";
import { SideBar } from "../../../../components/admin/SideBar";
import { getIndexInfo } from "../../../../redux/slices/shop/thunks";

const Shop2 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIndexInfo(5));
  }, [dispatch]);

  const { index } = useSelector((state) => state.shop);
  const { dineroDelDia, facturasDelDia, nombreArticulo } = index;
  return (
    <>
      <SideBar />
      <Header />
      <div className="w-11/12 mx-auto pl-20 my-20">
        <h1 className="text-4xl sm:text-4xl md:text-4xl text-titleTextColor font-bold mt-16">
          Tienda #4
        </h1>
        <div className="flex flex-wrap gap-8 my-10 text-white">
          
          <div
            className=" flex justify-between flex-col text-start w-80 lg:w-64 border-4 border-cyan-800 h-28 bg-cyan-800 p-4 rounded-lg hover:bg-cyan-900"
          >
            <h3 className="text-xl">Producto mas vendido</h3>
            <p className="">{nombreArticulo}</p>
          </div>
          <NavLink
            to="/level1/inventory"
            className="flex justify-between flex-col text-start w-80 lg:w-64 border-4 border-yellow-500 h-28 bg-yellow-500 p-4 rounded-lg hover:bg-yellow-600"
          >
            <h3 className="text-2xl font-bold">facturas realizadas</h3>
            <p className="text-xl">{facturasDelDia}</p>
          </NavLink>
          <div className="flex justify-between flex-col  text-start w-80 lg:w-64 border-4 border-red-900 h-28 bg-red-800 p-4 rounded-lg hover:bg-red-900">
            <p className="text-2xl font-bold">Dinero en caja</p>
            <h3 >
              {parseFloat(dineroDelDia).toFixed(2)}
            </h3>
          </div>
          <NavLink
            to="/bills"
            className="flex justify-between flex-col text-start w-80 lg:w-64 border-4 border-teal-700 h-28 bg-teal-700 p-4 rounded-lg hover:bg-teal-800"
          >
            <h3 className="text-2xl font-bold ">Inventario</h3>
            <p>Nueva factura</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Shop2;
