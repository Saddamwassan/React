import React from 'react'
import '../styles/bookingform.css'
import Nav from './nav' 
function BookingForm() {
  return (
    <div className="bookingform">
      <Nav />
      <div>BookingForm</div>
      {/* title  */}
      <div className='title'>
      <label htmlFor="title" >Title</label>
      <input type="text" />
      </div>
      {/* url  */}
      <div className="url">
      <label htmlFor="Url">URL</label>
      <input type="text" />
      </div>
      {/* description  */}
      <div className='description'                                                                           >
      <label htmlFor="description">Description</label>
      <input type="text" />
      </div>
    </div>
  )
}

export default BookingForm