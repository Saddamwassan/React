import React from 'react'
import Nav from '../../components/dashboard/nav'
import './profile.css'
import image from '../../assets/profile.jpg'
import { Link } from 'react-router-dom'
import Input from '../../components/input'
import Button from '../../components/buttons/Button'
import Footer from '../../components/dashboard/Footer'
import Swal from 'sweetalert2'
function Profile() {
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
    <Link className='profilelink'>Change profile picture</Link>
    {/* username  */}
      <div className='username'>
      <label htmlFor="Your name:">Your name:</label>
      <Input className='input' placeholder="Name" value="Saddam Hussain"/>
      </div>
       {/* email  */}
       <div className='username'>
      <label htmlFor="Your email:" >Your email:</label>
      <Input className='input'placeholder="Email" value="Saddam.wassan1@gmail.com"/>
      </div>
      {/* password */}
      <div className='username'>
      <label htmlFor="Your password:" >Your password:</label>
      <input type="text" className='input' value='mypassword' />
      </div>
      <Button type='save' className='Add_booking' onClick={alert}/>
    </div>
    <Footer />
    </>
  )
}

export default Profile