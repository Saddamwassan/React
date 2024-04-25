import React from 'react'
import Card from './Card'
// import "../styles/dashboard.css" 
import cardDetail from "./mydata"
function Dbody() {
  return (
    <div className='dbody'>
        <div className="text">
        <h2>Your Appointments</h2>
        </div>
        <div className="cards">
            <div className="addcard">
            <i className="fa-duotone fa-plus addcardicon"></i>
            </div>
       {
        cardDetail.map((item)=>
        <Card data={item}/>)
       }
       

        </div>
    </div>
  )
}
export default Dbody