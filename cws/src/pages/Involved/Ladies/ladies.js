import React from 'react';
import "./renew.css";
import rufus from '../../../assets/rufusRenew.png'
import floor from '../../../assets/floorSitting.png'

const Empower = () => {
    return (
        <div className='renew'>
            <div className='renew_padding'>
            <h1 className='title_for_renew'>Renew </h1>
            <p className='text_for_renew'>Rufus James was inspired to start this this meeting so that young adults can grow deeper in Gods word. From its start it has consistently grown and allowed many to have a greater passion for God.</p>
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

export default Empower;