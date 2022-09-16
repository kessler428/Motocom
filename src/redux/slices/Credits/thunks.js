import Swal from "sweetalert2";
import { fetchConToken } from "../../../helpers/fecth";
import { setClosedCreditsList, setListCredits } from "./creditsSlices";

export const getAllCredits = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken("abono?completado=false");
            const body = await resp.json();
    
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

export const createCredit = (facturaId, metodoPago, concepto, montoAbonado) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken("abono",{
                facturaId,
                metodoPago,
                concepto,
                montoAbonado
            }, "POST");

            const body = await resp.json();
    
            if (body.success === true) {
                Swal.fire("Exito", body.msg, "success");
                dispatch(getAllCredits());
            }
        } catch (error) {
            console.log(error);
        }
    };
}