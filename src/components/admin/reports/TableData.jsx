import { useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import moment from 'moment';
import 'moment/locale/es';

export const TableData = () => {

  moment.locale('es');
  const { listReports } = useSelector((state) => state.reports);
  const columns = [
    {
      name: "Unidades",
      selector: row => row.cantidad
    },
    {
      name: "Producto",
      selector: row => row.producto
    },
    {
      name: "Precio de compra",
      cell: row => <p>C${parseFloat(row.precioCompra).toLocaleString('us-Us')}</p>
    },
    {
      name: "Precio de venta",
      cell: row => <p>C${parseFloat(row.precioVenta).toLocaleString('us-Us')}</p>
    },
    {
      name: "Ganancias",
      cell: row => <p>C${parseFloat(row.ganancias).toLocaleString('us-Us')}</p>
    },
    {
      name: "Fecha",
      cell: row => <p>{moment(row.createdAt).format('LLL')}</p>
    },
  ]

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };
  
  return (
    <div className='mt-8'>
      <DataTable
       columns={columns}
       data={ listReports.productos }
       pagination
       paginationComponentOptions={paginationComponentOptions}
      />
    </div>
  );
};
