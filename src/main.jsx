import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';

import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ThemeProvider from './providers/ThemeProvider';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <HelmetProvider>
        {/* <ThemeProvider> */}
          <QueryClientProvider client={queryClient}>
            <div className='max-w-7xl mx-auto'>
              <RouterProvider router={router} />
            </div>
          </QueryClientProvider>
        {/* </ThemeProvider> */}
      </HelmetProvider>
    </AuthProvider>

  </React.StrictMode>,
)
