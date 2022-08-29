// import { PaginationInventory } from "./Pagination";
import { useSelector } from 'react-redux'

import DataTable from 'react-data-table-component'
import { useState } from 'react';
import { GridSearchBar } from '../GridSearch';


export const TableData = () => {

  const { listInventory } = useSelector((state) => state.inventory);
  const [searchProduct, setSearchProduct] = useState('');

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
      selector: row => row.precioVenta
    },
    {
      name: "Stock",
      selector: row => row.stock[0].stock
    }
  ]

  const filteredItems = listInventory.filter(
		item => item.nombreArticulo.includes(searchProduct) || item.codigoUno.includes(searchProduct) || item.modelo.includes(searchProduct),
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
      {/* <PaginationInventory itemsPerPage={5} /> */}
    </>
  );
};
