import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCredit } from "../../../../redux/slices/Credits/thunks";

export const PaymentModal = ({ modal, setModal, id }) => {

  const dispatch = useDispatch();

  const [datos, setDatos] = useState({
    amount: '',
    description: '',
    typeOfPayment: '',
  })

  useEffect(() => {
    if(modal === false){
      setDatos({
        amount: '',
        description: '',
        typeOfPayment: '',
      })
    }
  }, [modal])
  

  const onSubmit = (e) => {
    e.preventDefault();

    const { amount, description, typeOfPayment } = datos;
    
    dispatch(createCredit(id, typeOfPayment,description, amount ))
    setModal(!modal)
    setDatos({
      amount: '',
      description: '',
      typeOfPayment: '',
    })
  };

  return (
    modal && (
      <div className="fixed inset-0 bg-dark-blue bg-opacity-70 overflow-y-auto h-full w-full z-50">
        <div className="w-full h-full flex justify-center items-center">
          <div className="mx-auto p-5 border w-4/5 sm:w-1/2 lg:w-1/3 shadow-lg rounded-md bg-dark-blue text-white">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-2xl underline">Realizar abono</h1>
              <button
                onClick={() => setModal(false)}
                className="bg-gray-400 px-3 rounded-full py-1"
              >
                X
              </button>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col gap-3 mt-4">
              <div className="flex flex-col">
                <label>Metodo de pago</label>
                <input
                  type="text"
                  placeholder="Efectivo"
                  value={datos.typeOfPayment}
                  onChange={(e) => setDatos({ ...datos, typeOfPayment: e.target.value })}
                  name="typeOfPayment"
                  id="typeOfPayment"
                  className="w-full py-1 px-2 rounded-lg text-black"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label>Monto</label>
                <input
                  type="number"
                  name="amount"
                  value={datos.amount}
                  onChange={(e) => setDatos({ ...datos, amount: e.target.value })}
                  id="amount"
                  placeholder="500"
                  className="w-full py-1 px-2 rounded-lg text-black"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label>Descripción</label>
                <input
                  type="text"
                  placeholder="Escriba un comentario"
                  name="description"
                  value={datos.description}
                  onChange={(e) => setDatos({ ...datos, description: e.target.value })}
                  id="description"
                  className="w-full py-1 px-2 rounded-lg text-black"
                  required
                />
              </div>
              <button type="submit" className="bg-orange py-2 rounded-lg font-semibold hover:bg-hover-orange mt-4">
                Realizar Abono
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};
