import React, { useEffect, useState } from 'react'
import { SideBar } from '../../../components/admin/SideBar'
import { Header } from '../../../components/admin/header/Header'

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addProducts, getCatalogStock } from '../../../redux/slices/inventory/thunks';

const AddProduct = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getCatalogStock());
    }, [dispatch])

    const { typeOfStock } = useSelector(state => state.inventory);    

    const [datos, setDatos] = useState({
        nombreArticulo: '',
        codigoUno: '',
        codigoDos: '',
        modelo: '',
        marca: '',
        precioVenta: '',
        precioCompra: '',
        notas: '',
        stock: '',
    })

    const [typeStock, setTypeStock] = useState('');

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const values = {
            nombreArticulo: datos.nombreArticulo,
            codigoUno: datos.codigoUno,
            codigoDos: datos.codigoDos,
            modelo: datos.modelo,
            marca: datos.marca,
            precioVenta: Number(datos.precioVenta),
            precioCompra: Number(datos.precioCompra),
            notas: datos.notas,
            stock: Number(datos.stock),
        }

        const {
            nombreArticulo,
            codigoUno,
            codigoDos,
            modelo,
            marca,
            precioVenta,
            precioCompra,
            notas,
            stock,
        } = values
        
        dispatch(
            addProducts(
                nombreArticulo,
                codigoUno,
                codigoDos,
                modelo,
                marca,
                precioVenta,
                precioCompra,
                notas,
                stock,
                Number(typeStock)
            )
        )

    }

    return (
        <>
            <SideBar/>
            <Header/>

            <hr />

            <div className="mx-auto w-10/12 sm:pl-12 py-24">
                <NavLink 
                    to='/inventory'
                    className='text-blue-600 hover:underline'
                >
                    {'< Regresar'}
                </NavLink>
                <form
                    onSubmit={handleSubmit}
                    className=' rounded-3xl px-6 mt-14 bg-white'
                >
                    <div className='text-4xl py-4 text-orange font-bold'>
                        <h1>Agregar Producto</h1>
                    </div>
                    <div className='flex flex-wrap font-semibold justify-around mt-10 px-12'>
                        <div className='w-full'>
                            <label className='flex flex-col my-2 text-lg'>Nombre del producto
                                <input
                                    type="text"
                                    name='nombreArticulo'
                                    onChange={handleChange}
                                    value={datos.nombreArticulo}
                                    className='border rounded-lg border-gray-400 py-2 px-3 font-normal text-base'
                                    required
                                />
                            </label>
                        </div>
                        <div className='w-full'>
                            <label className='flex flex-col my-2 text-lg'>Codigo 1
                                <input
                                    min={0}
                                    type="text"
                                    name='codigoUno'
                                    onChange={handleChange}
                                    value={datos.codigoUno}
                                    className='border rounded-lg border-gray-400 py-2 px-3 font-normal text-base'
                                    required
                                />
                            </label>
                        </div>
                        <div className='w-full'>
                            <label className='flex flex-col my-2 text-lg'>Codigo 2
                                <input
                                    type="text"
                                    name='codigoDos'
                                    onChange={handleChange}
                                    value={datos.codigoDos}
                                    className='border rounded-lg border-gray-400 py-2 px-3 font-normal text-base'
                                />
                            </label>
                        </div>
                        <div className='w-full'>
                            <label className='flex flex-col my-2 text-lg'>Marca
                                <input
                                    type='text'
                                    name='marca'
                                    value={datos.marca}
                                    onChange={handleChange}
                                    className='border rounded-lg border-gray-400 py-2 px-3 font-normal text-base'
                                />
                            </label>
                        </div>
                        <div className='w-full'>
                            <label className='flex flex-col my-2 text-lg'>Modelo / Presentacion
                                <input
                                    type="text"
                                    name='modelo'
                                    onChange={handleChange}
                                    value={datos.modelo}
                                    className='border rounded-lg border-gray-400 py-2 px-3 font-normal text-base'
                                />
                            </label>
                        </div>
                        <div className='w-full'>
                            <label className='flex flex-col my-2 text-lg'>Precio de compra
                                <input
                                    min={0}
                                    type="number"
                                    name='precioCompra'
                                    step='0.01'
                                    onChange={handleChange}
                                    value={datos.precioCompra}
                                    className='border rounded-lg border-gray-400 py-2 px-3 font-normal text-base'
                                    required
                                />
                            </label>
                        </div>
                        <div className='w-full'>
                            <label className='flex flex-col my-2 text-lg'>Precio de venta
                                <input
                                    min={0}
                                    type="number"
                                    name='precioVenta'
                                    step='0.01'
                                    onChange={handleChange}
                                    value={datos.precioVenta}
                                    className='border rounded-lg border-gray-400 py-2 px-3 font-normal text-base'
                                    required
                                />
                            </label>
                        </div>
                        <div className='w-full'>
                            <label className='flex flex-col my-2 text-lg'>Tipo de stock
                                <select
                                    name='typeStock'
                                    onChange={(e) => setTypeStock(e.target.value)}
                                    className='border rounded-lg border-gray-400 py-2 px-3 font-normal text-base'
                                >
                                    <option value='none'>Seleccione un tipo</option>
                                    {
                                        typeOfStock?.map((item) => (
                                            <option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.nombre}
                                            </option>
                                        ))
                                    }
                                </select>
                            </label>
                        </div>
                        <div className='w-full'>
                            <label className='flex flex-col my-2 text-lg'>Stock
                                <input
                                    min={0}
                                    type="number"
                                    name='stock'
                                    onChange={handleChange}
                                    value={datos.stock}
                                    className='border rounded-lg border-gray-400 py-2 px-3 font-normal text-base'
                                    required
                                />
                            </label>
                        </div>
                        <div className='w-full md:w-full'>
                            <label className='flex flex-col my-2 text-lg'>Comentario
                                <input
                                    type="text"
                                    name='notas'
                                    value={datos.notas}
                                    onChange={handleChange}
                                    className='border rounded-lg border-gray-400 py-2 px-3 font-normal text-base'
                                />
                            </label>
                        </div>
                        <div className='flex justify-end gap-6 py-6 w-full'>
                            <NavLink to='/inventory' className='bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-lg text-white font-bold'>
                                Regresar
                            </NavLink>
                            <button className='bg-orange hover:bg-hover-orange px-4 py-2 rounded-lg text-white font-bold'>
                                Agregar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddProduct