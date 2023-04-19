import React from 'react';
import './about.css'
import church from '../assets/FrontChurch.jpg'
import kuttu from '../assets/KuttuZephan.jpeg'
import wesley from '../assets/WesleyHeadshot.png'
import { Link } from "react-router-dom";




const About = () => {
    return (
        <div className='about_main'>
            <div className='about_header'>
            <div className='about_header_container '>
                <h1 className='about_header_title'>About Us</h1>
            </div>
        </div>


        <div className='meet_the_team'>
        <p className='items_about'>Our History <Link to='about/history'><img src={church}/></Link></p>
        <p className='items_about'>Our Pastor <Link to='about/pastor'><img src={wesley} /> </Link></p>
        <p className='items_about'>Our Team <Link to='about/team'><img src={kuttu} /></Link></p>
        </div>
        </div>
      )
    }
export default About;