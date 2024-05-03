import React from 'react'
import "../styles/schedule.css"
import { Link } from 'react-router-dom'
function Schedule() {
  return (
    <tr className='schedules'>
      {/* value  */}
    <td>
    <p className='day'>Monday</p>
    </td>
    <td>
    <p className='time'>15 mins</p>
    </td>
    <td>
    <p className='meetingType'>Business meeting</p>
    </td>
    <td>
    <p className='meetwith'>Ali Bhai</p>
    </td>
    <td className='statuscontainer'>
    <p className='status'>scheduled</p>
    <Link>
    <p className='cancel'>cancel</p>
    </Link>
    <Link>
    <p className='reschedule'>Reschedule</p>
    </Link>
    </td>
    </tr>
  )
}

export default Schedule