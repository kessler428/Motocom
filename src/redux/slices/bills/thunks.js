import { fetchConToken } from "../../../helpers/fecth";

export const createBill = (total, montoPagado, tipoFacturaId, clienteId, usuarioId, tipoAlmacenId, descuento, subTotal, detalles) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken(
                'factura',
                {
                    total,
                    montoPagado,
                    tipoFacturaId,
                    clienteId,
                    descuento,
                    subTotal: total,
                    usuarioId,
                    tipoAlmacenId
                },
                "POST"
            );
    
            const body = await resp.json();
            const facturaId = body.facturaId;

            if(body.success === true) {
                const fact = await fetchConToken(
                    `factura/detalle`,
                    {
                        facturaId,
                        tipoAlmacenId,
                        detalles
                    },
                    "POST"
                );

                const bodyFact = await fact.json();
                console.log(bodyFact);
            }
            
        } catch (error) {
            console.log(error);
        }
    };
}