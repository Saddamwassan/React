import React from "react"
import image from '../assets/signup.jpg'
function Signup() {
  return (
    <div className="SignUpDiv">
      <div className="signupinner">
      <img className="image" src={image} alt="signupImage" width = "400px"/>
        {/* form  */}
        <form action="#" className="signupform">
          <h1>Signup for Your Account</h1>
          <p className="welcometxt">Welcome to techVision, Signup to explore more.</p>
          <button className="signUpWithGoogle"> <i className="fa-brands fa-google"></i> Signup with google</button>
          {/*  hrdiv  */}
          <div className="hrdiv">
           <div className="hr"></div>
           <span className="hrtext" >OR</span>
          </div>
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
          <button className="signupbtn"> Sign up</button>
          <div className="logindiv">
            <span>Already have an account?</span>
            <a href="./login.jsx">Login</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup