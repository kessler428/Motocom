// import { PaginationInventory } from "./Pagination";
import { useSelector } from 'react-redux'

import DataTable from 'react-data-table-component'
import { useState } from 'react';
import { GridSearchBar } from '../../GridSearch';

import { FaRegMoneyBillAlt, FaEye, FaClipboardList } from 'react-icons/fa';

import moment from 'moment';
import 'moment/locale/es';

export const TableData = () => {

  moment.locale('es');

  const { listCredits } = useSelector((state) => state.credits)
  const [searchProduct, setSearchProduct] = useState('');

  const columns = [
    {
      name: "Nombre",
      selector: row => row.cliente
    },
    {
      name: "Deuda Total",
      selector: row => row.deudaTotal
    },
    {
      name: "Monto Abonado",
      selector: row => row.dinerAbonado
    },
    {
      name: "Deuda Restante",
      cell: row=> <p>{row.deudaTotal - row.dinerAbonado}</p>
    },
    {
      name: "Fecha",
      cell: row => <p>{moment(row.fecha).format('LLL')}</p>
    },
    {
      name: "Acciones",
      cell: row =>
        <div className="flex justify-start gap-3 w-80">
          <button className='text-green-700 hover:bg-gray-200 w-9 h-9 flex items-center justify-center rounded-full' onClick={ () => alert(`cualquiercosa${row.id}`) }><FaRegMoneyBillAlt className='w-5 h-5' /></button>
          <button className='text-blue-700 hover:bg-gray-200 w-9 h-9 flex items-center justify-center rounded-full' onClick={ () => alert(row.id) }><FaEye className='w-5 h-5' /></button>
          <button className='text-yellow-500 hover:bg-gray-200 w-9 h-9 flex items-center justify-center rounded-full' onClick={ () => alert(row.id) }><FaClipboardList className='w-5 h-5' /></button>
        </div>
    },
  ]

  const filteredItems = listCredits?.filter(
		item => item.cliente.includes(searchProduct) || item.deudaTotal.includes(searchProduct) ,
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
