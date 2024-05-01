import React from 'react'
function Schedule(data) {
  return (
    <div className='schedules'>
        {/* labels  */}
        <div className="labels">
            <span>Day</span>
            <span>Duration</span>
            <span>Meeting Type</span>
            <span>With</span>
            <span>status</span>
        </div>
        {/* data  */}
        <h3>{data.title}</h3>
    </div>
  )
}

export default Schedule