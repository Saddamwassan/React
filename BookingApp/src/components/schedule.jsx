import React from 'react'
import "../styles/schedule.css"
function Schedule({data}) {
  return (
    <div className='schedules'>
      {/* value  */}
    <p>{data.day}</p>
    <p>{data.duration}</p>
    <p>{data.type}</p>
    <p>{data.with}</p>
    <p>{data.status}</p>
    </div>
  )
}

export default Schedule