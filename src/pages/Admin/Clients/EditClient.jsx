import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { Header } from "../../../components/admin/header/Header";
import { SideBar } from "../../../components/admin/SideBar";
import { SpinerLoading } from "../../../components/SpinnerLoading";
import { editClient, getOneClient } from "../../../redux/slices/clients/thunks";
import { setIsLoading } from "../../../redux/slices/ui/uiSlices";

const EditClient = () => {
  const dispatch = useDispatch();
  const { clientId } = useParams();

  const { oneClient } = useSelector((state) => state.clients);
  const { isLoading } = useSelector((state) => state.ui);
  const { nombres, apellidos, ruc, direccion, telefono, email, crediticio } = oneClient;

  useEffect(() => {
    dispatch(getOneClient(clientId));
    dispatch(setIsLoading(true));
  }, [clientId, dispatch]);

  const [validButton, setValidButton] = useState(false)
  const [datos, setDatos] = useState({
    nombres: "",
    apellidos: "",
    ruc: "",
    email: "",
    direccion: "",
    telefono: "",
  });

  useEffect(() => {
    setDatos({
      nombres: nombres,
      apellidos: apellidos,
      ruc: ruc,
      crediticio: crediticio,
      email: email,
      direccion: direccion,
      telefono: telefono,
    });
  }, [oneClient, apellidos, direccion, email, nombres, ruc, telefono, crediticio]);

  useEffect(() => {
    if (
      datos.nombres !== nombres ||
      datos.apellidos !== apellidos ||
      datos.ruc !== ruc ||
      datos.crediticio !== crediticio ||
      datos.email !== email ||
      datos.direccion !== direccion ||
      datos.telefono !== telefono
    ) {
      setValidButton(true)
    } else {
      setValidButton(false)
    }
  }, [datos, apellidos, direccion, email, nombres, ruc, telefono, crediticio]);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      nombres: datos.nombres,
      apellidos: datos.apellidos,
      ruc: datos.ruc,
      crediticio: datos.crediticio,
      email: datos.email,
      direccion: datos.direccion,
      telefono: datos.telefono,
    };

    const { nombres, apellidos, ruc, email, direccion, telefono, crediticio } = data;

    dispatch(
      editClient(clientId, nombres, apellidos,crediticio, ruc, email, direccion, telefono)
    );
  };

  return (
    <>
      {isLoading ? (
        <SpinerLoading />
      ) : (
        <>
          <SideBar />
          <Header />

          <div className="mx-auto w-11/12 lg:pl-56 py-24">
            <div className="w-full flex flex-col">
              <h1 className="text-4xl font-bold">Editar cliente</h1>
              <form
                onSubmit={handleSubmit}
                className="bg-white mt-10 rounded-lg"
              >
                <div className="flex flex-wrap p-10 justify-center gap-4">
                  <div className="w-full flex flex-col">
                    <label className="font-semibold">Nombres</label>
                    <input
                      type="text"
                      className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                      placeholder="Nombres"
                      value={datos.nombres}
                      onChange={(e) =>
                        setDatos({ ...datos, nombres: e.target.value })
                      }
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="font-semibold">Apellidos</label>
                    <input
                      type="text"
                      className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                      placeholder="Apellidos"
                      value={datos.apellidos}
                      onChange={(e) =>
                        setDatos({ ...datos, apellidos: e.target.value })
                      }
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="font-semibold">Numero Ruc o cedula</label>
                    <input
                      type="text"
                      className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                      placeholder="Numero Ruc o cedula"
                      value={datos.ruc}
                      onChange={(e) =>
                        setDatos({ ...datos, ruc: e.target.value })
                      }
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="font-semibold">Monto crediticio</label>
                    <input
                      type="text"
                      className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                      placeholder="Numero Ruc o cedula"
                      value={datos.crediticio}
                      onChange={(e) =>
                        setDatos({ ...datos, crediticio: e.target.value })
                      }
                    />
                  </div>

                  <div className="w-full flex flex-col">
                    <label className="font-semibold">Direccion</label>
                    <input
                      type="text"
                      className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                      placeholder="Direccion"
                      value={datos.direccion}
                      onChange={(e) =>
                        setDatos({ ...datos, direccion: e.target.value })
                      }
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="font-semibold">Telefono</label>
                    <input
                      type="text"
                      className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                      placeholder="Telefono"
                      value={datos.telefono}
                      onChange={(e) =>
                        setDatos({ ...datos, telefono: e.target.value })
                      }
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="font-semibold">Email</label>
                    <input
                      type="text"
                      className="border rounded-lg border-gray-400 py-2 px-3 font-normal text-base"
                      placeholder="Email"
                      value={datos.email}
                      onChange={(e) =>
                        setDatos({ ...datos, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="flex justify-end mb-8 mr-8 gap-4">
                  <NavLink
                    to="/clients"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Regresar
                  </NavLink>
                  {validButton ? (
                    <button type="submit" className="bg-green-600 hover:bg-green-800 px-4 py-2 rounded-lg text-white font-bold">
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
          </div>
        </>
      )}
    </>
  );
};

export default EditClient;
