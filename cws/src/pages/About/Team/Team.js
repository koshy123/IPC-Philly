import React from 'react';
import Santhosh from '../../assets/santhosh.jpg'
import Renji from '../../assets/renji.jpg'
import Jomon from '../../assets/jomon.jpg'
import Jolly from '../../assets/jolly.jpg'
import Aaron from '../../assets/aaron.jpg'
import Jairus from '../../assets/jairus.jpg'
import Mini from '../../assets/mini.png'
import './team.css'




const Team = () => {
    return (
        <div className='team_main'>
            <div className='team_header_container '>
                <h1 className='team_header_title'>Team</h1>
            </div>

        <div className='team_text_main'>
        <div className='teamster_text_main' >
            <h1>Secretary</h1>
            <img src={Renji} ></img>
            <p>Brother Renji Mathew</p>
        </div>

        <div className='teamster_text_main'>
            <h1>Treasurer</h1>
            <img src={Jomon} ></img>
            <p>Jomon Mathew</p>
        </div>

        <div className='teamster_text_main'>
            <h1>Worship Leader</h1>
            <img src={Jairus} ></img>
            <p> Jairus James</p>
        </div>

        <div className='teamster_text_main'>
            <h1>Youth Leader</h1>
            <img src={Aaron} ></img>
            <p>Aaron Alexander</p>
        </div>

        <div className='teamster_text_main'>
            <h1>Sisterhood</h1>
            <img src={Jolly} ></img>
            <p>Sister Jolly Daniel</p>
        </div>

        <div className='teamster_text_main'>
            <h1>Missions</h1>
            <img src={Santhosh} ></img>
            <p>Brother Santhosh Joseph</p>
        </div>

        <div className='teamster_text_main'>
            <h1>Sunday School Director</h1>
            <img src={Mini} ></img>
            <p>Sister Mini Alexander</p>
        </div>

        </div>
        </div>
      )
    }
export default Team;