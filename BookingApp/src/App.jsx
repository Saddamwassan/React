import React from "react"
import './styles/App.css'
import Auth from "./components/Auth"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Myschedules from "./components/Myschedules"
import Profile from "./components/Profile"
import Dashboard from "./components/dashboard"
export default function App(){
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Auth/>
    },
    {
      path:'/dashboard',
      element:<Dashboard/>
    },
    {
      path:'/myschedules',
      element:<Myschedules/>
    },
    {
      path:'/profile',
      element:<Profile/>
    }
  ])
  return(
    <div className="myApp">
      <RouterProvider router={router} />
    </div>
  )
}