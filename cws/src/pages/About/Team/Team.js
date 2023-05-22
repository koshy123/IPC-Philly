import React from 'react';
import Missions from '../../assets/missions_logo.jpg'
import Secretery from '../../assets/secretery_logo.jpg'
import Treasurer from '../../assets/treasurer_logo.jpg'
import Womens from '../../assets/womens_coordinator_logo.jpg'
import Youth from '../../assets/youth_director.jpg'
import Worship from '../../assets/worship_director_logo.jpg'
import Sunday_School from '../../assets/sunday_school_logo.jpg'
import './team.css'




const Team = () => {
    return (
        <div className='team_main'>
            <div className='team_header_container '>
            </div>

        <div className='team_text_main'>

        <div className='teamster_text_main' >
            <img src={Secretery} ></img>
            <p>Brother Renji Mathew</p>
        </div>

        <div className='teamster_text_main'>
            <img src={Treasurer} ></img>
            <p>Brother Jomon Mathew</p>
        </div>

        <div className='teamster_text_main'>
            <img src={Worship} ></img>
            <p> Jairus James</p>
        </div>

        <div className='teamster_text_main'>
            <img src={Youth} ></img>
            <p>Aaron Alexander</p>
        </div>

        <div className='teamster_text_main'>
            <img src={Womens} ></img>
            <p>Sister Jolly Daniel</p>
        </div>

        <div className='teamster_text_main'>
            <img src={Missions} ></img>
            <p>Brother Santhosh Joseph</p>
        </div>

        <div className='teamster_text_main'>
            <img src={Sunday_School } ></img>
            <p>Sister Mini Alexander</p>
            
        </div>

        </div>
        </div>
      )
    }
export default Team;