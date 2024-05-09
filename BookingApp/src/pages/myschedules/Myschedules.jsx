import React from 'react'
import Nav from '../../components/dashboard/nav'
// import bookingData from "./mydata"
import Schedule from './schedule'
import "./schedule.css"
import Footer from '../../components/dashboard/Footer';




function Myschedules() {
  return (
    <>
    <Nav/>
    <div className='myschedule'>
      <h3>My Bookings</h3>
        {/* labels  */}
        <table className='tablerow'>
          <tr>
            <td>
            <span>Day</span>
            </td>
            <td>
            <span>Duration</span>
            </td>
            <td>
            <span>Meeting Type</span>
            </td>
            <td>
            <span>With</span>
            </td>
            <td>
            <span>status</span>
            </td>
          </tr>
          {/* schedules  */}
              <Schedule />
        
        </table>
    </div>
    <Footer />
    </>
  )
}

export default Myschedules