import { useState } from "react";
import More from "../../../assets/More.svg";

export const Data = ({ id, nombreCompleto, email, ingreso }) => {

  const [modalData, setModalData] = useState(false);

  return (
    <div key={id}>
      <div className="py-3 w-full border-b-2 hidden md:block">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-8">

          <div className="w-1/4 text-center">
            <p className="text-sm">#00{id}</p>
          </div>

          <div className="w-1/4 text-center">
            <p className="text-sm">{nombreCompleto}</p>
          </div>

          <div className="w-1/4 text-center">
            <p className="text-sm">{email}</p>
          </div>

          <div className="w-1/4 flex justify-end">
            <div className="flex flex-row md:w-full lg:w-3/4 justify-between lg:mr-2">
              <div className="flex items-center text-sm">
                {
                  ingreso ? 
                  (
                    <p className="md:px-2 py-1 lg:px-4 lg:py-2">
                        Ingresó
                      </p>
                    ):
                    (
                      <button
                        className="bg-green-600 md:px-2 py-1 lg:px-4 lg:py-2 text-white font-bold rounded-lg"
                      >
                        Ingresar
                      </button>
                    )
                }
              </div>
              <div
                onClick={() => {
                  setModalData(!modalData);
                }}
                className="-mt-2 cursor-pointer hover:rounded-full hover:bg-gray-100 w-12 px-5 py-3"
              >
                <img className="" src={More} alt="More" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:hidden mt-5">
        <div className="bg-white p-4 rounded-lg shadow-lg space-y-4">
          <div className="flex justify-between items-center space-x-2 text-sm">
            <div className="text-blue-500">Pedido #00{id}</div>
            {
              ingreso ? 
              (
                <div className="p-1.5 text-xs font-semibold uppercase tracking-wide text-green-800 rounded-lg bg-green-200 bg-opacity-50">Ingresó</div>
              ):
              (
                <button
                  className="bg-green-600 px-2 py-1 text-white rounded-lg"
                >
                  Ingresar
                </button>
              )
            }
          </div>
          <div>{nombreCompleto}</div>
          <div className="flex flex-row justify-between">
            <div>{email}</div>
            <div
              onClick={() => { setModalData(!modalData); }}
              className="-mt-2 cursor-pointer hover:rounded-full hover:bg-gray-100 w-11 px-5 py-3"
            >
              <img className="" src={More} alt="More" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
