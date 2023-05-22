import React from 'react';
import './about.css'
import church from '../assets/history_logo_about.png'
import team_logo from '../assets/team_logo.png'
import wesley from '../assets/pastor_logo_about.png'
import { Link } from "react-router-dom";



const About = () => {
    return (
        <div className='about_main'>
            <div className='about_header_container '>
                <h1 className='about_header_title'>About Us</h1>
            </div>

        <div className='meet_the_team'>
        <div className='meet_the_team_about_box'>
            <Link to='/history'>
            <img src={church}></img></Link>
            {/* <p className='about_under_image'>Was founded back in 1990 by the grace of God. To hold a stand of holiness and follow Gods word.</p> */}
        </div>

        <div className='meet_the_team_about_box'>
            <Link to='/pastor'>
            <img src={wesley} /></Link>
            {/* <p className='about_under_image'>Graduating Bible school, God put on Pastor Wesley Daniel heart to start a church in Philadelphia.</p>  */}
        </div>
        <div className='meet_the_team_about_box'> 
            <Link to='/team'>
            <img src={team_logo} /></Link>
            {/* <p className='about_under_image'>Our church would not be able to function without our hardworking team of motivated, God fearing individuals.</p> */}
        </div> 
        </div>
        </div>
      )
    }
export default About;