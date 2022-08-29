import { fetchConToken } from "../../../helpers/fecth";
import { setListClients } from "./clientSlice";

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