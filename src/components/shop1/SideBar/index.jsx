import { FaFileInvoiceDollar, FaClipboardList, FaMoneyBillWave} from 'react-icons/fa'

import "../../../index.css";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="fixed pt-[63px] hidden lg:flex top-0 left-0 h-screen w-16 m-0 flex-col bg-dark-blue text-black border-r">
     
      <NavLink
        to="/level1/inventory"
        className={({ isActive }) =>
          isActive
            ? "bg-orange mb-3 p-3 text-white rounded mx-2"
            : "mb-3 p-4 text-white hover:bg-hover-orange"
        }
      >
        <SideBarIcon icon={<FaClipboardList size="20" />} text="Inventario" />
      </NavLink>
      <NavLink
        to="/asistentes"
        className={({ isActive }) =>
          isActive
            ? "bg-orange mb-3 p-3 text-white rounded mx-2"
            : "mb-3 p-4 text-white hover:bg-hover-orange"
        }
      >
        <SideBarIcon icon={<FaMoneyBillWave size="20" />} text="Creditos" />
      </NavLink>
      <NavLink
        to="/generate_report"
        className={({ isActive }) =>
          isActive
            ? "bg-orange mb-3 p-3 text-white rounded mx-2"
            : "mb-3 p-4 text-white hover:bg-hover-orange"
        }
      >
        <SideBarIcon icon={<FaFileInvoiceDollar size="20" />} text="Facturar" />
      </NavLink>


    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sideBarIcon group">
    {icon}
    <span className="sideBar-Tooltip group-hover:scale-100">{text}</span>
  </div>
);
