import React from "react";
import { useState } from "react";
import {
  FaTh,
  FaCalculator,
  FaUsers,
  FaMoneyBillWave,
  FaTelegramPlane,
  FaTools,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../../img/logo.png";

export const ModalMenu = ({ modal, setModal }) => {

  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      {modal && (
        <div className="fixed inset-0 bg-bg-admin bg-opacity-70 overflow-y-auto h-full w-full z-50">
          <div className="w-full h-full flex justify-center items-center">
            <div className="mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-dark-blue text-white">
              <div className="flex flex-row justify-between">
                <p className="flex items-center">Menu</p>
                <button
                  onClick={() => setModal(!modal)}
                  className="p-2 text-xl"
                >
                  X
                </button>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <NavLink to='/index' className="">
                  <img className="w-36 mx-auto mb-6" src={logo} alt="" />
                </NavLink>
                <div className="flex flex-col items-center justify-center">
                  <NavLink
                    to="/generate_report"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white hover:bg-gray-100 w-full"
                        : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100 w-full"
                    }
                    alt="sideBar"
                  >
                    <FaCalculator size="18 " />
                    <span className="ml-3">Reportes</span>
                  </NavLink>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <NavLink
                    to="/inventory"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white hover:bg-gray-100 w-full"
                        : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100 w-full"
                    }
                    alt="sideBar"
                  >
                    <FaTh size="18 " />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Inventario
                    </span>
                  </NavLink>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <NavLink
                    to="/clients"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white hover:bg-gray-100 w-full"
                        : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100 w-full"
                    }
                    alt="sideBar"
                  >
                    <FaUsers size="18" />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Clientes
                    </span>
                  </NavLink>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <NavLink
                    to="/credits"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white hover:bg-gray-100 w-full"
                        : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100 w-full"
                    }
                    alt="sideBar"
                  >
                    <FaMoneyBillWave size="18" />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Creditos
                    </span>
                  </NavLink>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <NavLink
                    to="/exchange"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white hover:bg-gray-100 w-full"
                        : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100 w-full"
                    }
                    alt="sideBar"
                  >
                    <FaTelegramPlane size="18" />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Enviar productos
                    </span>
                  </NavLink>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white hover:bg-gray-100 w-full"
                        : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100 w-full"
                    }
                    alt="sideBar"
                  >
                    <FaTools size="18" />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Usuarios
                    </span>
                  </NavLink>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setDropDown(!dropDown)}
                    className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group hover:bg-gray-100 text-white dark:hover:bg-gray-700"
                  >
                    <FaShoppingCart size="18 " />
                    <span
                      className="flex-1 ml-3 text-left whitespace-nowrap"
                      sidebar-toggle-item="true"
                    >
                      Tiendas
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  {dropDown && (
                    <ul id="dropdown-example" className="py-2 space-y-2">
                      <li>
                        <NavLink
                          to="/"
                          className="flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg transition duration-75 group hover:bg-gray-100 text-white dark:hover:bg-gray-700"
                        >
                          Tienda 1
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/"
                          className="flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg transition duration-75 group hover:bg-gray-100 text-white dark:hover:bg-gray-700"
                        >
                          Tienda 2
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/"
                          className="flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg transition duration-75 group hover:bg-gray-100 text-white dark:hover:bg-gray-700"
                        >
                          Tienda 3
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/"
                          className="flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg transition duration-75 group hover:bg-gray-100 text-white dark:hover:bg-gray-700"
                        >
                          Tienda 4
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
