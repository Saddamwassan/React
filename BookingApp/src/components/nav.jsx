import React from 'react'
import "../styles/dashboard.css"
import logo from "../assets/logo.jpg"
function Nav() {
  return (
    <div className='nav'>
      <div className="left">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="right">
        <a href="">Booking Cards</a>
        <a href="">My schedule</a>
        <a href="">Profile</a>
        <i className ="fa-solid fa-bars barslogo"></i>
      </div>
    </div>
  )
}

export default Nav