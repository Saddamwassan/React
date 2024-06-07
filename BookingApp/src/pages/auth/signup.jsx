import React,{useState} from "react"
import './signup.css'
import logo from '../../assets/logo.png';
import axios from "axios";
import Swal from "sweetalert2";
function Signup(){
  
  const[isShow, setShow] = useState(false);
  const[isShowConfirmPass, setShowConfirmPass] = useState(false);

  // form validation 
  const initialValues = {firstname :"", lastname : "", email : "", password : "", confirm_password : ""}
  const [formValues, setFormValues] = useState(initialValues);
  const handleChanges = (e)=>{
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value});
    console.log(formValues);
  }
  const submitData = (event)=>{
    event.preventDefault();
    const firstname = event.target.firstname.value;
    const lastname = event.target.lastname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const data = {firstname, lastname, email, password}
    axios.post('http://localhost:8000/users/create',data)
    .then(res => res,
      event.target.reset(),
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You are registered! Please login",
        showConfirmButton: false,
        timer: 1500
      })
    )
    .catch(err => console.log(err));
  }
  // console.log(error)

  return (
    <form action="" method="POST" className="signupform" onSubmit={submitData}>
      <img src={logo} alt="logo" className='logologin' />
    <h1>Signup for Your Account</h1>
    <div className="namediv">
    {/* firstname  */}
    <div className="firstnamediv">
    <label htmlFor="">First name*</label>
    <input className="nameinput" type="text" placeholder="first name" name="firstname" value ={formValues.firstname} onChange={handleChanges}/>
    </div>
    {/* lastname  */}
    <div className="firstnamediv">
    <label htmlFor="" className="lastnamelabel">last name*</label>
    <input className="nameinput" type="text" placeholder="last name" name="lastname"  value ={formValues.lastname} onChange={handleChanges}/>
    </div>
    </div>
    {/* email  */}
    <div className="Labeldiv">
    <label htmlFor="">Email*</label>
    </div>
    <input type="text" placeholder="Enter your email" name="email"  value ={formValues.email}/>
    {/* password  */}
    <div className="Labeldiv">
    <label htmlFor="">Password*</label>
    </div>
    <div className="password">
      <input type={isShow?"text":"password"} className='passwordinput' placeholder="Create a password" name="password"  value ={formValues.password} onChange={handleChanges}/>
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
      <input type={isShowConfirmPass?"text":"password"} className='passwordinput' placeholder="Password" value ={formValues.password} onChange={handleChanges}/>
      {isShowConfirmPass
      ?
      <i class="fa-regular fa-eye-slash eyeicon" onClick={()=>setShowConfirmPass(false)}></i>
      :
      <i className="fa-regular fa-eye eyeicon" onClick={()=>setShowConfirmPass(true)}></i>
    }
      </div>
    
    <button className="signupbtn" value = "submit" > Sign up</button>
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