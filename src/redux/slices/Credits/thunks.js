import { fetchConToken } from "../../../helpers/fecth";
import { setClosedCreditsList, setListCredits } from "./creditsSlices";

export const getAllCredits = () => {
    return async (dispatch) => {
        try {
            let resp = await fetchConToken("abonos");
            const body = await resp.json();
    
            if (resp.status === 200) {
                dispatch(setListCredits(body.deudas));
            }
        } catch (error) {
            console.log(error);
        }
    };
}
;
export const getAllClosedCredits = () => {
    return async (dispatch) => {
        try {
            let resp = await fetchConToken("abonos/cancelados");
            const body = await resp.json();
    
            if (resp.status === 200) {
                dispatch(setClosedCreditsList(body.creditos));
            }
        } catch (error) {
            console.log(error);
        }
    };
};