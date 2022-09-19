import React from 'react'
import { FaClipboardList, FaFileInvoiceDollar, FaElementor } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export const ModalMenu = ({modal, setModal}) => {
  return (
    <>
      {modal && (
        <div className="fixed inset-0 bg-bg-admin bg-opacity-70 overflow-y-auto h-full w-full z-50">
          <div className="w-full h-full flex justify-center items-center">
            <div className="mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-dark-blue text-white">
              <div className="flex flex-row justify-between">
                <p className="flex items-center text-xl">Menú</p>
                <button
                  onClick={() => setModal(!modal)}
                  className="px-4 py-2 text-xl bg-gray-600 rounded-full"
                >
                  X
                </button>
              </div>
              <div className="flex flex-col gap-3 justify-between mt-4">
                <div className="flex flex-col items-center justify-center">
                  <NavLink
                    to="/shop/inventory"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white hover:bg-gray-100 w-full"
                        : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100 w-full"
                    }
                    alt="sideBar"
                  >
                    <FaClipboardList size="18 " />
                    <span className="ml-3">Inventario</span>
                  </NavLink>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <NavLink
                    to="/bills"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white hover:bg-gray-100 w-full"
                        : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100 w-full"
                    }
                    alt="sideBar"
                  >
                    <FaFileInvoiceDollar size="18 " />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Facturar
                    </span>
                  </NavLink>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <NavLink
                    to="/details_bills"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white hover:bg-gray-100 w-full"
                        : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100 w-full"
                    }
                    alt="sideBar"
                  >
                    <FaElementor size="18" />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Detalles de facturas
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
