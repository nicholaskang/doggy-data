import React from 'react';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage/>}>
      </Route>
    </Route>
  )
);
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
