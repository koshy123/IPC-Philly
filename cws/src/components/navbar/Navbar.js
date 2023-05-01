import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import title from '../../assets/ipcLogo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setToggleMenu(false);
      document.removeEventListener("mousedown", handleClickOutside);
    }
  };

  const handleMenuClick = () => {
    setToggleMenu(!toggleMenu);
    if (!toggleMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  };

  const handleMenuItemClick = () => {
    setToggleMenu(false);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
              YouTube
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
              <Link to="/about" onClick={handleMenuItemClick}>
                <p>About</p>
              </Link>
              <p>
                <Link to="/involved" onClick={handleMenuItemClick}>
                  Get Involved
                </Link>
              </p>
              <p>
                <a href="#ipc" onClick={handleMenuItemClick}>
                  Us
                </a>
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
