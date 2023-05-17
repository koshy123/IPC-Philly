import React from 'react';
import Santhosh from '../../assets/santhosh.jpg'
import Renji from '../../assets/renji.jpg'
import Jomon from '../../assets/jomon.jpg'
import Jolly from '../../assets/jolly.jpg'
import Aaron from '../../assets/youth_director.jpg'
import Jairus from '../../assets/jairus.jpg'
import Mini from '../../assets/mini.png'
import './team.css'




const Team = () => {
    return (
        <div className='team_main'>
            <div className='team_header_container '>
            </div>

        <div className='team_text_main'>
        <div className='teamster_text_main' >
            <img src={Renji} ></img>
            <p>Brother Renji Mathew</p>
        </div>

        <div className='teamster_text_main'>
            <img src={Jomon} ></img>
            <p>Jomon Mathew</p>
        </div>

        <div className='teamster_text_main'>
            <img src={Jairus} ></img>
            <p> Jairus James</p>
        </div>

        <div className='teamster_text_main'>
            <img src={Aaron} ></img>
            <p>Aaron Alexander</p>
        </div>

        <div className='teamster_text_main'>
            <img src={Jolly} ></img>
            <p>Sister Jolly Daniel</p>
        </div>

        <div className='teamster_text_main'>
            <img src={Santhosh} ></img>
            <p>Brother Santhosh Joseph</p>
        </div>

        <div className='teamster_text_main'>
            <img src={Mini} ></img>
            <p>Sister Mini Alexander</p>
        </div>

        </div>
        </div>
      )
    }
export default Team;