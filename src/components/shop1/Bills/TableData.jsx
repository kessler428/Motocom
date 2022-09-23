import { useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import { useState } from 'react';
import { GridSearchBar } from '../GridSearch';
import moment from 'moment';
import 'moment/locale/es';
import { Link } from 'react-router-dom';

export const TableData = () => {
  const { historyOfBills } = useSelector((state) => state.bill);
  const [searchProduct, setSearchProduct] = useState('');

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
      name: "Total",
      cell: row => <p>C${parseFloat(row.total).toLocaleString('us-Us')}</p>
    },
    {
      name: "Fecha",
      cell: row => <p>{moment(row.createdAt).format('LLL')}</p>
    },
    {
    name: "Acciones",
        cell: row =>
        <div className="flex justify-start gap-2 w-80">
          <Link to={`/detail_of_one_bill/${row.id}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
          >
            Ver
          </Link>
          <Link to={`/print_baucher/${row.id}`}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded"
          >
            Imprimir
          </Link>
        </div>
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
