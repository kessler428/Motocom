import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetchConToken } from "../../../../helpers/fecth";

export const PaymentViewModal = ({ modal, setModal, id }) => {

  const [payments, setPayments] = useState('')

  useEffect(() => {
    const getPayments = async () => {
      const res = await fetchConToken(`abono/${id}`);
      const data = await res.json();
      setPayments(data.historialAbonos)
    }
    getPayments();
  }, [id])  

  return (
    modal && (
      <div className="fixed inset-0 bg-dark-blue bg-opacity-70 overflow-y-auto h-full w-full z-50">
        <div className="w-full h-full flex justify-center items-center">
          <div className="mx-auto p-5 border w-4/5 sm:w-1/2 lg:w-1/3 shadow-lg rounded-md bg-dark-blue text-white">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-2xl underline">Historial de abonos</h1>
              <button
                onClick={() => setModal(false)}
                className="bg-gray-400 px-3 rounded-full py-1"
              >
                X
              </button>
            </div>
            <table className="table-auto w-full mt-8">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-center">Monto</th>
                  <th className="px-4 py-2 text-center">Tipo de pago</th>
                  <th className="px-4 py-2 text-center">Descripcion</th>
                </tr>
              </thead>
              <tbody>
                {
                  payments && payments.map((payment) => (
                    <tr key={payment.id}>
                      <td className="border px-4 py-2 text-center">{payment.metodoPago}</td>
                      <td className="border px-4 py-2 text-center">{payment.montoAbonado}</td>
                      <td className="border px-4 py-2 text-center">{payment.concepto}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  );
};
