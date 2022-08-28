import "../../../index.css";
import { NavLink } from 'react-router-dom';

import { BiLogOut, BiMenu } from "react-icons/bi";
import { useState } from "react";
import { ModalMenu } from "./ModalMenu";
import Swal from "sweetalert2";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../../redux/slices/auth/thunks";

export const Header = () => {

  const dispatch = useDispatch();
  const Navigate =  useNavigate();

  const [modal, setModal] = useState(false)

  const token = localStorage.getItem('token');
  const closeSession = () => {
    Swal.fire({
      text: '¿Desea cerrar sesion?',
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
    if (result.isConfirmed) {
      dispatch(Logout(token))
      localStorage.clear();
      Navigate('/')
    }})
  }

  return (
    <div className="flex flex-col">
      <div className="w-full flex absolute flex-row h-16 justify-between py-2 bg-dark-blue border-none">
        <div className="sm:hidden flex items-center justify-center">
          <button onClick={() => setModal(!modal)}>
            <BiMenu className="text-white h-6 w-6"/>
          </button>
        </div>
        <NavLink to='/level1/index' className="">
          <p className='text-orange text-5xl pl-14 font-semibold'>Motocom</p>
        </NavLink>
        <div className=" w-auto flex justify-center items-center mr-4">
          <button onClick={closeSession}>
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
