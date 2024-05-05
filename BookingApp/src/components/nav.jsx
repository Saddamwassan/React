import React,{useState} from 'react'
import "../styles/dashboard.css"
import logo from "../assets/logo.jpg"
import { Link } from 'react-router-dom'
function Nav() {
  const[isMenu,setMenu] = useState(false);
  return (
    <div className='nav'>
      <div className="left">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="right">
        <Link to="/dashboard">Booking Cards</Link>
        <Link to="/myschedules">My schedules</Link>
        <Link to="/profile">Profile</Link>
        <i className ="fa-solid fa-bars barslogo" onClick={()=>{setMenu(isShowMenu=>!isShowMenu)}}></i>
      </div>
      {/* //  mobile menu  */}
      {
        isMenu
        ?
        <div className="menu" >
          <div className="close">
            <span>
              Sidebar
            </span>
            <i className="fa fa-xmark cross" onClick={()=>{isMenu && setMenu(isShowMenu=>!isShowMenu)}}></i>
          </div>
        <Link to="/dashboard">Booking Cards</Link>
        <Link to="/myschedules">My schedules</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Logout</Link>

    </div>
    :
    null
      }
    
    </div>
    
  )
}

export default Nav