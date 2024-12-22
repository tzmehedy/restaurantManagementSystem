import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home/Home';
import OurMenu from '../Pages/OurMenu/OurMenu';
import Shop from '../Pages/Shop/Shop';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/register';
import Dashboard from '../Layout/Dashboard';
import Carts from '../Pages/Dashboard/Carts/Carts';
import Users from '../Pages/Dashboard/Admin/Users';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import AddItems from '../Pages/Dashboard/Admin/AddItems';
import ManageItems from '../Pages/Dashboard/Admin/ManageItems';
import UpdateItem from '../Pages/Dashboard/Admin/UpdateItem';

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
        element: <Shop></Shop>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "carts",
        element: <Carts></Carts>,
      },

      // Admin route
      {
        path: "users",
        element: (
          <AdminRoute>
            <Users></Users>
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "updateItems/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({params}) => fetch(`http://localhost:5000/menus/${params.id}`),
      },
    ],
  },
]);

export default router;