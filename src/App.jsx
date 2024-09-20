import React from 'react';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import Dogs from './pages/Dogs';
import Contact from './pages/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage/>} />
      <Route path='/dogs' element={<Dogs/>} />
      <Route path='/contact' element={<Contact/>} />
    </Route>
  )
);
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
