import "../../../index.css";

import { BiLogOut, BiMenu } from "react-icons/bi";
import { useState } from "react";
import { ModalMenu } from "./ModalMenu";

import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../../redux/slices/auth/thunks";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Header = () => {

  const dispatch = useDispatch();
  const Navigate =  useNavigate();
  const { Access } = useSelector((state) => state.auth);

  const [modal, setModal] = useState(false)

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
      dispatch(Logout());
    }})
  }

  useEffect(() => {
    if(Access.rol === ''){
      Navigate('/')
    }
  }, [Access, Navigate])
  

  return (
    <div className="flex flex-col">
      <div className="w-full flex absolute flex-row h-16 justify-between lg:justify-end px-8 py-2 bg-dark-blue border-none">
        <div className="lg:hidden flex items-center justify-center">
          <button onClick={() => setModal(!modal)}>
            <BiMenu className="text-white h-6 w-6"/>
          </button>
        </div>
        
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
