import React from 'react'
import Nav from './nav'
import bookingData from "./mydata"
import Schedule from './schedule'


function Myschedules() {
  return (
    <>
    <Nav/>
    <div className='myschedule'>
      <h3>My Bookings</h3>
      {
        // bookingData.map((item)=><Schedule data={item}/>)
      }
    </div>
    </>
  )
}

export default Myschedules