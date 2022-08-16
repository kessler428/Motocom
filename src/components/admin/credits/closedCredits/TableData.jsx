// import { PaginationInventory } from "./Pagination";
import { useSelector } from 'react-redux'

import DataTable from 'react-data-table-component'
import { useState } from 'react';
import { GridSearchBar } from '../../GridSearch';

import { FaClipboardList } from 'react-icons/fa';

export const TableData = () => {

  const { closedCreditsList } = useSelector((state) => state.credits)
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
      name: "Deuda Cancelada",
      selector: row => row.total
    },
    {
      name: "Historial de abonos",
      cell: row =><button className='text-yellow-500 hover:bg-gray-200 p-3 rounded-full' onClick={ () => alert(row.id) }><FaClipboardList className='w-5 h-5' /></button>
    },
  ]

  const filteredItems = closedCreditsList.filter(
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
