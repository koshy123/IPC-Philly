import React, {useState} from 'react'
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import title from "../../assets/ipcLogo.jpg"
//BEM, aka Block Element Modifier



const Menu = () => {
  return (
    <div>
      <p> <a href="#home">Home</a></p>
      <p> <a href="#home">About</a></p>
      <p> <a href="#home">Events</a></p>
      <p> <a href="#home">Watch/Live</a></p>
      <p> <a href="#home">Contact</a></p>
    </div>
  );
}

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='ipc__navbar'>
      <div className='ipc__navbar-links'>
        <div className='ipc__navbar-links_logo'>
          <img src={title} alt="logo"  />
        </div>
        <div className='ipc__navbar-links_container'> 
          <p> <a href="#home">Home</a></p>
          <p> <a href="#home">About</a></p>
          <p> <a href="#home">Events</a></p>
          <p> <a href="#home">Watch/Live</a></p>
          <p> <a href="#home">Contact</a></p>
        </div>
        </div>
        <div className='ipc__navbar-sign'>
          <p>Sign in</p>
        <button type='button'>Sign up</button>
        </div>
        <div className='ipc__navbar-menu'>
        {
          toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='ipc__navbar-menu_container scale-up-center'>
          <div className='ipc__navbar-menu_container-links'>
          <p> <a href="#home">Home</a></p>
          <p> <a href="#home">About</a></p>
          <p> <a href="#home">Events</a></p>
          <p> <a href="#home">Watch/Live</a></p>
          <p> <a href="#home">Contact</a></p>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;