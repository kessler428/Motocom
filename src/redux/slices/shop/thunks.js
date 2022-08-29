import { fetchConToken } from "../../../helpers/fecth"
import { setIndex } from "./shopSlice";

export const getIndexInfo = (id) => async (dispatch) => {
    try {
        const resp = await fetchConToken(`usuario/?almacen=${id}`);
        const data = await resp.json();

        if(data.success === true) {
            dispatch(setIndex(data))
        }

    } catch (error) {
        console.log(error);
    }
}