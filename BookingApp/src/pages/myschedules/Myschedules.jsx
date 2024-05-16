import React from 'react'
import Nav from '../../components/dashboard/nav'
// import bookingData from "./mydata"
import "./schedule.css"
import Footer from '../../components/dashboard/Footer';
import { Link } from 'react-router-dom';
import data from '../../components/mydata';
function Myschedules(){
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
            {
               data.map((item)=>
                <tr>
                  <td className='day'>{item.day}</td>
                  <td className=''>{item.duration} minutes</td>
                  <td className='meetingtype'>{item.type}</td>
                  <td className='with'>{item.with}</td>
                  <td className='status'><div className='statusbtn'>{item.status?"on":"off"}</div></td>
                  <td className='action'>
                    <Link to='cancel' className='actioncancel'>cancel</Link>
                    <Link to='reschedule' className='actionreschedule'>reschedule</Link>
                  </td>
                </tr>
              )
            }
            
          </tbody>
        </table>
    </div>
    <Footer />
    </>
  )
}

export default Myschedules