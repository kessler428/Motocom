import { fetchConToken } from "../../../helpers/fecth";

export const createBill = (total, montoPagado, tipoFacturaId, usuarioId, tipoAlmacenId, detalles) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken(
                'factura',
                {
                    total,
                    montoPagado,
                    tipoFacturaId,
                    clienteId: 4,
                    descuento: 0,
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

                console.log(fact);
            }
            
        } catch (error) {
            console.log(error);
        }
    };
}