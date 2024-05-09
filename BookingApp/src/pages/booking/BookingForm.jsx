import './bookingform.css'
import Nav from '../../components/dashboard/nav'
// import Editor from '../Editor'

import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Button from '../../components/buttons/Button';
import Footer from '../../components/dashboard/Footer';

function BookingForm() {
 
  return (
    <>
      <Nav />
      <div className="bookingcontainer">
        <div className="bookingform">
          <h3>Book your meeting</h3>
          {/* title  */}
          <div className='row'>
            <label htmlFor="title" >Title:</label>
            <input type="text" placeholder='title' />
          </div>
          {/* url  */}
          <div className="row">
            <label htmlFor="url">URL:</label>
            <input type="text" placeholder='url' />
          </div>
          {/* editor  */}
          <div className='row'>
          <label htmlFor="">Description:</label>
            
            <CKEditor
              editor={ClassicEditor}
              data="<p>Hello World</p>"
             
              // onReady={editor => {
              //     console.log(editor)
              // }}
              // onChange={(event, editor) => {
              //     console.log(editor.getData())
              // }}

              onBlur={(event, editor) => { }}

              onFocus={(event, editor) => { }}
            />
          </div>
          {/* duration  */}
          <div className="row">
            <label htmlFor="duration">Duration:</label>
            <div>
              <input type="number" className='durationinput'/>
              <span>minutes</span>
            </div>
          </div>
          <div className="row">
          <p>When will you be available for this meeting?</p>
          </div>
          <div className="availibility">
            {/* weekly  */}
            <div>
              <input type="radio" name='date' value="weekly" />
              <span>Weekly</span>
              <p>You're available for weekly meeting.</p>
            </div>
            {/* specific date  */}
            <div>
              <input type="radio" name='date' value="specific date" />
              <span>Specific dates</span>
              <p>You're available for specific date.</p>
            </div>
          </div>
          <p className='weeklymsg'>Define your weekly availibility below.</p>
          <div className="rowdays">
            <div>
              <input type="checkbox" /><span>Sunday</span>
            </div>
            <div>
              <input type="checkbox" /><span>Monday</span>
            </div>
            <div>
              <input type="checkbox" /><span>Tuesday</span>
            </div>
            <div>
              <input type="checkbox" /><span>Wednesday</span>
            </div>
            <div>
              <input type="checkbox" /><span>Thursday</span>
            </div>
            <div>
              <input type="checkbox" /><span>Friday</span>
            </div>
            <div>
              <input type="checkbox" /><span>Saturday</span>
            </div>
          </div>
          <div className="unavailabledays">
            <div>
              <input type="checkbox" />
              <span>Add unavailable dates</span>
            </div>
            <p>Define specific dates to exclude from your weekly availibility.</p>
            <div className="btnrow">
              <Button type="Cancel" className="Cancel" />
              <Button type="Add booking" className="Add_booking" />
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default BookingForm