import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { Header } from '../../../components/admin/header/Header'
import { SideBar } from '../../../components/admin/SideBar'
import { editClient, getOneClient } from '../../../redux/slices/clients/thunks'

const EditClient = () => {

    const dispatch = useDispatch();
    const { clientId } = useParams();

    const { oneClient } = useSelector((state) => state.clients);
    const {nombres, apellidos, ruc, direccion, telefono, email} = oneClient;

    useEffect(() => {
        dispatch(getOneClient(clientId));
    }, [clientId, dispatch])
    

    const [datos, setDatos] = useState({
        nombres: nombres,
        apellidos: apellidos,
        ruc: ruc,
        email: email,
        direccion: direccion,
        telefono: telefono,
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            nombres: datos.nombres,
            apellidos: datos.apellidos,
            ruc: datos.ruc,
            email: datos.email,
            direccion: datos.direccion,
            telefono: datos.telefono,
        }

        const {
            nombres,
            apellidos,
            ruc,
            email,
            direccion,
            telefono,
        } = data;

        dispatch(editClient(clientId, nombres, apellidos, ruc, email, direccion, telefono))
        
    }
    
    return (
        <>
            <SideBar />
            <Header />

            <div className="mx-auto w-10/12 sm:pl-12 py-24">
                <div className='w-full flex flex-col'>
                    <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold">
                        Agregar cliente
                    </h1>
                    <form onSubmit={handleSubmit} className='bg-white mt-10 rounded-lg'>
                        <div className='flex flex-wrap py-20 justify-center gap-4'>
                            <div className='w-80 flex flex-col'>
                                <label className='font-semibold'>Nombres</label>
                                <input
                                    type="text"
                                    className='border border-black rounded py-1 px-2'
                                    placeholder='Nombres'
                                    value={datos.nombres}
                                    onChange={(e) => setDatos({ ...datos, nombres: e.target.value })}
                                />
                            </div>
                            <div className='w-80 flex flex-col'>
                                <label className='font-semibold'>Apellidos</label>
                                <input
                                    type="text"
                                    className='border border-black rounded py-1 px-2'
                                    placeholder='Apellidos'
                                    value={datos.apellidos}
                                    onChange={(e) => setDatos({ ...datos, apellidos: e.target.value })}
                                />
                            </div>
                            <div className='w-80 flex flex-col'>
                                <label className='font-semibold'>Numero Ruc o cedula</label>
                                <input
                                    type="text"
                                    className='border border-black rounded py-1 px-2'
                                    placeholder='Numero Ruc o cedula'
                                    value={datos.ruc}
                                    onChange={(e) => setDatos({ ...datos, ruc: e.target.value })}
                                />
                            </div>
                            <div className='w-80 flex flex-col'>
                                <label className='font-semibold'>Direccion</label>
                                <input
                                    type="text"
                                    className='border border-black rounded py-1 px-2'
                                    placeholder='Direccion'
                                    value={datos.direccion}
                                    onChange={(e) => setDatos({ ...datos, direccion: e.target.value })}
                                />
                            </div>
                            <div className='w-80 flex flex-col'>
                                <label className='font-semibold'>Telefono</label>
                                <input
                                    type="text"
                                    className='border border-black rounded py-1 px-2'
                                    placeholder='Telefono'
                                    value={datos.telefono}
                                    onChange={(e) => setDatos({ ...datos, telefono: e.target.value })}
                                />
                            </div>
                            <div className='w-80 flex flex-col'>
                                <label className='font-semibold'>Email</label>
                                <input
                                    type="text"
                                    className='border border-black rounded py-1 px-2'
                                    placeholder='Email'
                                    value={datos.email}
                                    onChange={(e) => setDatos({ ...datos, email: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className='flex justify-end mb-8 mr-8 gap-4'>
                            <NavLink to='/clients' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
                                Regresar
                            </NavLink>
                            <button
                                className='bg-orange hover:bg-hover-orange text-white font-bold py-2 px-4 rounded-lg'
                            >
                                Editar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditClient;