import React,{useState} from "react"
import './signup.css'
import logo from '../../assets/logo.png';
// import {createUser} from '../../Services/UserServices'
function Signup(){
  const[isShow, setShow] = useState(false);
  const[isShowConfirmPass, setShowConfirmPass] = useState(false);

  const submitData = (event)=>{
    event.preventDefault();
    console.log(event)
  }

  return (
    <form action="" method="POST" className="signupform" onSubmit={submitData}>
      <img src={logo} alt="logo" className='logologin' />
    <h1>Signup for Your Account</h1>
    <div className="namediv">
    {/* firstname  */}
    <div className="firstnamediv">
    <label htmlFor="">First name*</label>
    <input className="nameinput" type="text" placeholder="first name" name="firstname" />
    </div>
    {/* lastname  */}
    <div className="firstnamediv">
    <label htmlFor="" className="lastnamelabel">last name*</label>
    <input className="nameinput" type="text" placeholder="last name" name="lastname"/>
    </div>
    </div>
    {/* email  */}
    <div className="Labeldiv">
    <label htmlFor="">Email*</label>
    </div>
    <input type="text" placeholder="Enter your email" name="email"/>
    {/* password  */}
    <div className="Labeldiv">
    <label htmlFor="">Password*</label>
    </div>
    <div className="password">
      <input type={isShow?"text":"password"} className='passwordinput' placeholder="Create a password" name="password"/>
      {isShow
      ?
      <i class="fa-regular fa-eye-slash eyeicon" onClick={()=>setShow(false)}></i>
      :
      <i className="fa-regular fa-eye eyeicon" onClick={()=>setShow(true)}></i>
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
      <i class="fa-regular fa-eye-slash eyeicon" onClick={()=>setShowConfirmPass(false)}></i>
      :
      <i className="fa-regular fa-eye eyeicon" onClick={()=>setShowConfirmPass(true)}></i>
    }
      </div>
    
    <button className="signupbtn" onClick={""}> Sign up</button>
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