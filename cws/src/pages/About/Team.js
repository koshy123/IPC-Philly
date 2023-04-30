import React from 'react';
import './about.css'
import kukku from '../assets/kukku.png'





const Team = () => {
    return (
        <div className='team_main'>
            <div className='team_header_container '>
                <h1 className='team_header_title'>Team</h1>
            </div>

        <div className='team_text_main'>
        <div className='teamster_text_main' >
            <h1>Secretary</h1>
            <img src={kukku} ></img>
            <p>Brother Renji Mathew</p>
        </div>

        <div className='teamster_text_main'>
            <h1>Treasurer</h1>
            <img src={kukku} ></img>
            <p></p>
        </div>

        </div>
        </div>
      )
    }
export default Team;