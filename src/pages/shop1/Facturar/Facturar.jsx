import React, { useState } from 'react'
import uniqid from 'uniqid';
import { Table } from '../../../components/shop1/Bills/Table';
import { Header } from '../../../components/shop1/header/Header'
import { SideBar } from '../../../components/shop1/SideBar'

const Facturar = () => {

  const [data, setData] = useState([]);

  const [products, setProducts] = useState({
    cantidad: "",
    productId: "",
    price: '',
  });

  const handleInputChange = (e) => {
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  };

  const deleteProduct = (id) => {
    const filteredProducts = data.filter((item) => item.id !== id);
    setData(filteredProducts);
  }
  
  const addProducts = (products) => {

    const product = {
      id: uniqid(),
      cantidad: products.cantidad,
      productId: products.productId,
      price: products.price,
    };

    if (products.cantidad !== "" && products.productId !== "") {
      setData([...data, product]);
    }
  };

  return (
    <>
      <SideBar />
      <Header />

      <div className="mx-auto w-10/12 sm:pl-12 py-24">
        <div className="w-full flex flex-row justify-between">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-orange">
            Facturar
          </h1>
        </div>
        <div className="mt-10 bg-white p-8 rounded-xl">
          <div>
            <h4 className='text-3xl font-bold mb-6'>Agregar cliente</h4>
            <div className='flex flex-row items-end gap-6'>
              <div className='flex flex-col w-full'>
                <label>Seleccione</label>
                <select className='border p-2 rounded-lg w-full'>
                  <option>Seleccione un cliente</option>
                  <option>Cliente 1</option>
                  <option>Cliente 2</option>
                  <option>Cliente 3</option>
                </select>
              </div>
              <div>
                <button className='bg-orange hover:bg-hover-orange text-white font-bold py-2 px-4 rounded-lg'>Agregar</button>
              </div>
            </div>
          </div>
          <div className='mt-8'>
            <h4 className='text-3xl font-bold mb-6'>Agregar productos</h4>
            <div className="flex flex-row gap-6 items-end">
              <div className="w-28">
                <label className="flex flex-col">
                  Unidades
                  <input
                    min={0}
                    type="number"
                    name="cantidad"
                    className="border-2 rounded-lg p-2 mt-1"
                    placeholder='12'
                    value={products.cantidad}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className="w-full">
                <label className="flex flex-col">Productos</label>
                <select
                      name="productId"
                      id="productId"
                      onChange={handleInputChange}
                      className="border-2 rounded-lg p-2 mt-1 w-full"
                    >
                      <option value="none">Seleccione un producto</option>
                      <option value="Discos de freno">Discos de freno</option>
                      <option value="Palanca de cambios">Palanca de cambios</option>
                      <option value="Manubrio Pro Taper">Manubrio Pro Taper</option>
                    </select>
              </div>
              <div className="w-1/5">
                <label className="flex flex-col">
                  Precio
                  <input
                    min={0}
                    type="number"
                    name="price"
                    className="border-2 rounded-lg p-2 mt-1"
                    placeholder='500'
                    value={products.price}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className="w-1/5">
                <label className="flex flex-col">
                  Total
                  <input
                    type="number"
                    name="productId"
                    value={ products.cantidad * products.price }
                    className="border-2 rounded-lg p-2 mt-1"
                    placeholder='6000'
                    disabled
                  />
                </label>
              </div>
            </div>
            <div className='flex justify-end mt-4'>
              <button
                onClick={ () =>addProducts(products) }
                className='bg-orange hover:bg-hover-orange text-white font-bold py-2 px-4 rounded-lg'
              >
                Agregar
              </button>
            </div>
          </div>
          <div className="mt-6">
              {data.length > 0 && (
                <>
                  <div className="border-2 rounded-xl p-2">
                    <div className="flex flex-row gap-4 text-lg font-bold mb-4">
                      <div className="w-1/4 text-center">
                        <p>Unidades</p>
                      </div>
                      <div className="w-1/4 text-center">
                        <p>Producto</p>
                      </div>
                      <div className="w-1/4 text-center">
                        <p>Modelo</p>
                      </div>
                      <div className="w-1/4 text-center">
                        <p>Accion</p>
                      </div>
                    </div>
                    <Table deleteProduct={ deleteProduct } data={data} />
                  </div>
                  <div className="flex items-end justify-end mt-10 gap-8">
                    <button className="bg-orange hover:bg-hover-orange text-white font-bold py-[10px] px-4 rounded-lg">
                      Enviar
                    </button>
                  </div>
                </>
              )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Facturar