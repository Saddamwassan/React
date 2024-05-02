import React from 'react'
import Nav from './nav'
import bookingData from "./mydata"
import Schedule from './schedule'
import "../styles/schedule.css"



function Myschedules() {
  return (
    <>
    <Nav/>
    <div className='myschedule'>
      <h3>My Bookings</h3>
        {/* labels  */}
      <div className="labels">
            <span>Day</span>
            <span>Duration</span>
            <span>Meeting Type</span>
            <span>With</span>
            <span>status</span>
        </div>
      {
        // bookingData.map((item)=><Schedule data={item}/>)
        bookingData.map((item,index)=>
        <Schedule data={item} key={index}/>)
      }
    </div>
    </>
  )
}

export default Myschedules