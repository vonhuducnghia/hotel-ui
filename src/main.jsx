import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import Authentication from './pages/Authentication.jsx'
import Home from './pages/Home.jsx'
import Room from './pages/Room.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
      <Home></Home>
    </>
  },
  {
    path: "/room",
    element: 
    <>
      <Room></Room>
    </>
  },
  {
    path: "/auth",
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
