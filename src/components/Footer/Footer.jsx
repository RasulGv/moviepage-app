import React from 'react'
import './Footer.css'
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <div className='footer'>
      <div className="foooter-icons">
      <IoLogoYoutube className='icon' />
      <FaFacebook className='icon' />
      <FaInstagram className='icon'/>
      <FaLinkedin className='icon'/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright'>&copy; 1999=2024 NetflixAze.</p>
    </div>
  )
}

export default Footer