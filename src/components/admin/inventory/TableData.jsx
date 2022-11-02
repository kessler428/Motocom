import { useDispatch } from "react-redux";

import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteProductById } from "../../../redux/slices/inventory/thunks";
import Swal from "sweetalert2";
import { setIsLoading } from "../../../redux/slices/ui/uiSlices";
import { useNavigate } from "react-router-dom";

import pedidos from "../../../img/pedidos.png";

import DataTable from "react-data-table-component";
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { useFetch } from "../../../hooks/useFetch";
import { SpinerLoading } from "../../SpinnerLoading";

export const TableData = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const { datos, loading } = useFetch(`almacen`);

  const deleteProduct = (id) => {
    Swal.fire({
      title: "¿Esta Seguro de eliminar este producto?",
      icon: "warning",
      confirmButtonText: "Si",
      showDenyButton: true,
      denyButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductById(id));
        dispatch(setIsLoading(true));
      } else if (result.isDenied) {
        Swal.fire("", "No se elimino el producto.!", "info");
      }
    });
  };

  const editProduct = (id) => {
    Navigate(`edit_product/${id}`);
  };

  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.nombreArticulo,
    },
    {
      name: "Codigo 1",
      selector: (row) => row.codigoUno,
    },
    {
      name: "Marca",
      selector: (row) => row.marca,
    },
    {
      name: "Modelo",
      selector: (row) => row.modelo,
    },
    {
      name: "Precio de compra",
      cell: (row) => (
        <p>C${parseFloat(row.precioCompra).toLocaleString("us-Us")}</p>
      ),
    },
    {
      name: "Precio de venta",
      cell: (row) => (
        <p>C${parseFloat(row.precioVenta).toLocaleString("us-Us")}</p>
      ),
    },
    {
      name: "Tienda principal",
      selector: (row) => row.stock?.[0]?.stock,
    },
    {
      name: "Tienda 2",
      selector: (row) => row.stock?.[1]?.stock,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div className="flex flex-row gap-4 justify-start w-80">
          <button
            className="text-yellow-400 hover:bg-gray-200 p-3 rounded-full"
            onClick={() => editProduct(row.id)}
          >
            <FaPencilAlt className="w-5 h-5" />
          </button>
          <button
            className="text-red-700 hover:bg-gray-200 p-3 rounded-full"
            onClick={() => deleteProduct(row.id)}
          >
            <RiDeleteBin5Line className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  const paginationComponentOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  const tableData = {
    columns,
    data: datos?.almacenes,
  }

  return loading ? <SpinerLoading /> : (
    <>
    {
      datos?.almacenes.length === 0 ? (
          <div className="flex flex-col mt-20 justify-center">
            <div className="flex justify-center">
                <img
                    src={pedidos}
                    alt=""
                    className="h-32 bg-gray-100 rounded-full p-4 w-32"
                />
            </div>
            <div className="flex justify-center">
                <p className="text-gray-600 font-bold">
                    No hay productos en stock
                </p>
            </div>
        </div>
      ) : (
        <div className="bg-white mt-6 p-4">
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

      )
    }
    </>
  );
};
