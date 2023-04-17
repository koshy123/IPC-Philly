import React, {useState} from 'react';
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import title from "../../assets/ipcLogo.jpg";
import { Link } from "react-router-dom";



// const Menu = () => {
//   return (
//     <div>
//       <p> <a href="#home">Home</a></p>
//       <p> <a href="#ipc">About</a></p>
//       <p> <a href="#home">Events</a></p>
//       <p> <a href="#home">Watch/Live</a></p>
//       <p> <a href="#home">Contact</a></p>
//     </div>
//   );
// }

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='ipc__navbar'>
      <div className='ipc__navbar-links'>
        <div className='ipc__navbar-links_logo'>
         <Link to="/"><a > <img src={title} alt="logo"  /></a></Link>
        </div>
        <div className='ipc__navbar-links_container'> 
          {/* <p> <a href="#home">Home</a></p> */}
          <p> <a href="#live">Get Involved</a></p>
          <p> <a href="#ipc">Visit Us</a></p>
          <Link to="/believe"><p> <a >We Believe</a></p></Link>
          <p> <a target="_blank" href="https://www.youtube.com/@ipcphillychurch/streams">Watch Live</a></p>
        </div>
        </div>
        {/* <div className='ipc__navbar-sign'>
          <p>Sign in</p>
        <button type='button'>Sign up</button>
        </div> */}
        {/* change color for button. white background for button. */}
        <div className='ipc__navbar-menu'>
        {
          toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='ipc__navbar-menu_container scale-up-center'>
          <div className='ipc__navbar-menu_container-links'>
          {/* <p> <a href="#home">Home</a></p> */}
          <p> <a href="#live">Get Involved</a></p>
          <p> <a href="#ipc">Visit Us</a></p>
          <p> <a href="#beliefs">We Believe</a></p>
          <p> <a href="#contact">Watch Live</a></p>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;