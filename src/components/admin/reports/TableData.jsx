import { useSelector } from 'react-redux'

import DataTable from 'react-data-table-component'
import { GridSearchBar } from '../GridSearch';
import { useState } from 'react';

export const TableData = () => {

  const { listReports } = useSelector((state) => state.reports);
  const [searchProduct, setSearchProduct] = useState('');

  const columns = [
    {
      name: "Unidades",
      selector: row => row.unidades
    },
    {
      name: "Producto",
      selector: row => row.nombre_articulo
    },
    {
      name: "Precio de compra",
      selector: row => row.total_precio_compra
    },
    {
      name: "Precio de venta",
      selector: row => row.total_precio_venta
    },
    {
      name: "Ganancias",
      selector: row => row.ganancias
    },
    {
      name: "Fecha",
      selector: row => row.created_at
    },
  ]

  const filteredItems = listReports.products.filter(
		item => item.nombre_articulo.includes(searchProduct)
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
