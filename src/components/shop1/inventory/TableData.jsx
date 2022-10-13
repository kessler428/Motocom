import { useSelector } from 'react-redux'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';


export const TableData = () => {

  const { listInventory } = useSelector((state) => state.inventory);

  const columns = [
    {
      name: "Nombre",
      selector: row => row.nombreArticulo
    },
    {
      name: "Codigo 1",
      selector: row => row.codigoUno
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
      name: "Precio de venta",
      cell: row => <p>C${parseFloat(row.precioVenta).toLocaleString('us-Us')}</p>
    },
    {
      name: "Stock",
      selector: row => row.stock?.[0].stock
    }
  ]

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  const tableData = {
    columns,
    data: listInventory,
  }
  
  return (
    <div className='bg-white mt-8'>

      {/* <GridSearchBar searchProduct={searchProduct} setSearchProduct={setSearchProduct}/> */}

      <DataTableExtensions 
        {...tableData}
        filterPlaceholder="Buscar un producto"
        filter={true}
        pagination={true}
        paginationComponentOptions={paginationComponentOptions}
        print={false}
        export={false}
      >
        <DataTable
          noHeader
          style={{width: '100%', marginTop: '2rem'}}
          defaultSortField="id"
          pagination
          defaultSortAsc={false}
          paginationComponentOptions={paginationComponentOptions}
        />
      </DataTableExtensions>

    </div>
  );
};
