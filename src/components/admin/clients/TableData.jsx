// import { PaginationInventory } from "./Pagination";
import { useDispatch, useSelector } from "react-redux";

import DataTable from "react-data-table-component";
import { useState } from "react";
import { GridSearchBar } from "../GridSearch";
import Swal from "sweetalert2";
import { deleteClient } from "../../../redux/slices/clients/thunks";
import { useNavigate } from "react-router-dom";

export const TableData = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate()

  const { listClients } = useSelector((state) => state.clients);
  const [searchProduct, setSearchProduct] = useState("");

  const deleteClients = (id) => {
    Swal.fire({
      text: "¿Estás seguro de elimar este cliente?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Sí",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteClient(id));
      }
    });
  };

  const editClient = (id) => {
    Navigate(`edit_client/${id}`);
  }

  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.nombres,
    },
    {
      name: "Apellido",
      selector: (row) => row.apellidos,
    },
    {
      name: "Numero RUC",
      selector: (row) => row.ruc,
    },
    {
      name: "Monto crediticio",
      cell: (row) => (
        <div className="flex flex-row">
          <p>C$</p>
          <p>{parseFloat(row.crediticio).toLocaleString('us-Us')}</p>
        </div>
        ),
    },
    {
      name: "Correo electrónico",
      selector: (row) => row.email,
    },
    {
      name: "Dirección",
      selector: (row) => row.direccion,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div className="flex justify-start gap-2 w-80">
          <button
            onClick={() => editClient(row.id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
          >
            Editar
          </button>
          <button
            onClick={() => deleteClients(row.id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded"
          >
            Eliminar
          </button>
        </div>
      ),
    },
  ];

  const filteredItems = listClients?.filter(
    (item) =>
      item.nombres.includes(searchProduct) ||
      item.apellidos.includes(searchProduct) ||
      item.ruc.includes(searchProduct)
  );

  const paginationComponentOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  return (
    <>
      <GridSearchBar
        searchProduct={searchProduct}
        setSearchProduct={setSearchProduct}
      />

      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        paginationComponentOptions={paginationComponentOptions}
      />
    </>
  );
};
