import React from "react"
import './styles/App.css'
import Auth from "./pages/auth/Auth"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Myschedules from "./pages/myschedules/Myschedules"
import Profile from "./pages/profile/Profile"
import Dashboard from "./components/dashboard/dashboard"
import BookingForm from "./pages/booking/BookingForm"
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
    },
    {
      path:'/bookingform',
      element:<BookingForm />
    }
  ])
  return(
    <div className="myApp">
      <RouterProvider router={router} />
    </div>
  )
}