import React from 'react';
import ".././Renew/renew.css";
import sherin from '../../assets/SherinPray.png'
import nursing from '../../assets/nursingHome.png'

const Missions = () => {
    return (
        <div className='renew'>
            <div className='missions_padding'>
            </div>
        <div className='images_at_renew'>
          <img src={sherin}></img>
          <p className='text_for_renew'>As commanded by Jesus Christ through the Great Commission, we are obedient to his word by spready the gospel through various outlets. </p>

          <img src={nursing}></img>
        </div>
        <div className='meeting_times'>
            <h1 className='title_for_renew'>Join </h1>
            <p className='text_for_renew'>Meeting times are.</p>
            </div>
        </div>
      )
    }

export default Missions;