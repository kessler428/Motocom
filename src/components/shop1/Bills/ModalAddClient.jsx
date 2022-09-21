import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createClient } from "../../../redux/slices/clients/thunks";

const ModalAddClient = ({ modal, setModal }) => {
  const dispatch = useDispatch();

  const [datos, setDatos] = useState({
    nombres: "",
    apellidos: "",
    ruc: "",
    email: "",
    direccion: "",
    telefono: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuario = 'tienda'

    const data = {
      nombres: datos.nombres,
      apellidos: datos.apellidos,
      ruc: datos.ruc,
      email: datos.email,
      direccion: datos.direccion,
      telefono: datos.telefono,
    };

    const { nombres, apellidos, ruc, email, direccion, telefono } = data;

    dispatch(createClient(nombres, apellidos, ruc, email, direccion, telefono, usuario));
    setModal(!modal);
  };

  return (
    modal && (
      <div className="fixed inset-0 bg-dark-blue bg-opacity-70 h-full w-full z-50">
        <div className="w-full h-full flex justify-center items-center">
          <div className="mx-auto p-4 border w-4/5 sm:w-1/2 lg:w-3/5 shadow-lg rounded-md bg-dark-blue text-white">
            <div className="flex flex-row justify-between items-center px-6">
              <h1 className="font-semibold">Agregar Cliente</h1>
              <button
                onClick={() => setModal(false)}
                className="bg-gray-400 px-3 rounded-full py-1"
              >
                X
              </button>
            </div>
            <form onSubmit={handleSubmit} className="rounded-lg">
              <div className="flex flex-wrap py-4 justify-center gap-4">
                <div className="w-80 flex flex-col">
                  <label className="font-semibold">Nombres</label>
                  <input
                    type="text"
                    className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base text-black"
                    placeholder="Nombres"
                    value={datos.nombres}
                    onChange={(e) =>
                      setDatos({ ...datos, nombres: e.target.value })
                    }
                  />
                </div>
                <div className="w-80 flex flex-col">
                  <label className="font-semibold">Apellidos</label>
                  <input
                    type="text"
                    className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base text-black"
                    placeholder="Apellidos"
                    value={datos.apellidos}
                    onChange={(e) =>
                      setDatos({ ...datos, apellidos: e.target.value })
                    }
                  />
                </div>
                <div className="w-80 flex flex-col">
                  <label className="font-semibold">Numero Ruc o cedula</label>
                  <input
                    type="text"
                    className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base text-black"
                    placeholder="Numero Ruc o cedula"
                    value={datos.ruc}
                    onChange={(e) =>
                      setDatos({ ...datos, ruc: e.target.value })
                    }
                  />
                </div>
                <div className="w-80 flex flex-col">
                  <label className="font-semibold">Direccion</label>
                  <input
                    type="text"
                    className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base text-black"
                    placeholder="Direccion"
                    value={datos.direccion}
                    onChange={(e) =>
                      setDatos({ ...datos, direccion: e.target.value })
                    }
                  />
                </div>
                <div className="w-80 flex flex-col">
                  <label className="font-semibold">Telefono</label>
                  <input
                    type="text"
                    className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base text-black"
                    placeholder="Telefono"
                    value={datos.telefono}
                    onChange={(e) =>
                      setDatos({ ...datos, telefono: e.target.value })
                    }
                  />
                </div>
                <div className="w-80 flex flex-col">
                  <label className="font-semibold">Email</label>
                  <input
                    type="text"
                    className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base text-black"
                    placeholder="Email"
                    value={datos.email}
                    onChange={(e) =>
                      setDatos({ ...datos, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="flex justify-end m-8 gap-4">
                <button
                  onClick={() => setModal(false)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Cancelar
                </button>
                <button type="submit" className="bg-orange hover:bg-hover-orange text-white font-bold py-2 px-4 rounded-lg">
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default ModalAddClient;
