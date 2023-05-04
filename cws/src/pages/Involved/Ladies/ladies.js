import React from 'react';
import rufus from '../../../assets/rufusRenew.png'
import floor from '../../../assets/floorSitting.png'
import './ladies.css'

const Ladies = () => {
    return (
        <div className='renew'>
            <div className='renew_padding'>
            <h1 className='title_for_renew'>Ladies Meetings </h1>
            <p className='text_for_renew'>Our ladies conduct monthly meetings in person and through phone call.</p>
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

export default Ladies;