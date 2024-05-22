import React from 'react'
import Nav from '../../components/dashboard/nav'
import "./schedule.css"
import Footer from '../../components/dashboard/Footer';
import { Link } from 'react-router-dom';
import data from '../../components/mydata';
import Swal from 'sweetalert2';
import { COLOR } from 'rsuite/esm/utils/constants';
function Myschedules(){
  const alert = ()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You want to cancel this meeting!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your card has been deleted.",
          icon: "success"
        });
      }
    });
  }
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
                  <td className='meetingtype'>{item.title}</td>
                  <td className='with'>{item.with}</td>
                  <td className='status'><div className='statusbtn' style={{backgroundColor:item.status?'green':'#DC3545'}}>{item.status?"Scheduled":"Cancel"}</div></td>
                  <td className='action'>
                    <Link to='#' className='actioncancel' onClick={alert}>Cancel</Link>
                    <Link to='/editpage' className='actionreschedule'>Reschedule</Link>
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