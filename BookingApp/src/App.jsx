import React from "react"
import Signup from "./components/signup"
import './styles/App.css'
import Login from "./components/login"
import Auth from "./components/Auth"
export default function App(){
  return(
    <div className="myApp">
      <Auth/>
    </div>
  )
}