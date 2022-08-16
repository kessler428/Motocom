// import { PaginationInventory } from "./Pagination";
import { useDispatch, useSelector } from 'react-redux'

import DataTable from 'react-data-table-component'
import { useState } from 'react';
import { GridSearchBar } from '../GridSearch';

import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { deleteProductById } from '../../../redux/slices/inventory/thunks';
import Swal from 'sweetalert2';
import { SpinerLoading } from '../../SnpinnerLoading';
import { setIsLoading } from '../../../redux/slices/ui/uiSlices';


export const TableData = () => {
  const dispatch = useDispatch();

  const { listInventory } = useSelector((state) => state.inventory);
  const { isLoading } = useSelector((state) => state.ui)
  const [searchProduct, setSearchProduct] = useState('');

  const deleteProduct = (id) => {
    Swal.fire({
      title: '¿Esta Seguro de eliminar este producto?',
      icon: 'warning',
      confirmButtonText: 'Si',
      showDenyButton: true,
      DenyButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductById(id))
        dispatch(setIsLoading(true))
      } else if (result.isDenied) {
        Swal.fire('No se elimino el producto.!', '', 'info')
      }
    })
  }

  const editProduct = (id) => {

  }

  const columns = [
    {
      name: "Nombre",
      selector: row => row.nombre_articulo
    },
    {
      name: "Codigo 1",
      selector: row => row.codigo1
    },
    {
      name: "Marca",
      selector: row => row.marca
    },
    {
      name: "Modelo",
      selector: row => row.modelo
    },
    {
      name: "Precio de compra",
      selector: row => row.precio_compra
    },
    {
      name: "Precio de venta",
      selector: row => row.precio_venta
    },
    {
      name: "Stock",
      selector: row => row.Stock
    },
    {
      name: "Acciones",
      cell: row =>
        <div className='flex flex-row gap-4 items-center justify-center'>
          <button className='text-yellow-400 hover:bg-gray-200 p-3 rounded-full' onClick={ () => editProduct(row.id) }><FaPencilAlt className='w-5 h-5' /></button>
          <button className='text-red-700 hover:bg-gray-200 p-3 rounded-full' onClick={ () => deleteProduct(row.id) }><RiDeleteBin5Line className='w-5 h-5' /></button>
        </div>
    },
  ]

  const filteredItems = listInventory.filter(
		item => item.nombre_articulo.includes(searchProduct) || item.codigo1.includes(searchProduct) || item.modelo.includes(searchProduct),
	);

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };
  
  return (
    <>
      {
        isLoading ? <SpinerLoading /> : (
          <>
            <GridSearchBar searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>

            <DataTable
            columns={columns}
            data={ filteredItems }
            pagination
            paginationComponentOptions={paginationComponentOptions}
            />
          </>
        )
      }
    </>
  );
};
