import { fetchConToken } from "../../../helpers/fecth";
import { setListClients } from "./clientSlice";

export const getAllClients = () => {
    return (dispatch) => {
        try {
            const resp = fetchConToken('cliente')
            const data = resp.json();

            if(resp.status === 200) {
                dispatch(setListClients(data.data));
            }
            
        } catch (error) {
            console.log(error);
        }   
    }
}