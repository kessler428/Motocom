import "../../../index.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../../img/logo.png";

import {
  FaCalculator,
  FaTh,
  FaMoneyBillWave,
  FaUsers,
  FaTools,
  FaShoppingCart,
  FaTelegramPlane,
} from "react-icons/fa";

export const SideBar = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <aside className="w-56 h-screen fixed hidden lg:block" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-dark-blue text-white h-full pt-20">
        <ul className="space-y-2">
          <li>
            <NavLink to="/index" className="">
              <img className="w-36 mx-auto mb-6 -mt-6" src={logo} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/generate_report"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white"
                  : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100 hover:text-dark-blue"
              }
              alt="sideBar"
            >
              <FaCalculator size="18 " />
              <span className="ml-3">Reportes</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/inventory"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white"
                  : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100 hover:text-dark-blue"
              }
              alt="sideBar"
            >
              <FaTh size="18 " />
              <span className="flex-1 ml-3 whitespace-nowrap">Inventario</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clients"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white"
                  : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100 hover:text-dark-blue"
              }
              alt="sideBar"
            >
              <FaUsers size="18" />
              <span className="flex-1 ml-3 whitespace-nowrap">Clientes</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/credits"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white"
                  : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100 hover:text-dark-blue"
              }
              alt="sideBar"
            >
              <FaMoneyBillWave size="18" />
              <span className="flex-1 ml-3 whitespace-nowrap">Creditos</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/exchange"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white"
                  : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100 hover:text-dark-blue"
              }
              alt="sideBar"
            >
              <FaTelegramPlane size="18" />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Enviar productos
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white"
                  : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100 hover:text-dark-blue"
              }
              alt="sideBar"
            >
              <FaTools size="18" />
              <span className="flex-1 ml-3 whitespace-nowrap">Usuarios</span>
            </NavLink>
          </li>

          <li>
            <button
              type="button"
              onClick={() => setDropDown(!dropDown)}
              className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group hover:bg-gray-100 hover:text-dark-blue text-white"
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
                    to="/shop_one"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white"
                        : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100 hover:text-dark-blue"
                    }
                  >
                    Almacen Principal
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop_two"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white"
                        : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100 hover:text-dark-blue"
                    }
                  >
                    Camion Marlon
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop_three"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white"
                        : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100 hover:text-dark-blue"
                    }
                  >
                    Camion Miguel
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop_four"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white"
                        : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100 hover:text-dark-blue"
                    }
                  >
                    Camion Pokemon
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </aside>
  );
};
