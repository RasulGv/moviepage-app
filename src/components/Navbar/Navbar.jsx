import logo from '../../assests/logo.jpg'
import { IoSearchOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import profile_img from '../../assests/profile_icon.png'
import { FaCaretDown } from "react-icons/fa";
import './Navbar.css'
import { logOut } from '../firebase';

function Navbar() {
  return (
    <div  className='navbar'>
        <div className="navbar-left">
          <img src={logo} alt="logo" />
          <ul>
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="navbar-right">
        <IoSearchOutline className='icons'/>
        <p>Children</p>
        <FaRegBell className='icons'/>
        <div className="nav-profile">
          <img src={profile_img} alt="" className='profile'/>
          <FaCaretDown />
          <div className="dropdown">
            <p onClick={()=>{logOut()}}>Sign out</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar