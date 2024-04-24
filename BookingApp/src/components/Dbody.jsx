import React from 'react'
import Card from './Card'
// import "../styles/dashboard.css" 
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
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
       

        </div>
    </div>
  )
}
export default Dbody