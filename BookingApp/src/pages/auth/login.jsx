import React,{useState} from 'react'
import { Link } from 'react-router-dom'
function Login() {
  const[isShow, setShow] = useState(false);

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
          <div className="password">
      <input type={isShow?"text":"password"} className='passwordinput' placeholder="Enter password" />
      {isShow
      ?
      <i class="fa-regular fa-eye-slash" onClick={()=>setShow(false)}></i>
      :
      <i className="fa-regular fa-eye" onClick={()=>setShow(true)}></i>
      }
    </div>
          <button className="signupbtn"> Log in</button>
          {/*  hrdiv  */}
    <div className="hrdiv">
     <div className="hr"></div>
     <span className="hrtext" >OR</span>
    </div>
    {/* signup with google  */}
    <button className="signUpWithGoogle"> <i className="fa-brands fa-google"></i> <span> Log in with google</span></button>
    <Link to="dashboard">Dashboard</Link>
     </form>
  )
}
export default Login