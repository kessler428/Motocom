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
const Clients = lazy(() => import('../pages/Admin/Clients/Clients'))
const AddClient = lazy(() => import('../pages/Admin/Clients/AddClient'))
const EditClient = lazy(() => import('../pages/Admin/Clients/EditClient'))
const Shop1 = lazy(() => import('../pages/Admin/shop/shop1/Shop1'))
const Shop1Inventory = lazy(() => import('../pages/Admin/shop/shop1/DetailsOfFact'))
const DetailsOneFact = lazy(() => import('../pages/Admin/shop/shop1/DetailOneFact'))
const Shop2 = lazy(() => import('../pages/Admin/shop/shop2/Shop2'))
const Shop3 = lazy(() => import('../pages/Admin/shop/shop3/Shop3'))
const Shop4 = lazy(() => import('../pages/Admin/shop/shop4/Shop4'))

// Level 1
const Level1Index = lazy(() => import('../pages/shop1/Index'))
const InventoryLevel1 =lazy(()=> import('../pages/shop1/Inventario/Products'))
const Level1Facturas = lazy(() => import('../pages/shop1/Facturar/Facturar'))
const DetallesFacturas = lazy(() => import('../pages/shop1/Facturar/DetallesFacturas'))
const DetailOneFact = lazy(() => import('../pages/shop1/Facturar/DetailOneFact'))
const Ticket = lazy(() => import('../pages/shop1/Facturar/Ticket'))
const Baucher = lazy(() => import('../pages/shop1/Facturar/Baucher'))

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
          <Route path='inventory/edit_product/:productId' element={
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
          <Route path='clients' element={
            <PrivateRoutes>
              <Clients/>
            </PrivateRoutes> 
          }/>
          <Route path='add_client' element={
            <PrivateRoutes>
              <AddClient />
            </PrivateRoutes> 
          }/>
          <Route path='clients/edit_client/:clientId' element={
            <PrivateRoutes>
              <EditClient />
            </PrivateRoutes> 
          }/>
          <Route path='shop_one' element={
            <PrivateRoutes>
              <Shop1 />
            </PrivateRoutes> 
          }/>
          <Route path='shop_one/inventory' element={
            <PrivateRoutes>
              <Shop1Inventory />
            </PrivateRoutes> 
          }/>
          <Route path='shop_one/detail_of_one_bill/:id' element={
            <PrivateRoutes>
              <DetailsOneFact />
            </PrivateRoutes> 
          }/>
          <Route path='shop_two' element={
            <PrivateRoutes>
              <Shop2 />
            </PrivateRoutes> 
          }/>
          <Route path='shop_three' element={
            <PrivateRoutes>
              <Shop3 />
            </PrivateRoutes> 
          }/>
          <Route path='shop_four' element={
            <PrivateRoutes>
              <Shop4 />
            </PrivateRoutes> 
          }/>

          {/* Level 1 */}
          <Route path='shop/index' element={
            <PrivateRoutes>
              <Level1Index/>
            </PrivateRoutes>
          }/>
          <Route path='shop/inventory' element={
            <PrivateRoutes>
              <InventoryLevel1/>
            </PrivateRoutes>
          }/>
          <Route path='bills' element={
            <PrivateRoutes>
              <Level1Facturas/>
            </PrivateRoutes>
          }/>
          <Route path='details_bills' element={
            <PrivateRoutes>
              <DetallesFacturas/>
            </PrivateRoutes>
          }/>
          <Route path='detail_of_one_bill' element={
            <PrivateRoutes>
              <DetailOneFact/>
            </PrivateRoutes>
          }/>
          <Route path='ticket' element={
            <PrivateRoutes>
              <Ticket/>
            </PrivateRoutes>
          }/>
          <Route path='baucher' element={
            <PrivateRoutes>
              <Baucher/>
            </PrivateRoutes>
          }/>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
