import React,{useState} from 'react'
import Nav from '../../components/dashboard/nav'
import './profile.css'
import image from '../../assets/profile.jpg'
import { Link } from 'react-router-dom'
import Input from '../../components/input'
import Button from '../../components/buttons/Button'
import Footer from '../../components/dashboard/Footer'
import Swal from 'sweetalert2'
function Profile() {
  const [isShow, setShow] = useState(false);
  console.log(isShow)
  const alert = ()=>{
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your Profile is updated!",
      showConfirmButton: false,
      timer: 1500
    });
  }
  return (
    <>
    <Nav />
    <div className='profile'>
    <h1>Settings</h1>
    <img src={image} alt="profile" className='profilepic' />
    <label htmlFor="profilepic" className='profilelabel'>Choose Profile Pic</label>
    <input id ="profilepic" type="file" className='profilelink' />
    {/* username  */}
      <div className='username'>
      <label htmlFor="Your name:">Your name:</label>
      <Input className='input' placeholder="Name" />
      </div>
       {/* email  */}
       <div className='username'>
      <label htmlFor="Your email:" >Your email:</label>
      <Input className='input'placeholder="Email" />
      </div>
      {/* password */}
      <div className='username'>
      <label htmlFor="Your password:" >Your password:</label>
      <div className="password">
      <input type={isShow?"text":"password"} className='passwordinput' placeholder="Password" />
      {isShow
      ?
      <i class="fa-regular fa-eye-slash" onClick={()=>setShow(false)}></i>
      :
      <i className="fa-regular fa-eye" onClick={()=>setShow(true)}></i>
    }
      </div>
      </div>
      <Button type='save' className='Add_booking' onClick={alert}/>
    </div>
    <Footer />
    </>
  )
}

export default Profile