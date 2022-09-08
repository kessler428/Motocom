import Swal from 'sweetalert2';
import { fetchConToken } from "../../../helpers/fecth";
import { setIsLoading } from '../ui/uiSlices';
import {
    setButtonState,
    setListInventory,
    setOneProduct,
    setTypeOfStock
} from "./inventorySlices";

export const getAllInventory = (id) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken(`almacen?tipoAlmacenId=${id}&stockValidos=1`);
            const body = await resp.json();
    
            if (resp.status === 200) {
                dispatch(setListInventory(body.almacenes));
                dispatch(setIsLoading(false));
            }
        } catch (error) {
            console.log(error);
        }
    };
}
;
export const getAllInventoryIndex = (id) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken(`almacen?tipoAlmacenId=${id}`);
            const body = await resp.json();
    
            if (resp.status === 200) {
                dispatch(setListInventory(body.almacenes));
                dispatch(setIsLoading(false));
            }
        } catch (error) {
            console.log(error);
        }
    };
}
;
export const getAllInventoryAdmin = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken(`almacen`);
            const body = await resp.json();
    
            if (resp.status === 200) {
                dispatch(setListInventory(body.almacenes));
                dispatch(setIsLoading(false));
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const getOneProduct = (id) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken(`almacen/${id}`);
            const body = await resp.json();

            if (body.success === true) {
                dispatch(setOneProduct(body.almacen));
                dispatch(setIsLoading(false));
                dispatch(setButtonState(true));
            }
        } catch (error) {
            console.log(error);
        }
    };
}

export const addProducts = (
    nombreArticulo,
    codigoUno,
    codigoDos,
    modelo,
    marca,
    precioVenta,
    precioCompra,
    notas,
    stock,
    tipoStockId
    ) => { 
    return async (dispatch) => {
        try {
            const resp = await fetchConToken(
            'almacen',
                {
                    nombreArticulo,
                    codigoUno,
                    codigoDos,
                    modelo,
                    marca,
                    precioVenta,
                    precioCompra,
                    precioRutaUno: 0,
                    precioRutaDos: 0,
                    notas,
                    stock,
                    tipoStockId
                },
            'POST'
            );

            const body = await resp.json();

            if (resp.status === 201) {
                Swal.fire({
                    title: 'Producto agregado',
                    text: 'El producto se ha agregado correctamente',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location = '/inventory';
                    }
                })
                dispatch(setIsLoading(false))
            }
            if (resp.status === 400) {
                Swal.fire( 'Error', body.message, 'error' );
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const editProducts = (
    productId,
    nombreArticulo,
    codigoUno,
    codigoDos,
    modelo,
    marca,
    precioVenta,
    precioCompra,
    notas,
    stock,
    tipoStockId
    ) => { 
    return async (dispatch) => {
        try {
            const resp = await fetchConToken(
            `almacen/${productId}`,
                {
                    nombreArticulo,
                    codigoUno,
                    codigoDos,
                    modelo,
                    marca,
                    precioVenta,
                    precioCompra,
                    precioRutaUno: 0,
                    precioRutaDos: 0,
                    notas,
                    stock,
                    tipoStockId
                },
            'PUT'
            );

            if (resp.status === 200) {
                Swal.fire({
                    title: 'Producto editado.!',
                    text: 'El producto se ha editado correctamente',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location = '/inventory';
                    }
                })
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
                {},
                "DELETE"
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

export const getCatalogStock = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken('catalogo/tipo-stock');
            const body = await resp.json();
    
            if (resp.status === 200) {
                dispatch(setTypeOfStock(body.data));
                dispatch(setIsLoading(false))
            }
        } catch (error) {
            console.log(error);
        }
    }
}