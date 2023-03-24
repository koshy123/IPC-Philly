import React from 'react';
import "./footer.css";
import ipcLogo from '../../logo.svg';

const Footer = () => {
  return (
<div className="ipc__footer section__padding">
    <div className="ipc__footer-heading">
      <h1 className="gradient__text">Walk by faith, not by sight</h1>
    </div>

    {/* <div className="ipc__footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="ipc__footer-links">
      <div className="ipc__footer-links_logo">
        <img src={ipcLogo} alt="ipc_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="ipc__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="ipc__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="ipc__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="ipc__footer-copyright">
      <p>@2023 IPCPhillyChurch. All rights reserved.</p>
    </div>
  </div>  )
}

export default Footer