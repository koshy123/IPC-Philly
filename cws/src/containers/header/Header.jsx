import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "../../slider-data";
import Feature from '../../components/feature/Feature';
import preach from '../../assets/pastor_preach.jpg'
import "./header.scss";
import { Link } from "react-router-dom";


const Header = () => {


  return (
    <div className="header_image">
      <h1>IPC Philly Church</h1>
     <Link to='/contact' ><button>Contact Us</button></Link> 
  </div>
  );
};

export default Header;