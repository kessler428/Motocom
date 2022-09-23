import { fetchConToken } from "../../../helpers/fecth";
import { setIsLoading } from "../ui/uiSlices";
import { setListReports } from "./reportSlices";

export const generateReports = (id, startDate, finalDate) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken(
                `reportes/almacen/${id}?fechaInicio=${startDate}&fechaFin=${finalDate}`
            );
            const body = await resp.json();
    
            if (resp.status === 200) {
                dispatch(setListReports(body));
                dispatch(setIsLoading(false))
            }
        } catch (error) {
            console.log(error);
        }
    };
}
;