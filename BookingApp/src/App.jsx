import React from "react"
import Signup from "./components/signup"
import './styles/App.css'
import Login from "./components/login"
export default function App(){
  return(
    <div className="myApp">
      <Signup/>
      {/* <Login/> */}
    </div>
  )
}