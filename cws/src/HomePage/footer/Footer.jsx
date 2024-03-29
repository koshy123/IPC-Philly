/* global google */
import React, {useEffect, useState} from 'react';
import "./footer.css";
import ipcLogo from '../../assets/ipcTitle.png';
import instagram from'../../assets/instagram.png';
import youtube from'../../assets/youtube.png';
import facebook from'../../assets/facebook.png';
import { Loader } from '@googlemaps/js-api-loader';
import { Link } from "react-router-dom";
import SignInPage from './SignInPage';

const Footer = () => {

  const [showSignIn, setShowSignIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleSignIn = (loggedIn) => {
    setIsLoggedIn(loggedIn);
    setShowSignIn(false);
  };

function GoogleMap() {
  useEffect(() => {
    const loader = new Loader({
      apiKey: 'YOUR_API_KEY',
      version: 'weekly',
    });

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 }, // set the initial location
        zoom: 15,
      });

      const marker = new google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 }, // set the marker position
        map,
        title: 'Click to open in Google Maps',
      });

      // create an event listener to open the Google Maps link when the marker is clicked
      marker.addListener('click', () => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${marker.getPosition().lat()},${marker.getPosition().lng()}`);
      });
    });
  }, [])}

  return (
  <div className="ipc__footer section__padding">
    <div className="ipc__footer-heading">
      {/* <h1 className="gradient__text">Walk by faith, not by Sight</h1> */}
    </div>

    {/* <div className="ipc__footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="ipc__footer-links">
      <div className="ipc__footer-links_logo">
        <img id='banner_logo' src={ipcLogo} alt="ipc_logo" />
          <div className="social-media-icons">
            <a  target='_blank' href="https://www.instagram.com/ipcphilly/?hl=en">
            <img src={instagram} alt="Instagram" />
            </a>
            <a target='_blank' href="https://www.youtube.com/@ipcphillychurch">
            <img src={youtube} alt="YouTube" />
            </a>
            <a target='_blank' href="https://www.facebook.com/ipcphillychurch/">
            <img src={facebook} alt="Facebook"/>
            </a>
          </div>
      </div>   
    <div className='links_and_about'>
      <div className="ipc__footer-links_div">
        <h4>Links</h4>
        {/* <p>Giving</p> */}
        <a href='https://linktr.ee/ipcphilly?fbclid=IwAR0UbKrWKCCOR7zmbP3Bm2W-gUWNzzm40nWZtmLhJDt8NHM5n4Oz11iV1d8' target="_blank"><p>Social Media</p></a>
        <a target="_blank" href="https://www.youtube.com/watch?v=lguWpJyWfpc&ab_channel=IPCPhiladelphia"><p>Livestream</p></a>
        <Link to='/contact' ><p>Contact</p></Link>
      </div>
      <div className="ipc__footer-links_div">
        <h4>About</h4>
        <Link to="/about"> <p>History</p></Link> 
        <Link to="/believe"><p>Beliefs</p></Link>  
        <Link to='/team'><p>Our Team</p></Link> 

      </div>
    </div>
      <div className="ipc__footer-links_div">
        <h4>Get in touch</h4>
        <p>7781 Craig Street Philadelphia, PA 19136</p>
        <p>ipcphillychurch@gmail.com
        </p>
        {isLoggedIn ? (
        // Show adjustable and visible items for signed-in users
        <div>
          <p>Welcome, User!</p>
          {/* Add your adjustable and visible components here */}
        </div>
      ) : (
        // Show sign-in button
        <button onClick={handleSignInClick}>Sign In</button>
      )}

      {showSignIn && <SignInPage onSignIn={handleSignIn} />}
      </div>
    </div>

    <div className="ipc__footer-copyright">
    <GoogleMap />
      <p>@ 2023 IPC Philly Church</p>
    </div>
  </div>  )
}

export default Footer;