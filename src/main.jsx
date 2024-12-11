import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import Root from './Layout/Root'
import router from './Router/Router'
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from './Provider/AuthProvider'

createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router}>
          <Root></Root>
        </RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </>
);
