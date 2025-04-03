import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import Authentication from './pages/Authentication.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
      <Authentication></Authentication>
    </>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
