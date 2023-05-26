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
          <div className='top_container_about'>
          <p class="verse">
            "In the same way, the women are to be worthy of respect, not malicious talkers but temperate and trustworthy in everything."
          </p>
          <p class="reference">
          1 Timothy 3:11
          </p>
          </div>
          <img src={nursing}></img>
        </div>
        <div className='bottom_container_about'>
            <p className='bottom_text_about'>IPC Philly Renew is a youth ministry designed to engage young people with teaching and discussion of the Word. We have been fortunate enough to see young people from all over the city of Philadelphia gather and spend time in worship, fellowship, and meditation of the scriptures. Our topics are either teaching series with speakers from the city or a book studies. Our prayer is to equip this generation with God’s Word and send them out into schools, campuses, and workplaces as heralds of the Gospel. </p>
            <div>
              <p className='schedule_about'>
                <b>When:</b> Meetings are twice a month.(please dm us for more accurate dates and times) <a target='blank' href='https://www.instagram.com/ipcphillyyouth/'>Renew Insta.</a>
              </p>
            </div>
        </div>
        </div>
      )
    }

export default Missions;