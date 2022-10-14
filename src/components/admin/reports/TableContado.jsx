import { useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import moment from 'moment';
import 'moment/locale/es';
import { ProductsModal } from '../credits/creditsAdmin/ProductsModal';
import { useState } from 'react';

export const TableContado = () => {

  moment.locale('es');
  const { listReports } = useSelector((state) => state.reports);

  const [modal, setModal] = useState(false);
    const [id, setId] = useState('')

    const columns = [
        {
          name: "No. Factura",
          selector: row => row.id
        },
        {
          name: "Cliente",
          selector: row => row.cliente
        },
        {
          name: "Tipo de venta",
          selector: row => row.tipoFactura
        },
        {
          name: "Subtotal",
          cell: row => <p>C${parseFloat(row.subTotal).toLocaleString('us-Us')}</p>
        },
        {
          name: "Descuento",
          cell: row => <p>{row.descuento}%</p>
        },
        {
          name: "Total",
          cell: row => <p>C${parseFloat(row.total).toLocaleString('us-Us')}</p>
        },
        {
            name: "Acciones",
            cell: row =>
            <button
                onClick={() => viewProducts(row.id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
            >
                Ver Factura
            </button>
        }
    ]

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  const viewProducts = (id) => {
    setModal(true);
    setId(id);
}
  
  return (
    <div className='mt-8'>
      <h1 className='text-lg my-4 font-semibold'>Facturas de Contado</h1>
      <DataTable
       columns={columns}
       data={ listReports.data.contado.data }
       pagination
       paginationComponentOptions={paginationComponentOptions}
      />
      <p className='mt-4 text-blue-600 font-semibold'>Total en ventas de contado: C${parseFloat(listReports.data.contado.sumaTotal).toLocaleString('us-Us')}</p>
      <ProductsModal id={id} modal={modal} setModal={setModal} />
    </div>
  );
};
