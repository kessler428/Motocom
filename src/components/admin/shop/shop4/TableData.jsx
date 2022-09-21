import { useDispatch, useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import { useState } from 'react';
import { GridSearchBar } from '../../GridSearch';
import { deleteOneBill } from '../../../../redux/slices/bills/thunks';
import moment from 'moment';
import 'moment/locale/es';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { setIsLoading } from '../../../../redux/slices/ui/uiSlices';
import { SpinerLoading } from '../../../SpinnerLoading';


export const TableData = () => {

  const dispatch = useDispatch();
  const { historyOfBills } = useSelector((state) => state.bill);
  const { isLoading } = useSelector((state) => state.ui);
  const [searchProduct, setSearchProduct] = useState('');

  const deleteBill = (id) => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteOneBill(id, 2))
        dispatch(setIsLoading(true))
      }})
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
      cell: (row) => (
        <div className="flex justify-start gap-2 w-80">
          <Link
            to={`/shop_four/detail_of_one_bill/${row.id}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
          >
            Ver
          </Link>
          <button
            onClick={() => deleteBill(row.id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded"
          >
            Eliminar
          </button>
        </div>
      ),
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
  
  return isLoading ? <SpinerLoading /> : (
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
