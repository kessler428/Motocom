import { useDispatch, useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import { useState } from 'react';
import { GridSearchBar } from '../GridSearch';
import { getOneBill } from '../../../redux/slices/bills/thunks';
import moment from 'moment';
import 'moment/locale/es';


export const TableData = () => {

  const dispatch = useDispatch();
  const { historyOfBills } = useSelector((state) => state.bill);
  const [searchProduct, setSearchProduct] = useState('');

  const handleClick = (id) => {
    dispatch(getOneBill(id))
  }

  moment.locale('es');

  const columns = [
    {
      name: "#Factura",
      selector: row => row.id
    },
    {
      name: "Cliente",
      selector: row => row.cliente
    },
    {
      name: "Tipo de factura",
      selector: row => row.tipoFactura
    },
    {
      name: "Fecha",
      cell: row => <p>{moment(row.createdAt).format('LLL')}</p>
    },
    {
    name: "Acciones",
        cell: row =>
        <button 
          className='hover:underline p-3 rounded-full text-blue-600'
          onClick={() => handleClick(row.id)}
        >
          Ver Factura
        </button>
    },
  ]

  const filteredItems = historyOfBills.filter(
		item => item.cliente.includes(searchProduct)
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
