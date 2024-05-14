import React, { useState } from 'react'
import "./dashboard.css"
import logo from "../../assets/logo.jpg"
import { Link } from 'react-router-dom'
function Nav() {
  const [isSidebar, setSidebar] = useState(false);
  return (
    <div className='nav'>
      <div className="left">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="right">
        <Link to="/dashboard">Booking Cards</Link>
        <Link to="/myschedules">My schedules</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/logout"><i class="fa-solid fa-right-from-bracket"></i></Link>

        <i className="fa-solid fa-bars barslogo" onClick={() => { setSidebar(isShowSidebar => !isShowSidebar) }}></i>
      </div>
      {/* //  mobile Sidebar  */}
      {
        isSidebar
          ?
            <ul className='sidebar'>
                <Link to="/dashboard">Booking Cards</Link>
              <hr />
                <Link to="/myschedules">My schedules</Link>
              <hr />
                <Link to="/profile">Profile</Link>
              <hr />
                <Link to="/logout">Logout</Link>
            </ul>
          :
          null
      }
    </div>

  )
}

export default Nav