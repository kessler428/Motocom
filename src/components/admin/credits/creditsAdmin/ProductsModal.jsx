import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchConToken } from "../../../../helpers/fecth";

export const ProductsModal = ({ modal, setModal, id }) => {

  const [products, setProducts] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetchConToken(`abono/detalles/${id}`);
      const data = await res.json();
      setProducts(data.productos)
    }
    getProducts();
  }, [dispatch, id])

  return (
    modal && (
      <div className="fixed inset-0 bg-dark-blue bg-opacity-70 h-full w-full overflow-y-auto z-50">
        <div className="flex justify-center items-center my-20">
          <div className="mx-auto p-5 bg-white border w-3/4 sm:w-3/4 md:w-2/3 lg:w-3/5 shadow-lg rounded-md text-dark-blue">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-2xl">Productos Facturados</h1>
              <button
                onClick={() => setModal(false)}
                className="bg-white px-3 rounded-full py-1 text-dark-blue border-dark-blue border hover:bg-gray-200"
              >
                X
              </button>
            </div>
            <table className="table-auto w-full mt-8 hidden sm:table">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-center">Unidades</th>
                  <th className="px-4 py-2 text-center">Producto</th>
                  <th className="px-4 py-2 text-center">Código</th>
                  <th className="px-4 py-2 text-center">Precio</th>
                </tr>
              </thead>
              <tbody>
                {
                  products && products.map((payment) => (
                    <tr key={payment.id}>
                      <td className="border px-4 py-2 text-center">{payment.unidades}</td>
                      <td className="border px-4 py-2 text-center">{payment.producto}</td>
                      <td className="border px-4 py-2 text-center">{payment.codigoUno}</td>
                      <td className="border px-4 py-2 text-center">{payment.precio}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <div className="mt-8 sm:hidden">
                {
                  products && products.map((payment) => (
                    <div className="flex flex-col border p-3 rounded-lg mt-2" key={payment.id}>
                        <div className="flex flex-row justify-between">
                            <p className="font-semibold">Unidades :</p>
                            <p className="">{payment.unidades}</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="font-semibold">Producto :</p>
                            <p className="">{payment.producto}</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="font-semibold">Código :</p>
                            <p className="">{payment.codigoUno}</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="font-semibold">Precio :</p>
                            <p className="">{payment.precio}</p>
                        </div>
                    </div>
                  ))
                }
            </div>
          </div>
        </div>
      </div>
    )
  );
};
