import React from 'react';
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Login = lazy(() => import('../pages/Login'));
const IndexAdmin = lazy(() => import('../pages/Admin/Index'));
const Level1Index = lazy(() => import('../pages/shop1/Index'))
const Inventory = lazy(() => import('../pages/Admin/Inventory/Inventory'))
const AddProduct = lazy(() => import('../pages/Admin/Inventory/AddProduct'))
const GenerateReport = lazy(() => import('../pages/Admin/Reports/GenerateReport'))

export const App = () => {
  return (
    <Suspense fallback={ <h2>Cargando...!!!</h2>}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Login/> } />
          <Route path='index' element={ <IndexAdmin/> } />
          <Route path='inventory' element={ <Inventory/> } />
          <Route path='add_product' element={ <AddProduct/> } />
          <Route path='generate_report' element={ <GenerateReport/> } />
          <Route path='level1/index' element={ <Level1Index/> } />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
