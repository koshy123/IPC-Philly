import React from 'react';
import './about.css'
import church from '../assets/FrontChurch.jpg'
import kuttu from '../assets/KuttuZephan.jpeg'
import wesley from '../assets/WesleyHeadshot.png'



const About = () => {
    return (
        <div className='about_main'>
            <div className='about_header'>
            <div className='about_header_container '>
                <h1 className='about_header_title'>About Us</h1>
            </div>
        </div>

        
        <div className='meet_the_team'>
        <p className='items_about'>Our History <img src={church}/></p>
        <p className='items_about'>Our Pastor <img src={wesley} /> </p>
        <p className='items_about'>Our Team <img src={kuttu} /></p>
        </div>
        </div>
      )
    }
export default About;