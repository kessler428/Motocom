import { FaFileInvoiceDollar, FaClipboardList, FaElementor} from 'react-icons/fa'
import logo from '../../../img/motocom.jpg'
import "../../../index.css";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <aside className="w-56 h-screen fixed hidden lg:block" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-dark-blue h-full pt-20">
        <ul className="space-y-2">
          <li>
            <NavLink to='/shop/index' className="">
              <img className="w-36 mx-auto mb-6 -mt-6" src={logo} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop/inventory"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white hover:bg-gray-100"
                  : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100"
              }
              alt="sideBar"
            >
              <FaClipboardList size="18" />
              <span className="ml-3">Inventario</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bills"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white hover:bg-gray-100"
                  : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100"
              }
              alt="sideBar"
            >
              <FaFileInvoiceDollar size="18 " />
              <span className="flex-1 ml-3 whitespace-nowrap">Facturar</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/details_bills"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-normal bg-orange rounded-lg text-white hover:bg-gray-100"
                  : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-100"
              }
              alt="sideBar"
            >
              <FaElementor size="18" />
              <span className="flex-1 ml-3 whitespace-nowrap">Detalle de facturas</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};