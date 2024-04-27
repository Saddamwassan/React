import React from 'react'
import '../styles/bookingform.css'
function BookingForm() {
  return (
    <div className="bookingform">
      <div>BookingForm</div>
      {/* title  */}
      <div className='title'>
      <label htmlFor="title" className='title'>Title:</label>
      <input type="text" />
      </div>
      {/* description  */}
      <div className='description'                                                                           >
      <label htmlFor="description">Description</label>
      <input type="text" className='description' />
      </div>
    </div>
  )
}

export default BookingForm