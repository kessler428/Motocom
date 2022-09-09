import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../../../helpers/fecth";
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

        if (body.user.rol === "Administrador") {
          window.location = "/index";
        } else if (body.user.rol === "Vendedor") {
          window.location = "/level1/index";
        }
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

export const Logout = (token) => {
  return async (dispacth) => {
    const resp = await fetchConToken("auth/logout", {}, "PATCH");

    if (resp.status === 200) {
      dispacth(setLogout());
    }

    if (resp.status === 406) {
      dispacth(setLogout());
    }
  };
};
