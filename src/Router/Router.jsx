import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home/Home';
import OurMenu from '../Pages/OurMenu/OurMenu';
import Shop from '../Pages/Shop/Shop';
import Login from '../Pages/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ourMenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/ourShop/:category",
        element: <Shop></Shop>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ],
  },
]);

export default router;