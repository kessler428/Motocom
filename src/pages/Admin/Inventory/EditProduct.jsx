import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SideBar } from "../../../components/admin/SideBar";
import { Header } from "../../../components/admin/header/Header";
import {
  editProducts,
  getCatalogStock,
} from "../../../redux/slices/inventory/thunks";
import { setIsLoading } from "../../../redux/slices/ui/uiSlices";
import { SpinerLoading } from "../../../components/SpinnerLoading";
import { fetchConToken } from "../../../helpers/fecth";

const EditProduct = () => {

  const dispatch = useDispatch();
  let { productId } = useParams();

  const { typeOfStock } = useSelector((state) => state.inventory);
  const { isLoading } = useSelector((state) => state.ui);

  const [oneProduct, setOneProduct] = useState('');
  const [validButton, setValidButton] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchConToken(`almacen/${productId}`);
      const data = await res.json();

      setOneProduct(data.almacen);
    };
    fetchData();
  }, [productId]);

  useEffect(() => {
    dispatch(getCatalogStock());
    dispatch(setIsLoading(true));
  }, [dispatch, productId]);

  const {
    nombreArticulo,
    codigoUno,
    codigoDos,
    marca,
    modelo,
    precioCompra,
    precioVenta,
    stock,
    notas,
    tipoStockId,
  } = oneProduct;

  const [datos, setDatos] = useState({
    nombreArticulo: '',
    codigoUno: '',
    codigoDos: '',
    modelo: '',
    marca: '',
    precioVenta: '',
    precioCompra: '',
    notas: '',
    stock1: '',
    stock2: '',
    stock3: '',
    stock4: '',
    typeStockId: '',
  });
  

  useEffect(() => {
    setDatos({
      nombreArticulo: nombreArticulo,
      codigoUno: codigoUno,
      codigoDos: codigoDos,
      modelo: modelo,
      marca: marca,
      precioVenta: precioVenta,
      precioCompra: precioCompra,
      notas: notas,
      stock1: stock?.[0].stock,
      stock2: stock?.[1].stock,
      stock3: stock?.[2].stock,
      stock4: stock?.[3].stock,
      typeStockId: tipoStockId,
    })
  }, [codigoDos, codigoUno, marca, modelo, nombreArticulo, notas, oneProduct, precioCompra, precioVenta, stock, tipoStockId])

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };


  useEffect(() => {
    if (
      datos.nombreArticulo !== nombreArticulo ||
      datos.codigoUno !== codigoUno ||
      datos.codigoDos !== codigoDos ||
      datos.marca !== marca ||
      datos.modelo !== modelo ||
      datos.precioVenta !== precioVenta ||
      datos.precioCompra !== precioCompra ||
      datos.stock1 !== stock?.[0].stock ||
      datos.stock2 !== stock?.[1].stock ||
      datos.stock3 !== stock?.[2].stock ||
      datos.stock4 !== stock?.[3].stock ||
      datos.notas !== notas ||
      datos.typeStockId !== tipoStockId
    ) {
      setValidButton(true);
    } else {
      setValidButton(false);
    }
  }, [
    codigoDos,
    codigoUno,
    datos,
    marca,
    modelo,
    nombreArticulo,
    notas,
    precioCompra,
    precioVenta,
    stock,
    tipoStockId,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidButton(false);

    const values = {
      nombreArticulo: datos.nombreArticulo,
      codigoUno: datos.codigoUno,
      codigoDos: datos.codigoDos,
      modelo: datos.modelo,
      marca: datos.marca,
      precioVenta: Number(datos.precioVenta),
      precioCompra: Number(datos.precioCompra),
      notas: datos.notas,
      stock1: Number(datos.stock1),
      stock2: Number(datos.stock2),
      stock3: Number(datos.stock3),
      stock4: Number(datos.stock4),
      tipoStockId: Number(datos.typeStockId),
    };

    const {
      nombreArticulo,
      codigoUno,
      codigoDos,
      modelo,
      marca,
      precioVenta,
      precioCompra,
      notas,
      stock1,
      stock2,
      stock3,
      stock4,
      tipoStockId,
    } = values;

    const stocks = [
      {
        stock: stock1,
        tipoAlmacenId: 2,
      },
      {
        stock: stock2,
        tipoAlmacenId: 3,
      },
      {
        stock: stock3,
        tipoAlmacenId: 4,
      },
      {
        stock: stock4,
        tipoAlmacenId: 5,
      },
    ];

    dispatch(
      editProducts(
        productId,
        nombreArticulo,
        codigoUno,
        codigoDos,
        modelo,
        marca,
        precioVenta,
        precioCompra,
        notas,
        stocks,
        tipoStockId
      )
    );
  };
  return isLoading ? <SpinerLoading /> : (
    <>
      <SideBar />
      <Header />

      <div className="mx-auto w-11/12 lg:pl-56 py-24">
        <NavLink to="/inventory" className="text-blue-600 hover:underline">
          {"< Regresar"}
        </NavLink>
        <form
          onSubmit={handleSubmit}
          className=" rounded-3xl px-14 py-8 mt-6 bg-white"
        >
          <div className="text-4xl text-orange font-bold">
            <h1>Editar Producto</h1>
          </div>
          <div className="flex flex-wrap font-semibold mt-2 justify-center">
            <div className="w-full">
              <label className="flex flex-col my-2 text-lg">
                Nombre del producto
                <input
                  type="text"
                  name="nombreArticulo"
                  onChange={handleChange}
                  value={datos.nombreArticulo}
                  className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                  required
                />
              </label>
            </div>
            <div className="w-full">
              <label className="flex flex-col my-2 text-lg">
                Codigo 1
                <input
                  min={0}
                  type="text"
                  name="codigoUno"
                  onChange={handleChange}
                  value={datos.codigoUno}
                  className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                  required
                />
              </label>
            </div>
            <div className="w-full">
              <label className="flex flex-col my-2 text-lg">
                Codigo 2
                <input
                  type="text"
                  name="codigoDos"
                  onChange={handleChange}
                  value={datos.codigoDos}
                  className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="flex flex-col my-2 text-lg">
                Precio de compra
                <input
                  min={0}
                  step="0.01"
                  type="number"
                  name="precioCompra"
                  onChange={handleChange}
                  value={datos.precioCompra}
                  className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                  required
                />
              </label>
            </div>
            <div className="w-full">
              <label className="flex flex-col my-2 text-lg">
                Precio de venta
                <input
                  min={0}
                  step="0.01"
                  type="number"
                  name="precioVenta"
                  onChange={handleChange}
                  value={datos.precioVenta}
                  className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                  required
                />
              </label>
            </div>
            <div className="w-full">
              <label className="flex flex-col my-2 text-lg">
                Tipo de stock
                <select
                  id="typeStockId"
                  name="typeStockId"
                  onChange={handleChange}
                  value={datos.typeStockId}
                  className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                >
                  <option value="none">Seleccione un tipo</option>
                  {typeOfStock?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="w-full">
              <label className="flex flex-col my-2 text-lg">
                Stock Almacen Principal
                <input
                  min={0}
                  type="number"
                  name="stock1"
                  onChange={handleChange}
                  value={datos.stock1}
                  className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                  required
                />
              </label>
              <label className="flex flex-col my-2 text-lg">
                Stock Camion Marlon
                <input
                  min={0}
                  type="number"
                  name="stock2"
                  onChange={handleChange}
                  value={datos.stock2}
                  className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                  required
                />
              </label>
              <label className="flex flex-col my-2 text-lg">
                Stock Camion Miguel
                <input
                  min={0}
                  type="number"
                  name="stock3"
                  onChange={handleChange}
                  value={datos.stock3}
                  className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                  required
                />
              </label>
              <label className="flex flex-col my-2 text-lg">
                Stock Camion Pokemon
                <input
                  min={0}
                  type="number"
                  name="stock4"
                  onChange={handleChange}
                  value={datos.stock4}
                  className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                  required
                />
              </label>
            </div>
            <div className="w-full">
              <label className="flex flex-col my-2 text-lg">
                Marca
                <input
                  type="text"
                  name="marca"
                  value={datos.marca}
                  onChange={handleChange}
                  className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="flex flex-col my-2 text-lg">
                Modelo / Presentacion
                <input
                  type="text"
                  name="modelo"
                  onChange={handleChange}
                  value={datos.modelo}
                  className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="flex flex-col my-2 text-lg">
                Comentario
                <input
                  type="text"
                  name="notas"
                  value={datos.notas}
                  onChange={handleChange}
                  className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-end py-6 gap-6">
            <NavLink
              to="/inventory"
              className="bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-lg text-white font-bold"
            >
              Regresar
            </NavLink>

            {validButton ? (
              <button className="bg-green-600 hover:bg-green-800 px-4 py-2 rounded-lg text-white font-bold">
                Editar
              </button>
            ) : (
              <div className="bg-gray-300 px-4 py-2 rounded-lg text-white font-bold">
                Editar
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
