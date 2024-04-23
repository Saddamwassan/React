import React from 'react'
import "../styles/card.css"

function Card() {
  return (
    <div className='card'>
      <h3>Meet with me</h3>
      <div className="linkdiv">
        <p>link</p>
        <a href="">click link</a>
      </div>
      {/* booking status  */}
      <div className="status">
          <input type="checkbox" />
        <span>Booking is ON</span>
      </div>
      <div className="description">
        <p> Meet me for 20 mins at Saturday.</p>
      </div>
      <div className="share">
        <h4>Share:</h4>
        <a href="gmail"><i class="fa-regular fa-envelope"></i></a>
        <a href="linkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="whatsapp"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="x"><i class="fa-brands fa-x-twitter"></i></a>

      </div>
      <div className="editdiv">
        <a href="delete" className="delete">delete</a>
        <a href="edit" className="edit">edit</a>
      </div>
    </div>
  )
}

export default Card