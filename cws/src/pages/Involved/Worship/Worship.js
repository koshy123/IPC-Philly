import React from 'react';
import ".././Renew/renew.css";
import "./worship.css"
import { Link } from "react-router-dom";

import danielle from "./danielle.png"
import worship from "./worship1.png"
const Worship = () => {
    return (
        <div className='renew'>
            <div className='worship_padding'>
            </div>
        <div className='images_at_renew'>
          <img src={danielle}></img>
          <div className='top_container_about'>
            <p class="verse">
            Speaking to one another with psalms, hymns, and songs from the Spirit. Sing and make music from your heart to the Lord
          </p>
          <p class="reference">
            Ephesians 5:19
          </p>
          </div>
          <img src={worship}></img>
        </div>
        <div className='bottom_container_about'>
            <p className='bottom_text_about'>
            Worship in our church is a dynamic and diverse experience that bridges languages and embraces the presence of the Holy Spirit. With services conducted in both English and Malayalam, we create a space where people from various backgrounds can unite in adoration and praise. Our worship is not confined to mere rituals but seeks to cultivate a deep connection with God, inviting the Holy Spirit to move in our midst, leading us into intimate encounters and spiritual transformation. Through harmonious melodies, heartfelt prayers, and the surrender of our hearts, we strive to create an atmosphere where God's presence is tangibly felt, allowing us to enter into a profound worship experience.             </p>
        <div>
              <p className='schedule_about'>
                <b>When:</b> <Link to="/contact">Contact us for more info </Link>
              </p>
        </div>
        </div>
        </div>
      )
    }

export default Worship;