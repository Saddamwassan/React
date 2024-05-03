import React from 'react'
import '../styles/bookingform.css'
import Nav from './nav' 
import Editor from './Editor'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from './buttons/Button';
function BookingForm() {
  return (
    <>
    <Nav />
    <div className="bookingdiv">
      <div className="bookingform">
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
      <textarea name="description" id="" cols="30" rows="10"></textarea>
      </div>
      {/* editor  */}
      {/* <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                /> */}
                {/* add booking button  */}
                <div className="button">
                  <Button type="Cancel" className="Cancel"/>
                  <Button type="Add booking" className="Add_booking"/>
                </div>
      {/* duration  */}
      <div className="duration">
        <label htmlFor="duration">Duration</label>
        <div>
        <input type="number" />
        <span>minutes</span>
        </div>
      </div>
      <p className='question'>When will you be available for this meeting?</p>
      <div className="availibility">
        {/* weekly  */}
        <div>
        <input type="radio" name='date' value="weekly"/>
        <p>you are available for weekly meeting.</p>
        </div>
        {/* specific date  */}
        <div>
        <input type="radio" name='date' value="specific date"/>
        <p>you are available for specific date.</p>
        </div>
      </div>
        <p className='weeklymsg'>Define your weekly availibility below.</p>
      <div className="days">
      <div className="sunday">
        <input type="checkbox" /><span>Sunday</span>
      </div>
      <div className="monday">
        <input type="checkbox" /><span>Monday</span>
      </div>
      <div className="Tuesday">
        <input type="checkbox" /><span>Tuesday</span>
      </div>
      <div className="Wednesday">
        <input type="checkbox" /><span>Wednesday</span>
      </div>
      <div className="Thursday">
        <input type="checkbox" /><span>Thursday</span>
      </div>
      <div className="Friday">
        <input type="checkbox" /><span>Friday</span>
      </div>
      <div className="Saturday">
        <input type="checkbox" /><span>Saturday</span>
      </div>
      </div>
      <div className="unavailabledays">
        <div>
        <input type="checkbox" />
        <span>Add unavailable dates</span>
        </div>
        <p>Define specific dates to exclude from your weekly availibility.</p>
        <div className="button">
                  <Button type="Cancel" className="Cancel"/>
                  <Button type="Add booking" className="Add_booking"/>
                </div>
      </div>
      
      </div>
    </div>
    </>
  )
}

export default BookingForm