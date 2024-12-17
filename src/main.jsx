import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import Root from './Layout/Root'
import router from './Router/Router'
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from './Provider/AuthProvider'
import { ToastContainer } from "react-toastify";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router}>
            <Root></Root>
          </RouterProvider>
          <ToastContainer />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </>
);
