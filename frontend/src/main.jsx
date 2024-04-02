import React from 'react'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Login from './pages/Login.jsx'
import './index.css';
import Courses from './pages/Courses.jsx'
import Home from './pages/Home.jsx'
import TestSeries from './pages/TestSeries.jsx'
import CurrentAffairs from './pages/CurrentAffairs.jsx'
import Practice from './pages/Practice.jsx'
import Downloads from './pages/Downloads.jsx'
import AnswerWriting from './pages/AnswerWriting.jsx'
import OpenTest from './pages/OpenTest.jsx'
import Register from './pages/Register.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"courses/",
        element:<Courses/>
      },
      {
        path:"test-series/",
        element:<TestSeries/>
      },
      {
        path:"current-affairs/",
        element:<CurrentAffairs/>
      },
      {
        path:"practice/",
        element:<Practice/>
      },
      {
        path:"downloads/",
        element:<Downloads/>
      },
      {
        path:"answer-writing/",
        element:<AnswerWriting/>
      },
      {
        path:"open-test/",
        element:<OpenTest/>
      },
      {
        path:"login/",
        element:<Login/>
      },
      {
        path:"sign-up/",
        element:<Register/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
