import React from 'react';
import ".././Renew/renew.css";
import "./worship.css"

import danielle from "./danielle.png"
import worship from "./worship1.png"
const Worship = () => {
    return (
        <div className='renew'>
            <div className='worship_padding'>
            <h1 className='title_for_renew'>Worship Team </h1>
            </div>
        <div className='images_at_renew'>
          <img src={danielle}></img>
          <p className='worship_text'>
          <p class="verse">
            Speaking to one another with psalms, hymns, and songs from the Spirit. Sing and make music from your heart to the Lord
          </p>
          <p class="reference">
            Ephesians 5:19
          </p>
    
          </p>
          <img src={worship}></img>
        </div>
        <div className='meeting_times'>
            <h1 className=''>Join </h1>
            <p className='text_for_renew'>Info about workship</p>
            </div>
        </div>
      )
    }

export default Worship;