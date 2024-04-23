import React from 'react'
function Login() {
  return (
    <form action="#" className="signupform">
          <h1>Log in to Your Account</h1>
          <p className="welcometxt">Welcome back to techVision, Good to see you again!</p>
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
          <button className="signupbtn"> Log in</button>
          {/*  hrdiv  */}
    <div className="hrdiv">
     <div className="hr"></div>
     <span className="hrtext" >OR</span>
    </div>
    {/* signup with google  */}
    <button className="signUpWithGoogle"> <i className="fa-brands fa-google"></i> <span> Log in with google</span></button>
     </form>
  )
}
export default Login