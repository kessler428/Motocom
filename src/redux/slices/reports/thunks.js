import { fetchConToken } from "../../../helpers/fecth";
import { setIsLoading } from "../ui/uiSlices";
import { setListReports } from "./reportSlices";

export const generateReports = (startDate, finalDate, typeOfReport) => {
    return async (dispatch) => {
        try {
            let resp = await fetchConToken(
                `reportes/${typeOfReport}/${startDate}/${finalDate}`
            );
            const body = await resp.json();
    
            if (resp.status === 200) {
                dispatch(setListReports(body.data));
                dispatch(setIsLoading(false))
            }
        } catch (error) {
            console.log(error);
        }
    };
}
;