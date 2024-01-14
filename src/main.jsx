import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Authprovider from './Authprovider/Authporvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    }
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authprovider><RouterProvider router={routes} />  </Authprovider>
    </QueryClientProvider>
  </React.StrictMode>,
)
