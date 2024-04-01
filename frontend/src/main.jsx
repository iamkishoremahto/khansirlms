import React from 'react'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Login from './pages/Login.jsx'
import './index.css';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"login/",
        element:<Login/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
