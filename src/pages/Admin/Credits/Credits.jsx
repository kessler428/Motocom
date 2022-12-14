import React, { useEffect } from "react";
import pedidos from "../../../img/pedidos.png";

import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { TableData } from "../../../components/admin/credits/creditsAdmin/TableData";
import { getAllCredits } from "../../../redux/slices/Credits/thunks";
import { SideBar } from "../../../components/admin/SideBar";
import { SideBar as SideBarUser } from "../../../components/shop1/SideBar";
import { Header } from "../../../components/admin/header/Header";
import { Header as HeaderUser } from "../../../components/shop1/header/Header";

const Credits = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCredits());
  }, [dispatch]);

  const { listCredits } = useSelector((state) => state.credits);
  const { Access } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-row">
      {Access.rol === "Vendedor" ? (
        <>
          <SideBarUser />
          <HeaderUser />
        </>
      ) : (
        <>
          <SideBar />
          <Header />
        </>
      )}

      <div className="mx-auto w-11/12 lg:pl-56 py-24">
        <div className="w-full flex flex-row justify-between">
          <h1 className="text-4xl md:text-4xl font-bold">Creditos</h1>
          {
            Access.rol !== "Vendedor" && (
                <NavLink
                    to="/closed_credits"
                    className="bg-orange hover:bg-hover-orange px-4 py-2 rounded-lg text-white font-bold"
                >
                    Creditos cancelados
                </NavLink>
            )
          }
        </div>

        {listCredits === [] ? (
          <div className="flex flex-col mt-20 justify-center">
            <div className="flex justify-center">
              <img
                src={pedidos}
                alt=""
                className="h-32 bg-gray-100 rounded-full p-4 w-32"
              />
            </div>
            <div className="flex justify-center">
              <p className="text-gray-600 font-bold">No hay creditos</p>
            </div>
          </div>
        ) : (
          <TableData />
        )}
      </div>
    </div>
  );
};

export default Credits;
