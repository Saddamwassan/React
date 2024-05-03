import React from 'react'
import Card from './Card'
// import "../styles/dashboard.css" 
import cardDetail from "./mydata"
import { Link } from 'react-router-dom'
function Dbody() {
  return (
    <div className='dbody'>
        <div className="text">
        <h2>Your Appointments</h2>
        </div>
        <div className="cards">
        <Link to="../bookingform" style={{ textDecoration: 'none' }}>
            <div className="addcard">
            <i className="fa-duotone fa-plus addcardicon"></i>
            </div>
        </Link>
       {
        cardDetail.map((item,index)=>
        <Card data={item} key={index}/>)
       }
        </div>
    </div>
  )
}
export default Dbody