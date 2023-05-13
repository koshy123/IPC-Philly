import React from 'react';
import "./renew.css";
import rufus from '../../../assets/rufusRenew.png'
import floor from '../../../assets/floorSitting.png'

const Renew = () => {
    return (
        <div className='renew'>
            <div className='renew_padding'>
            <h1 className='title_for_renew'>Renew </h1>
            </div>
        <div className='images_at_renew'>
          <img src={rufus}></img>
          <p className='worship_text'>
          <p class="verse">
            "Do not be conformed to this world,[c] but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect."
          </p>
          <p class="reference">
            Romans 12:2
          </p>
          </p>
          <img src={floor}></img>
        </div>
        <div className='meeting_times'>
            <h1 className='title_for_renew'>Join </h1>
            <p className='text_for_renew'>Meeting times are.</p>
            </div>
        </div>
      )
    }

export default Renew;