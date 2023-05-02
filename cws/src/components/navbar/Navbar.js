import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import title from '../../assets/ipcLogo.jpg';
import { Link } from 'react-router-dom';
import youtube from '../../assets/youtubeName.png';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef(null);
  const body = document.querySelector('body');

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setToggleMenu(false);
      document.removeEventListener("mousedown", handleClickOutside);
      body.classList.remove('no-scroll');
    }
  };

  const handleMenuClick = () => {
    setToggleMenu(!toggleMenu);
    if (!toggleMenu) {
      document.addEventListener("mousedown", handleClickOutside);
      body.classList.toggle('no-scroll');
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      body.classList.remove('no-scroll');
    }
  };

  const handleMenuItemClick = () => {
    setToggleMenu(false);
    body.classList.remove('no-scroll');

  };

  useEffect(() => {
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      body.classList.remove('no-scroll');
    };
  }, []);




  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const navbar = document.querySelector(".ipc__navbar");
      const logoImg = document.querySelector(".ipc__navbar-links_logo img");
  
      if (scrollTop > 0) {
        // Add a class to the Navbar to make it smaller
        navbar.classList.add("ipc__navbar--small");
        // Set the max-height of the logo image to make it smaller
        logoImg.style.maxHeight = "0px";
      } else {
        // Remove the class and style to restore the original size
        navbar.classList.remove("ipc__navbar--small");
        logoImg.style.maxHeight = "70px";
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  




    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


 

  return (
    <div className="ipc__navbar">
      <div className="ipc__navbar-links">
        <div className="ipc__navbar-links_logo">
          <Link to="/">
            <a> {" "}
              <img src={title} alt="logo" />{" "}
            </a>
          </Link>
        </div>
        <div className="ipc__navbar-links_container">
          <p>
            <Link to="/involved" onClick={handleMenuItemClick}>
              Get Involved
            </Link>
          </p>
          <p>
            <Link to="/about" onClick={handleMenuItemClick}>
              About
            </Link>
          </p>
          <p>
            <Link to="/believe" onClick={handleMenuItemClick}>
              We Believe
            </Link>
          </p>
          <p>
            <Link to="/events" onClick={handleMenuItemClick}>
              Events
            </Link>
          </p>
          <p>
            <a
              target="_blank"
              href="https://www.youtube.com/@ipcphillychurch/streams/live"
              onClick={handleMenuItemClick}
            >
              <img className='navbarYoutube' src={youtube}></img>
            </a>
          </p>
        </div>
      </div>
      <div className="ipc__navbar-menu" ref={menuRef}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={handleMenuClick}
            style={{ backgroundColor: "#FF8A71" }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={handleMenuClick}
          />
        )}
        {toggleMenu && (
          <div className="ipc__navbar-menu_container scale-up-center">
            <div className="ipc__navbar-menu_container-links">
              <p>
              <Link to="/involved" onClick={handleMenuItemClick}>
                  Get Involved
              </Link>
              </p>
              <p>
              <Link to="/about" onClick={handleMenuItemClick}>
                About
              </Link>
              </p>
              <p>
              <Link to="/events" onClick={handleMenuItemClick}>
                Events
              </Link>
                </p>
              <Link to="/believe" onClick={handleMenuItemClick}>
                <p>Believe</p>
              </Link>
              <p>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@ipcphillychurch/streams"
                  onClick={handleMenuItemClick}
                >
                  YouTube
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;


