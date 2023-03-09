import React, {useState} from 'react'
import "./navbar.css";
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import title from "../../assets/ipcLogo.jpg"
//BEM, aka Block Element Modifier
const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={title} alt="logo"  />
        </div>
        <div className='gpt3__navbar-links_container'> 
          <p> <a href="#home">Home</a></p>
          <p> <a href="#home">About</a></p>
          <p> <a href="#home">Events</a></p>
          <p> <a href="#home">Watch/Live</a></p>
          <p> <a href="#home">Contact</a></p>
        </div>
        <div className='gpt3__navbar-sign'>
          <p>Sign in</p>
        <button type='button'>Sign up</button>
        </div>
        <div className='gpt3__navbar-menu'></div>
      </div>
    </div>
  )
}

export default Navbar