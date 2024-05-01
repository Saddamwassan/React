import React from 'react'
import '../styles/bookingform.css'
import Nav from './nav' 
function BookingForm() {
  return (
    <div className="bookingform">
      <Nav />
      <div className="bookingdiv">
      <h3>Book your meeting</h3>
      {/* title  */}
      <div className='bookingtitle'>
      <label htmlFor="title" >Title</label>
      <input type="text" placeholder='title' />
      </div>
      {/* url  */}
      <div className="bookingUrl">
      <label htmlFor="url">Url</label>
      <input type="text" placeholder='url'/>
      </div>
      {/* description  */}
      <div className='bookingdescription'                                                                           >
      <label htmlFor="description">Description</label>
      <input type="text" placeholder='description' />
      </div>

      </div>
    </div>
  )
}

export default BookingForm