import { fetchConToken } from "../../../helpers/fecth";
import { setClosedCreditsList, setListCredits } from "./creditsSlices";

export const getAllCredits = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken("abono?completado=false");
            const body = await resp.json();

            console.log(body)
    
            if (resp.status === 200) {
                dispatch(setListCredits(body.facturasAbonos));
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