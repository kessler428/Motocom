import Swal from "sweetalert2";
import { fetchConToken } from "../../../helpers/fecth";
import { setIsLoading } from "../ui/uiSlices";
import { setListClients, setOneClient } from "./clientSlice";

export const getAllClients = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken('cliente')
            const data = await resp.json();

            if(resp.status === 200) {
                dispatch(setListClients(data.data));
            }
            
        } catch (error) {
            console.log(error);
        }   
    }
}

export const createClient = (nombres, apellidos, ruc, email, direccion, telefono) => {
    return async () => {
        try {
            const resp = await fetchConToken(
                'cliente',
                {
                    nombres,
                    apellidos,
                    telefono,
                    email,
                    ruc,
                    direccion
                },
                'POST',
            )

            if(resp.status === 201) {
                Swal.fire({
                    title: 'Cliente creado',
                    text: 'El cliente se ha creado correctamente',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if(result.isConfirmed){
                        window.location.href = '/clients';
                    }
                })
            }
            
        } catch (error) {
            console.log(error);
        }   
    }
}

export const editClient = (id, nombres, apellidos, ruc, email, direccion, telefono) => {
    return async () => {
        try {
            const resp = await fetchConToken(
                `cliente/${id}`,
                {
                    nombres,
                    apellidos,
                    telefono,
                    email,
                    ruc,
                    direccion
                },
                'PUT',
            )

            if(resp.status === 200) {
                Swal.fire({
                    title: 'Cliente creado',
                    text: 'El cliente se ha editado correctamente',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if(result.isConfirmed){
                        window.location.href = '/clients';
                    }
                })
            }
            
        } catch (error) {
            console.log(error);
        }   
    }
}

export const getOneClient = (id) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken(`cliente/${id}`)
            const data = await resp.json();

            if(resp.status === 200) {
                dispatch(setOneClient(data.data));
                dispatch(setIsLoading(false));
            }
            
        } catch (error) {
            console.log(error);
        }   
    }
}

export const deleteClient = (id) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken(
                `cliente/${id}`,
                {},
                'DELETE',
            )

            if(resp.status === 200) {
                Swal.fire({
                    title: 'Cliente eliminado',
                    text: 'El cliente se ha eliminado correctamente',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if(result.isConfirmed){
                        dispatch(getAllClients());
                    }
                })
            }
            
        } catch (error) {
            console.log(error);
        }   
    }
}