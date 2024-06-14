import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'  
import axios from "axios";
import Swal from 'sweetalert2';
function Login() {
  const[isShow, setShow] = useState(false);
  const handleSubmit = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = {email,password}
    axios.post('http://localhost:8080/users/login', data)
        .then(res => {
            console.log(res);
            e.target.reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "you are logged in successfully",
              showConfirmButton: false,
              timer: 1500
            });
         
        })
        .catch(err => console.log(err));
  }

  return (
    <form action="#" method="POST" onSubmit={handleSubmit} className="signupform">
          <img src={logo} alt="logo" className='logologin' />
          <h1>Log in to Your Account</h1>
          <p className="welcometxt">Welcome back to techVision, Good to see you again!</p>
          {/* email  */}
          <div className="Labeldiv">
          <label htmlFor="">Email*</label>
          </div>
          <input type="text" placeholder="Enter your email" name='email'/>
          {/* password  */}
          <div className="Labeldiv">
          <label htmlFor="">Password*</label>
          </div>
          <div className="password">
      <input type={isShow?"text":"password"} className='passwordinput' placeholder="Enter password" name='password'/>
      {isShow
      ?
      <i class="fa-regular fa-eye-slash eyeicon" onClick={()=>setShow(false)}></i>
      :
      <i className="fa-regular fa-eye eyeicon" onClick={()=>setShow(true)}></i>
      }
    </div>
          <button className="signupbtn" value="submit" > Log in</button>
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