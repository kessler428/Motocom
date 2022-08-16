import React from 'react';
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpinerLoading } from '../components/SnpinnerLoading';

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

// Level 1
const Level1Index = lazy(() => import('../pages/shop1/Index'))
const InventoryLevel1 =lazy(()=> import('../pages/shop1/Inventario/Products'))

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
          <Route path='edit_product/:productId' element={ <EditProduct/> } />
          <Route path='generate_report' element={ <GenerateReport/> } />
          <Route path='generate_report/report' element={ <Reports/> } />
          <Route path='credits' element={ <Credits/> } />
          <Route path='closed_credits' element={ <ClosedCredits/> } />

          {/* Level 1 */}
          <Route path='level1/index' element={ <Level1Index/> } />
          <Route path='level1/inventory' element={<InventoryLevel1/>}/>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
