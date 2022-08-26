import Swal from 'sweetalert2';
import { fetchConToken } from "../../../helpers/fecth";
import { setIsLoading } from '../ui/uiSlices';
import { setListInventory } from "./inventorySlices";

export const getAllInventory = () => {
    return async (dispatch) => {
        try {
            let resp = await fetchConToken('almacen');
            const body = await resp.json();
    
            if (resp.status === 200) {
                dispatch(setListInventory(body.Products));
                dispatch(setIsLoading(false))
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const getOneProducts = (id) => {
    return async (dispatch) => {
        try {
            let resp = await fetchConToken(`almacen/${id}`);
            const body = await resp.json();

            if (resp.status === 200) {
                dispatch(setListInventory(body.Products));
                dispatch(setIsLoading(false))
            }
        } catch (error) {
            console.log(error);
        }
    };
}

export const addProducts = (products) => { 
    return async (dispatch) => {
        try {
            const resp = await fetchConToken(
            'almacen',
                products,
            'POST'
            );
            
            const body = await resp.json();

            if (resp.status === 200) {
                Swal.fire(
                    'Producto agregado',
                    'El producto se ha agregado correctamente',
                    'success'
                );
                dispatch(setIsLoading(false))
            }
        } catch (error) {
            console.log(error);
        }
    }
}



export const deleteProductById = (id) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken(
                `almacen/${id}`,
                { 
                },
                "PATCH"
            );
    
            if (resp.status === 200) {
                Swal.fire('Exitó', 'Producto eliminado correctamente..!', 'success')
                dispatch(getAllInventory());
                dispatch(setIsLoading(false))
            }
        } catch (error) {
            console.log(error);
        }
    };
};