import React from 'react'
import Nav from '../../components/dashboard/nav'
// import bookingData from "./mydata"
import "./schedule.css"
import Footer from '../../components/dashboard/Footer';
import { Link } from 'react-router-dom';
function Myschedules() {
  return (
    <>
    <Nav/>
    <div className='myschedule'>
      <h3>My Bookings</h3>
        {/* labels  */}
        <table className='tablerow'>
          <thead>
          <tr>
            <th>Day</th>
            <th>Duration</th>
            <th>Meeting Type</th>
            <th>With</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td className='day'>Day</td>
              <td className=''>Duration</td>
              <td className='meetingtype'>Meeting Type</td>
              <td className='with'>With</td>
              <td className='status'><button className='statusbtn'>scheduled</button></td>
              <td className='action'>
                <Link to='cancel' className='actioncancel'>cancel</Link>
                <Link to='reschedule' className='actionreschedule'>reschedule</Link>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    <Footer />
    </>
  )
}

export default Myschedules