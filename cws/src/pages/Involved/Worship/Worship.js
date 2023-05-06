import React from 'react';
import ".././Renew/renew.css";
import "./worship.css"
import rufus from '../../../assets/rufusRenew.png'
import floor from '../../../assets/floorSitting.png'

const Worship = () => {
    return (
        <div className='renew'>
            <div className='worship_padding'>
            <h1 className='title_for_renew'>Worship Team </h1>
            </div>
        <div className='images_at_renew'>
          <img src={rufus}></img>
          <p className='text_for_renew'>We have an excellent choir and worship team. There is worship in English and in Malayalam. </p>
          <img src={floor}></img>
        </div>
        <div className='meeting_times'>
            <h1 className='title_for_renew'>Join </h1>
            <p className='text_for_renew'>Meeting times are.</p>
            </div>
        </div>
      )
    }

export default Worship;