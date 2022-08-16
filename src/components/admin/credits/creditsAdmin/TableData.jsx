// import { PaginationInventory } from "./Pagination";
import { useSelector } from 'react-redux'

import DataTable from 'react-data-table-component'
import { useState } from 'react';
import { GridSearchBar } from '../../GridSearch';

import { FaRegMoneyBillAlt, FaEye, FaClipboardList } from 'react-icons/fa';

export const TableData = () => {

  const { listCredits } = useSelector((state) => state.credits)
  const [searchProduct, setSearchProduct] = useState('');

  const columns = [
    {
      name: "Nombre",
      selector: row => row.nombres
    },
    {
      name: "Numero RUC",
      selector: row => row.ruc
    },
    {
      name: "Monto Abonado",
      selector: row => row.SumaAbonos
    },
    {
      name: "Monto Restante",
      selector: row => row.resta
    },
    {
      name: "Deuda Total",
      selector: row => row.total
    },
    {
      name: "",
      cell: row =>
        <div className='flex flex-row gap-4 items-center justify-center'>
          <button className='text-green-700 hover:bg-gray-200 p-3 rounded-full' onClick={ () => alert(`cualquiercosa${row.id}`) }><FaRegMoneyBillAlt className='w-5 h-5' /></button>
          <button className='text-blue-700 hover:bg-gray-200 p-3 rounded-full' onClick={ () => alert(row.id) }><FaEye className='w-5 h-5' /></button>
          <button className='text-yellow-500 hover:bg-gray-200 p-3 rounded-full' onClick={ () => alert(row.id) }><FaClipboardList className='w-5 h-5' /></button>
        </div>
    },
  ]

  const filteredItems = listCredits.filter(
		item => item.nombres.includes(searchProduct) || item.ruc.includes(searchProduct) ,
	);

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };
  
  return (
    <>

      <GridSearchBar searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>

      <DataTable
       columns={columns}
       data={ filteredItems }
       pagination
       paginationComponentOptions={paginationComponentOptions}
      />
    </>
  );
};
