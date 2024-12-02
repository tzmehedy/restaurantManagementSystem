import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import Root from './Layout/Root'
import router from './Router/Router'
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <>
    <HelmetProvider>
      <RouterProvider router={router}>
        <Root></Root>
      </RouterProvider>
    </HelmetProvider>
  </>
);
