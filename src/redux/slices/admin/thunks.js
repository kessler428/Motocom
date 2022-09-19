import { fetchConToken } from "../../../helpers/fecth";
import { setIndex } from "./adminSlice";

export const getInfoIndex = () => async (dispatch) => {
    try {
        const resp = await fetchConToken('administrador');
        const body = await resp.json();
        
        
        if(resp.status === 200){
            dispatch(setIndex(body));
        }

    } catch (error) {
        console.log(error);
    }
}