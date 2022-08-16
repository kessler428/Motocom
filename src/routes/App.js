import React from 'react';
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpinerLoading } from '../components/SnpinnerLoading';

const Login = lazy(() => import('../pages/Login'));

// Admin
const IndexAdmin = lazy(() => import('../pages/Admin/Index'));
const Inventory = lazy(() => import('../pages/Admin/Inventory/Inventory'))
const AddProduct = lazy(() => import('../pages/Admin/Inventory/AddProduct'))
const GenerateReport = lazy(() => import('../pages/Admin/Reports/GenerateReport'))
const Credits = lazy(() => import('../pages/Admin/Credits/Credits'))

// Level 1
const Level1Index = lazy(() => import('../pages/shop1/Index'))
const InventoryLevel1 =lazy(()=> import('../pages/shop1/Inventario/Products'))
const Level1Facturas = lazy(() => import('../pages/shop1/Facturar/Facturar'))
const Level1DetallesFacturas = lazy(() => import('../pages/shop1/Facturar/DetallesFacturas'))

export const App = () => {
  return (
    <Suspense fallback={ <SpinerLoading /> }>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Login/> } />

          {/* Admin */}
          <Route path='index' element={ <IndexAdmin/> } />
          <Route path='inventory' element={ <Inventory/> } />
          <Route path='add_product' element={ <AddProduct/> } />
          <Route path='generate_report' element={ <GenerateReport/> } />
          <Route path='credits' element={ <Credits/> } />

          {/* Level 1 */}
          <Route path='level1/index' element={ <Level1Index/> } />
          <Route path='level1/inventory' element={<InventoryLevel1/>}/>
          <Route path='level1/bills' element={<Level1Facturas/>}/>
          <Route path='level1/details_bills' element={<Level1DetallesFacturas/>}/>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
