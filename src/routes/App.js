import React from 'react';
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Login = lazy(() => import('../pages/Login'));
const IndexAdmin = lazy(() => import('../pages/Admin/Index'))

export const App = () => {
  return (
    <Suspense fallback={ <h2>Cargando...!!!</h2>}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Login/> } />
          <Route path='/index' element={ <IndexAdmin/> } />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
