import React from 'react';
import wedding_ladies from '../../assets/wedding-ladies.jpg'
import ladies_sing from '../../assets/ladies-sing.jpg'
import './ladies.css'

const Ladies = () => {
    return (
        <div className='renew'>
            <div className='renew_padding'>
            <h1 className='title_for_renew'>Ladies Meetings </h1>
            </div>
        <div className='images_at_renew'>
          <img src={ladies_sing}></img>
          <p className='text_for_renew'>Our ladies conduct monthly meetings in person and through phone call.</p>
          <img src={wedding_ladies}></img>
        </div>
        <div className='meeting_times'>
            <h1 className='title_for_renew'>Join </h1>
            <p className='text_for_renew'>Meeting times are.</p>
            </div>
        </div>
      )
    }

export default Ladies;