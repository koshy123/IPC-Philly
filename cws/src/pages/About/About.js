import React from 'react';
import './about.css'
import church from '../assets/FrontChurch.jpg'
import kuttu from '../assets/KuttuZephan.jpeg'
import wesley from '../assets/WesleyPrayStrong.png'
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
        <div className='meet_the_team_about_box'>
            <h4 className='items_about'>Our History</h4> <Link to='about/history'>
            <img src={church}/></Link><p className='about_under_image'>Was founded back in 1990 by the grace of God. To hold a stand of holiness and follow Gods word.</p>
        </div>

        <div className='meet_the_team_about_box'>
            <h4 className='items_about'>Our Pastor</h4> <Link to='about/pastor'>
            <img src={wesley} /></Link><p className='about_under_image'>Graduating Bible school, God put on Pastor Wesley Daniel heart to start a church in Philadelphia.</p> 
        </div>
        <div className='meet_the_team_about_box'> 
            <h4 className='items_about'>Our Team </h4>  <Link to='about/team'>
            <img src={kuttu} /></Link><p className='about_under_image'>Our church would not be able to function without our hardworking team of motivated, God fearing individuals.</p>
        </div> 
        </div>

        </div>
      )
    }
export default About;