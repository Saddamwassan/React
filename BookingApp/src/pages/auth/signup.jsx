import React from "react"
import './signup.css'
function Signup() {
  return (
    <form action="#" className="signupform">
    <h1>Signup for Your Account</h1>
    <p className="welcometxt">Welcome to techVision, Signup to explore more.</p>    
    <div className="namediv">
    {/* firstname  */}
    <div className="firstnamediv">
    <label htmlFor="">First name*</label>
    <input className="nameinput" type="text" placeholder="first name" />
    </div>
    {/* lastname  */}
    <div className="firstnamediv">
    <label htmlFor="" className="lastnamelabel">last name*</label>
    <input className="nameinput" type="text" placeholder="last name" />
    </div>
    </div>
    {/* email  */}
    <div className="Labeldiv">
    <label htmlFor="">Email*</label>
    </div>
    <input type="text" placeholder="Enter your email" />
    {/* password  */}
    <div className="Labeldiv">
    <label htmlFor="">Password*</label>
    </div>
    <input type="text" placeholder="Create your password" />
    {/* confirm password  */}
    <div className="Labeldiv">
    <label htmlFor="">Confirm password*</label>
    </div>
    <input type="text" placeholder="re-enter password" />
    <button className="signupbtn"> Sign up</button>
    {/*  hrdiv  */}
    <div className="hrdiv">
     <div className="hr"></div>
     <span className="hrtext" >OR</span>
    </div>
    {/* signup with google  */}
    <button className="signUpWithGoogle"> <i className="fa-brands fa-google"></i> <span> Signup with google</span></button>

  </form>
  )
}

export default Signup