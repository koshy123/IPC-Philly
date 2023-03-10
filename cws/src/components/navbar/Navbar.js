import React, {useState} from 'react'
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import title from "../../assets/ipcLogo.jpg"
//BEM, aka Block Element Modifier



const Menu = () => {
  <> 
  <p> <a href="#home">Home</a></p>
  <p> <a href="#home">About</a></p>
  <p> <a href="#home">Events</a></p>
  <p> <a href="#home">Watch/Live</a></p>
  <p> <a href="#home">Contact</a></p>
</>
}
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
        <div className='gpt3__navbar-menu'>
        {
          toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
          <div className='gpt3__navbar-menu_container-links'>
          <Menu/>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;