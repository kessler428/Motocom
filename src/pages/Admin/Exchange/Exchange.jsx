import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Table } from "../../../components/admin/exchange/Table";
import { Header } from "../../../components/admin/header/Header";
import { SideBar } from "../../../components/admin/SideBar";
import { getAllInventory, getOneProduct } from "../../../redux/slices/inventory/thunks";

const Exchange = () => {
  const { listInventory } = useSelector((state) => state.inventory);

  const dispatch = useDispatch();

  const [products, setProducts] = useState({
    cantidad: "",
    productName: '',
    productId: "",
  });

  console.log(listInventory);

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const showTable = data.map((item) => {
    return <Table {...item} />;
  });

  useEffect(() => {
    dispatch(getAllInventory(2));
  }, [dispatch]);

  const handleInputChange = (e) => {
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  };

  const options = listInventory.map((item) => {
    return { value: `${item.id}`, label: `${item.nombreArticulo} / ${item.codigoUno} / ${item.marca}` };
  });

  const handleProductChange = (e) => {
    dispatch(getOneProduct(e.value));

    setProducts({
      ...products,
      productId: e.value,
      productName: e.label,
    });
  }

  const addProducts = (products) => {
    if (products.cantidad !== "" && products.productId !== "") {
      setData([...data, products]);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div className='flex flex-row'>
      <SideBar />
      <Header />
      <div className="mx-auto w-11/12 lg:pl-56 py-24">
        <div className="w-full flex flex-row justify-between">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
            Enviar productos
          </h1>
        </div>
        <div className="mt-10 bg-white p-8 rounded-xl">
          <div className="flex flex-col md:flex-row gap-6 items-end">
          <div className="w-full">
              <label className="flex flex-col">
                Seleccione un producto
                <Select
                  value={ products.productName.label }
                  options={options}
                  onChange={handleProductChange}
                />
              </label>
            </div>
            <div className="w-full md:w-1/5">
              <label className="flex flex-col">
                Unidades
                <input
                  type="number"
                  name="cantidad"
                  value={products.cantidad}
                  onChange={handleInputChange}
                  className="border-2 rounded-lg p-2 mt-1"
                />
              </label>
            </div>
            <div className="">
              <button
                onClick={() => addProducts(products)}
                className="bg-orange hover:bg-hover-orange text-white font-bold py-[10px] px-4 rounded-lg"
              >
                Agregar
              </button>
            </div>
          </div>
          {error && (
            <div className="mb-1 text-center mt-4">
              <p className="text-red-600 font-bold">
                Por favor, complete todos los campos
              </p>
            </div>
          )}
          <div className="mt-6">
            {data.length > 0 && (
              <>
                <div className="border-2 rounded-xl p-2">
                  <div className="flex flex-row gap-4 text-lg font-bold">
                    <div className="w-1/3 text-center">
                      <p>Unidades</p>
                    </div>
                    <div className="w-1/3 text-center">
                      <p>Producto</p>
                    </div>
                    <div className="w-1/3 text-center">
                      <p>Modelo</p>
                    </div>
                  </div>
                  {showTable}
                </div>
                <div className="flex flex-col md:flex-row md:items-end md:justify-end mt-10 gap-8">
                  <div className="w-full">
                    <label className="flex flex-col ">
                      Tiendas
                    </label>
                    <select
                      name="productId"
                      id="productId"
                      onChange={handleInputChange}
                      className="border-2 rounded-lg p-2 mt-1 w-full"
                    >
                      <option value="none">Seleccione una tienda</option>
                      <option value="1">Tienda 2</option>
                      <option value="2">Tienda 3</option>
                      <option value="3">Tienda 4</option>
                    </select>
                  </div>
                  <button className="bg-orange hover:bg-hover-orange text-white font-bold py-[10px] px-4 rounded-lg">
                    Enviar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
