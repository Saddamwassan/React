import React ,{useState}from 'react'
import "../styles/card.css"
function Card({data}) {
  const[isOn,setStatus] = useState(false);
  return (
    <div className='card'>
      <h3>{`${data.duration} ${data.title}`}</h3>
      <div className="linkdiv">
        <p>link</p>
        <a href="">click link</a>
      </div>
      {/* booking status  */}
      <div className="status">
          <input className="slider" type="checkbox" onClick = {()=>setStatus(isBooking=>!isBooking)}/>
          <span>Booking is {isOn?"ON":"OFF"}</span>
      </div>
      <div className="description">
        <p>{data.description}</p>
      </div>
      <div className="share">
        <h4>Share:</h4>
          <a href="gmail"><i className="fa-regular fa-envelope"></i></a>
          <a href="linkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="whatsapp"><i className="fa-brands fa-whatsapp"></i></a>
          <a href="x"><i className="fa-brands fa-x-twitter"></i></a>
      </div>
      <div className="editdiv">
        <a href="delete" className="delete">delete</a>
        <a href="edit" className="edit">edit</a>
      </div>
    </div>
  )
}

export default Card