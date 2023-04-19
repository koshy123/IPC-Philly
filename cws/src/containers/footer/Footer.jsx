import React from 'react';
import "./footer.css";
import ipcLogo from '../../assets/ipcTitle.png';
import instagram from'../../assets/instagram.png';
import youtube from'../../assets/youtube.png';
import facebook from'../../assets/facebook.png';




const Footer = () => {
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
        <img src={ipcLogo} alt="ipc_logo" />
        <div className="social-media-icons">
  <a  target='_blank' href="https://www.instagram.com/ipcphilly/?hl=en">
    <img src={instagram} alt="Instagram" />
  </a>
  <a target='_blank' href="https://www.youtube.com/@ipcphillychurch">
    <img src={youtube} alt="YouTube" />
  </a>
  <a target='_blank' href="https://www.facebook.com/ipcphillychurch/">
    <img src={facebook} alt="Facebook" />
  </a>
</div>
      </div>
      <div className="ipc__footer-links_div">
       <h4>Links</h4>
        <p>Giving</p>
        <a  href='https://linktr.ee/ipcphilly?fbclid=IwAR0UbKrWKCCOR7zmbP3Bm2W-gUWNzzm40nWZtmLhJDt8NHM5n4Oz11iV1d8' target="_blank"><p>Social Media</p></a>
        <p>Livestream</p>
        <p>Contact</p>
      </div>
      <div className="ipc__footer-links_div">
        <h4>About</h4>
        <p>History</p>
        <p>Who are we</p>
        <p>Our Team</p>
      </div>
      <div className="ipc__footer-links_div">
        <h4>Get in touch</h4>
        <p>7781 Craig Street Philadelphia, PA 19136</p>
        <p>ipcphillychurch@gmail.com
</p>
      </div>
    </div>

    <div className="ipc__footer-copyright">
      <p>@ 2023 IPC Philly Church</p>
    </div>
  </div>  )
}

export default Footer