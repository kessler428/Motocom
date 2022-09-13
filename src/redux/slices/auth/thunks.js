import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../../../helpers/fecth";
import { setIsLoading } from "../ui/uiSlices";
import { setLoginAuth, setLogout } from "./authSlice";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const resp = await fetchSinToken(
        "auth/login",
        {
          email,
          password,
        },
        "POST"
      );

      const body = await resp.json();

      if (body.success === true) {
        localStorage.setItem("token", body.accessToken);
        dispatch(setIsLoading(false));
        dispatch(
          setLoginAuth({
            token: body.accessToken,
            id: body.user.id,
            almacenId: body.almacen.id,
            correo: body.user.email,
            name: body.user.nombres,
            rol: body.user.rol,
          })
        );
        
      } else {
        Swal.fire({
          title: "error",
          text: "Usuario o contraseña incorrecta",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const Logout = () => {
  return async (dispacth) => {
    const resp = await fetchConToken("auth/logout", {}, "PATCH");

    if (resp.status === 204) {
      dispacth(setLogout({
        token: '',
        id: null,
        almacenId: null,
        correo: '',
        name: '',
        rol: '',
      }));
      localStorage.clear();
    }

    if (resp.status === 406) {
      dispacth(setLogout({
        token: '',
        id: null,
        almacenId: null,
        correo: '',
        name: '',
        rol: '',
      }));
      localStorage.clear();
    }
  };
};
