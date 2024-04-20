import React from 'react'

function Login() {
  return (
    <div className='logindiv'>
      <div className="loginInner">
        <form action="#">
          {/* email  */}
          <label htmlFor="">Email*</label>
          <input type="text" placeholder="Enter your email" />
          {/* password  */}
          <label htmlFor="">Password*</label>
          {/* </> */}
          <button className="loginbtn"> log in</button>
          <div className="signupdiv">
            <span>Don't have an account?</span>
            <a href="./signup.jsx">signup</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login