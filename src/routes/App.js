import React from 'react';
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpinerLoading } from '../components/SpinnerLoading';
import { PrivateRoutes } from './PrivateRoutes';

const Login = lazy(() => import('../pages/Login'));

// Admin
const IndexAdmin = lazy(() => import('../pages/Admin/Index'));
const Inventory = lazy(() => import('../pages/Admin/Inventory/Inventory'))
const AddProduct = lazy(() => import('../pages/Admin/Inventory/AddProduct'))
const EditProduct = lazy(() => import('../pages/Admin/Inventory/EditProduct'))
const GenerateReport = lazy(() => import('../pages/Admin/Reports/GenerateReport'))
const Reports = lazy(() => import('../pages/Admin/Reports/Reports'))
const Credits = lazy(() => import('../pages/Admin/Credits/Credits'))
const ClosedCredits = lazy(() => import('../pages/Admin/Credits/ClosedCredits'))
const Exchange = lazy(() => import('../pages/Admin/Exchange/Exchange'))

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
          <Route path='index' element={
              <PrivateRoutes>
                <IndexAdmin/>
              </PrivateRoutes>
            }
          />
          <Route path='inventory' element={
            <PrivateRoutes>
              <Inventory/> 
            </PrivateRoutes>
          }/>
          <Route path='add_product' element={
            <PrivateRoutes>
              <AddProduct/>
            </PrivateRoutes>
          }/>
          <Route path='edit_product/:productId' element={
            <PrivateRoutes>
              <EditProduct/>
            </PrivateRoutes>
          }/>
          <Route path='generate_report' element={
            <PrivateRoutes>
              <GenerateReport/>
            </PrivateRoutes>
          }/>
          <Route path='generate_report/report' element={
            <PrivateRoutes>
              <Reports/> 
            </PrivateRoutes>
          }/>
          <Route path='credits' element={
            <PrivateRoutes>
              <Credits/>
            </PrivateRoutes> 
          }/>
          <Route path='closed_credits' element={
            <PrivateRoutes>
              <ClosedCredits/>
            </PrivateRoutes> 
          }/>
          <Route path='exchange' element={
            <PrivateRoutes>
              <Exchange/>
            </PrivateRoutes> 
          }/>

          {/* Level 1 */}
          <Route path='level1/index' element={
            <PrivateRoutes>
              <Level1Index/>
            </PrivateRoutes>
          }/>
          <Route path='level1/inventory' element={
            <PrivateRoutes>
              <InventoryLevel1/>
            </PrivateRoutes>
          }/>
          <Route path='level1/bills' element={
            <PrivateRoutes>
              <Level1Facturas/>
            </PrivateRoutes>
          }/>
          <Route path='level1/details_bills' element={
            <PrivateRoutes>
              <Level1DetallesFacturas/>
            </PrivateRoutes>
          }/>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
