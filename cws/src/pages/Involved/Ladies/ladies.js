import React from 'react';
import ladies_sing from '../../assets/ladies-sing.jpg'
import weddding_better from '../../assets/wedding_better.png'

import './ladies.css'

const Ladies = () => {
    return (
        <div className='renew'>
            <div className='ladies_padding'>
            </div>
        <div className='images_at_renew'>
          <img src={ladies_sing}></img>
          <p className='text_for_renew'>Our ladies conduct monthly meetings in person and through phone call.</p>
          <img src={weddding_better}></img>
        </div>
        <div className='meeting_times'>
            <h1 className='title_for_renew'>Join </h1>
            <p className='text_for_renew'>Meeting times are.</p>
            </div>
        </div>
      )
    }

export default Ladies;