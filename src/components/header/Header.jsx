import "../../index.css";
import { NavLink } from 'react-router-dom';

import { BiLogOut, BiMenu } from "react-icons/bi";
import { useState } from "react";
import { ModalMenu } from "./ModalMenu";

export const Header = () => {

  const [modal, setModal] = useState(false)

  return (
    <div className="flex flex-col">
      <div className="w-full flex absolute flex-row h-16 justify-between py-2 bg-dark-blue border-none">
        <div className="sm:hidden flex items-center justify-center">
          <button onClick={() => setModal(!modal)}>
            <BiMenu className="text-white h-6 w-6"/>
          </button>
        </div>
        <NavLink to='/index' className="">
          <p className='text-orange text-5xl pl-14 font-semibold'>OUMURS</p>
        </NavLink>
        <div className=" w-auto flex justify-center items-center mr-4">
          <button>
            <abbr title="Cerrar sesion">
              <BiLogOut className="text-white h-6 w-6" />
            </abbr>
          </button>
        </div>
      </div>
      <div>
        <ModalMenu modal={modal} setModal={setModal} />
      </div>
    </div>
  );
}
