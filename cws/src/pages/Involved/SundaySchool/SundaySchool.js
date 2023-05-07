import React from 'react';
import ".././Renew/renew.css";
import "./sundaySchool.css"
import zion from "./zion.png"
import choir from "./kidsChoir.jpg"
const SundaySchool = () => {
    return (
        <div className='renew'>
            <div className='sundaySchool_padding'>
            <h1 className='title_for_renew'>Sunday School </h1>
            </div>
        <div className='images_at_renew'>
          <img src={zion}></img>
          <p className='text_for_renew'>
              Our award winning Sunday School staff and students study the word of God with passion.
            </p>
          <img src={choir}></img>
        </div>
        <div className='meeting_times'>
            <h1 className='title_for_renew'>Join </h1>
            <p className='text_for_renew'>Meeting times are.</p>
            </div>
        </div>
      )
    }

export default SundaySchool;