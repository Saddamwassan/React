import React from 'react'
function Login() {
  return (
    <form action="#" className="signupform">
          <h1>Log in to Your Account</h1>
          <p className="welcometxt">Welcome back to techVision, Good to see you again!</p>
          <button className="signUpWithGoogle"> <i className="fa-brands fa-google"></i> <span> Log in with google</span></button>
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
          {/* <div className="logindiv">
            <span>Don't have an account?</span>
            <a href="./login.jsx">Sign up</a>
          </div> */}
        </form>
  )
}

export default Login