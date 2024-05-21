import React,{useState} from "react"
import './signup.css'
function Signup() {
  const[isShow, setShow] = useState(false);
  const[isShowConfirmPass, setShowConfirmPass] = useState(false);

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
    <div className="password">
      <input type={isShow?"text":"password"} className='passwordinput' placeholder="Create a password" />
      {isShow
      ?
      <i class="fa-regular fa-eye-slash" onClick={()=>setShow(false)}></i>
      :
      <i className="fa-regular fa-eye" onClick={()=>setShow(true)}></i>
      }
    </div>
    {/* confirm password  */}
    <div className="Labeldiv">
    <label htmlFor="">Confirm password*</label>
    </div>
    <div className="password">
      <input type={isShowConfirmPass?"text":"password"} className='passwordinput' placeholder="Password" />
      {isShowConfirmPass
      ?
      <i class="fa-regular fa-eye-slash" onClick={()=>setShowConfirmPass(false)}></i>
      :
      <i className="fa-regular fa-eye" onClick={()=>setShowConfirmPass(true)}></i>
    }
      </div>
    
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