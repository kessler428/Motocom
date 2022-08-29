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
            let resp = await fetchConToken("abono?completado=true");
            const body = await resp.json();
    
            if (resp.status === 200) {
                dispatch(setClosedCreditsList(body.facturasAbonos));
            }
        } catch (error) {
            console.log(error);
        }
    };
};