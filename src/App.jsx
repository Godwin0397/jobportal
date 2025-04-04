import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import HomeNav from './wrappers/HomeNav'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import DashboardNav, { loader as userDataLoader } from './wrappers/DashboardNav';
import  { loader as jobsLoader } from './components/Jobs';
import Jobs from './components/Jobs';

const router = createBrowserRouter([ 
  {
    path: '/',
    element: <HomeNav/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: 'register',
        element: <Register/>,
      },
      {
        path: 'login',
        element: <Login/>,
      }
    ]
  },
  {
    path: 'dashboard',
    element: <DashboardNav/>,
    loader: userDataLoader,
    children: [
      {
        path: 'overview',
        element: <h1>Overview</h1>,
      },
      {
        path: 'joblisting',
        element: <Jobs/>,
        loader: jobsLoader, 
      },
      {
        path: 'application',
        element: <h1>Application</h1>,
      },
      {
        path: 'profile',
        element: <h1>Profile</h1>,
      }
    ]
  }
 ])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App