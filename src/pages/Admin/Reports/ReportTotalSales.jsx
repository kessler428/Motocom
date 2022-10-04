import moment from 'moment';
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { SpinerLoading } from '../../../components/SpinnerLoading'
import DataTable from 'react-data-table-component'
import 'moment/locale/es';
import { ProductsModal } from '../../../components/admin/credits/creditsAdmin/ProductsModal';
import { useState } from 'react';

const ReportTotalSales = () => {
    const { isLoading } = useSelector((state) => state.ui);
    const { listReports } = useSelector((state) => state.reports)
    const { reporte } = listReports;

    const [modal, setModal] = useState(false);
    const [id, setId] = useState('')

    const viewProducts = (id) => {
        setModal(true);
        setId(id);
    }
    
    moment.locale('es');

    const columns = [
        {
          name: "No. Factura",
          selector: row => row.id
        },
        {
          name: "Cliente",
          selector: row => row.cliente
        },
        {
          name: "Tipo de venta",
          selector: row => row.tipoFactura
        },
        {
          name: "Subtotal",
          cell: row => <p>C${parseFloat(row.subTotal).toLocaleString('us-Us')}</p>
        },
        {
          name: "Descuento",
          cell: row => <p>{row.descuento}%</p>
        },
        {
          name: "Total",
          cell: row => <p>C${parseFloat(row.total).toLocaleString('us-Us')}</p>
        },
        {
            name: "Acciones",
            cell: row =>
            <button
                onClick={() => viewProducts(row.id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
            >
                Ver Factura
            </button>
        }
    ]
    
    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };
    

    return isLoading ? <SpinerLoading /> : (
        <>
            <div className="mx-auto w-11/12 py-8">
                <div className='w-full flex flex-row justify-between'>
                    <h1 className="text-3xl font-semibold">
                        Reporte de ventas
                    </h1>
                    <NavLink to='/generate_report' className="bg-blue-600 p-2 rounded-lg text-white font-bold">
                        Regresar
                    </NavLink>
                </div>
                <div>
                    <h3 className='text-xl my-6'>Tipo de reporte: {reporte}</h3>
                    <DataTable
                        columns={columns}
                        data={ listReports.facturas}
                        pagination
                        paginationComponentOptions={paginationComponentOptions}
                    />
                </div>
            </div>
            <ProductsModal id={id} modal={modal} setModal={setModal} />
        </>
    )
}

export default ReportTotalSales