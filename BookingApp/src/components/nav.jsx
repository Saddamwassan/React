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
        <i className ="fa-solid fa-bars barslogo"></i>
      </div>
      {/* //  mobile menu  */}
    <div className="menu" onClick={()=>{setMenu(isShowMenu=>!isShowMenu)}}>
        <Link to="/dashboard">Booking Cards</Link>
        <Link to="/myschedules">My schedules</Link>
        <Link to="/profile">Profile</Link>
    </div>
    </div>
    
  )
}

export default Nav