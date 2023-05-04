import React from 'react';
import ".././Renew/renew.css";
import rufus from '../../../assets/rufusRenew.png'
import floor from '../../../assets/floorSitting.png'

const SundaySchool = () => {
    return (
        <div className='renew'>
            <div className='renew_padding'>
            <h1 className='title_for_renew'>Sunday School </h1>
            <p className='text_for_renew'>Our award winning Sunday School staff and students study the word of God with passion.</p>
            </div>
        <div className='images_at_renew'>
          <img src={rufus}></img>
          <img src={floor}></img>
        </div>
        <div className='meeting_times'>
            <h1 className='title_for_renew'>Join </h1>
            <p className='text_for_renew'>Meeting times are.</p>
            </div>
        </div>
      )
    }

export default SundaySchool;