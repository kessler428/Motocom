import { fetchConToken } from "../../../helpers/fecth";
import { setListInventory } from "./inventorySlices";

export const getAllInventory = () => {
    return async (dispatch) => {
        try {
            let resp = await fetchConToken("almacen");
            const body = await resp.json();
    
            if (resp.status === 200) {
            dispatch(setListInventory(body.Products));
            }
        } catch (error) {
            console.log(error);
        }
    };
};