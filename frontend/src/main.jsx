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

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"Home/",
        element:<Home/>
      },
      {
        path:"Courses/",
        element:<Courses/>
      },
      {
        path:"TestSeries/",
        element:<TestSeries/>
      },
      {
        path:"CurrentAffairs/",
        element:<CurrentAffairs/>
      },
      {
        path:"Practice/",
        element:<Practice/>
      },
      {
        path:"Downloads/",
        element:<Downloads/>
      },
      {
        path:"AnswerWriting/",
        element:<AnswerWriting/>
      },
      {
        path:"OpenTest/",
        element:<OpenTest/>
      },
      {
        path:"login/",
        element:<Login/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
