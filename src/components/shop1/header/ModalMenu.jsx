import React from 'react'
import { FaUserAlt, FaBook, FaQrcode } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export const ModalMenu = ({modal, setModal}) => {
  return (
    <>
        {
            modal && (
                <div className="fixed inset-0 bg-bg-admin bg-opacity-70 overflow-y-auto h-full w-full z-50">
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className="mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-bg-admin text-white">
                            <div className='flex flex-row justify-between'>
                                <p className='flex items-center'>Menu</p>
                                <button
                                    onClick={() => setModal(!modal)}
                                    className="p-2 text-xl"
                                >X</button>
                            </div>
                            <div className='flex flex-row justify-between mt-4'>
                                <div className='flex flex-col items-center justify-center'>
                                    <NavLink
                                        to="/order"
                                        className={({ isActive }) =>
                                        isActive
                                            ? "bg-bg-violet p-2 text-white rounded"
                                            : "text-white p-2 hover:bg-bg-violet-hover"
                                        }
                                    >
                                        <FaBook className='h-6 w-6' />
                                    </NavLink>
                                    <p className='text-sm mt-2'>Pedidos</p>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <NavLink
                                        to="/asistentes"
                                        className={({ isActive }) =>
                                        isActive
                                            ? "bg-bg-violet p-2 text-white rounded"
                                            : "p-2 hover:bg-bg-violet-hover"
                                        }
                                    >
                                        <FaUserAlt className='h-6 w-6' />
                                    </NavLink>
                                    <p className='text-sm mt-2'>Asistentes</p>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <NavLink
                                        to="/scanner"
                                        className={({ isActive }) =>
                                        isActive
                                            ? "bg-bg-violet p-2 text-white rounded"
                                            : "p-2 text-white hover:bg-bg-violet-hover"
                                        }
                                    >
                                        <FaQrcode className='h-6 w-6' />
                                    </NavLink>
                                    <p className='text-sm mt-2'>Escaner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </>
  )
}
