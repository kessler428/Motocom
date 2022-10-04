import Swal from "sweetalert2";
import { fetchConToken } from "../../../helpers/fecth";
import { setIsLoading } from "../ui/uiSlices";
import { setHistoryOfBills, setOneBill } from "./billsSlice";

export const createBill = (
  total,
  montoPagado,
  tipoFacturaId,
  usuarioId,
  tipoAlmacenId,
  descuento,
  subTotal,
  clienteId,
  detalles,
  tipoFact,
) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(
        "factura",
        {
          total,
          montoPagado,
          tipoFacturaId,
          usuarioId,
          tipoAlmacenId,
          clienteId,
          descuento,
          subTotal,
        },
        "POST"
      );

      const body = await resp.json();
      const facturaId = body.facturaId;

      if (body.success === true) {
        const fact = await fetchConToken(
          `factura/detalle`,
          {
            facturaId,
            tipoAlmacenId,
            detalles,
          },
          "POST"
        );

        const bodyFact = await fact.json();
        if (bodyFact.success === true) {
          dispatch(getOneTicket(facturaId, tipoFact))
        }
        else{
          dispatch(setIsLoading(false))
        }
      }else{
        dispatch(setIsLoading(false))
      }
    } catch (error) {
      console.log(error);
    }
  };
};


export const getHistoryOfBills = (id) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(`factura/historial?tipoAlmacenId=${id}`);
      const body = await resp.json();

      if (body.success === true) {
        dispatch(setHistoryOfBills(body.historial));
      }

      dispatch(setIsLoading(false));
    } catch (error) {
      console.log(error);
    }
  }
}

export const getOneBill = (facturaId) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(`factura/historial/${facturaId}`);
      const body = await resp.json();

      if (body.success === true) {
        dispatch(setOneBill(body.factura));
        window.location = 'detail_of_one_bill'
      }

      dispatch(setIsLoading(false));
    } catch (error) {
      console.log(error);
    }
  }
}

export const getOneTicket = (facturaId, tipoFact) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(`factura/historial/${facturaId}`);
      const body = await resp.json(); 

      if (body.success === true) {
        dispatch(setOneBill(body.factura));
        
        if(tipoFact === 1){
          window.location = 'baucher'
          dispatch(setIsLoading(false));
        }else if ( tipoFact === 2 ){
          window.location = 'ticket'
          dispatch(setIsLoading(false));
        }
      }

      dispatch(setIsLoading(false));
    } catch (error) {
      console.log(error);
    }
  }
}

export const deleteOneBill = (facturaId, id) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(`factura/${facturaId}`, {}, "DELETE");
      const body = await resp.json();

      if (body.success === true) {
        dispatch(getHistoryOfBills(id));
        dispatch(setIsLoading(false));
      } else {
        Swal.fire("Error", body.message, "error");
        dispatch(setIsLoading(false));
      }
    } catch (error) {
      console.log(error);
    }
  }
}
