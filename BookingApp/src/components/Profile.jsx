import React from 'react'
import Nav from './nav'
import '../styles/profile.css'
import image from '../assets/profile.jpg'
import { Link } from 'react-router-dom'
import Input from './input'

function Profile() {
  return (
    <>
    <Nav />
    <div className='profile'>
    <h1>Settings</h1>
    <img src={image} alt="profile" className='profilepic' />
    <Link className='profilelink'>change profile picture</Link>
    {/* username  */}
      <div className='username'>
      <label htmlFor="Your name:" >Your name</label>
      <Input className='input'/>
      </div>
       {/* email  */}
       <div className='username'>
      <label htmlFor="Your email:" >Your email</label>
      <Input className='input'/>
      </div>
      {/* ti  */}
      <div className='username'>
      <label htmlFor="Yourtimeformat:" >Time format:</label>
      <select name="timeformat" id="timeformat" className='input'>
        <option value="12">12</option>
        <option value="24">24</option>
      </select>
      </div>
    </div>
    </>
  )
}

export default Profile