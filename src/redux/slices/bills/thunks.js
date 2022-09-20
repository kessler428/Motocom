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
    } catch (error) {
      console.log(error);
    }
  }
}

export const getOneTicket = async (facturaId, tipoFact) => {
  const data = await fetchConToken(`factura/historial/${facturaId}`);
  const body = await data.json();

  if (body.success === true) {
    if (tipoFact === '1') {
      window.location = 'baucher'
    } else if (tipoFact === '2') {
      window.location = 'ticket'
    }
  }

  return body.factura;
}

export const deleteOneBill = (facturaId, id) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(`factura/${facturaId}`, {}, "DELETE");
      const body = await resp.json();

      if (body.success === true) {
        dispatch(getHistoryOfBills(id));
        dispatch(setIsLoading(false));
      }
    } catch (error) {
      console.log(error);
    }
  }
}
