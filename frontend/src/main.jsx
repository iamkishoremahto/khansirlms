
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
import ForgotPassword from './pages/ForgotPassword.jsx'
import Dashboard from './pages/Dashboard.jsx'
import DashboardOutlet from './pages/sub_component/DashboardOutlet.jsx'
import MyCourse from './pages/sub_component/MyCourse.jsx'
import MyTestSeries from './pages/sub_component/MyTestSeries.jsx'
import LiveClasses from './pages/sub_component/LiveClasses.jsx'
import MySubmission from './pages/sub_component/MySubmission.jsx'
import AskedDoubts from './pages/sub_component/AskedDoubts.jsx'
import Orders from './pages/sub_component/Orders.jsx'
import MyProfile from './pages/sub_component/MyProfile.jsx'
import AllCourses from './pages/AllCourses.jsx'
import AskDoubts from './pages/AskDoubts.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "courses/",
        element: <Courses />
      },
      {
        path: "test-series/",
        element: <TestSeries />
      },
      {
        path: "current-affairs/",
        element: <CurrentAffairs />
      },
      {
        path: "practice/",
        element: <Practice />
      },
      {
        path: "downloads/",
        element: <Downloads />
      },
      {
        path: "answer-writing/",
        element: <AnswerWriting />
      },
      {
        path: "open-test/",
        element: <OpenTest />
      },
      {
        path: "login/",
        element: <Login />
      },
      {
        path: "sign-up/",
        element: <Register />
      },
      {
        path: 'forgot-password/',
        element: <ForgotPassword />
      },
      {
        path:'dashboard/',
        element:<Dashboard/>,
        children:[
          {
            path: "",
            element: <DashboardOutlet />
          },
          {
            path: "my-course/",
            element: <MyCourse />
          },
          {
            path: "my-test-series/",
            element: <MyTestSeries />
          },
          {
            path: "live-classes/",
            element: <LiveClasses />
          },
          {
            path: "my-submission/",
            element: <MySubmission />
          },
          {
            path: "asked-doubts/",
            element: <AskedDoubts />
          },
          {
            path: "orders/",
            element: <Orders />
          },
          {
            path: "my-profile/",
            element: <MyProfile />,
            children: [
              {
                path: "",
                element: <BasicsDetail/>
              },
              //hhjj
              {
                path: "address/",
                element: <Address/>
              },
              {
                path: "educational-detail/",
                element: <EducationDetail/>
              }
            ]
          }
        ]

      },
      {
        path: "all-courses/",
        element: <AllCourses />
      },
      {
        path: "ask-doubts/",
        element: <AskDoubts />
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
