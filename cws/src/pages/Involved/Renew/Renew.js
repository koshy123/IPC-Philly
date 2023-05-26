import React from 'react';
import "./renew.css";
import rufus from '../../../assets/rufusRenew.png'
import floor from '../../../assets/floorSitting.png'

const Renew = () => {
    return (
        <div className='renew'>
            <div className='renew_padding'>
            </div>
        <div className='images_at_renew'>
          <img src={rufus}></img>
          <div className='top_container_about'>
          <p class="verse">
            "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect."
          </p>
          <p class="reference">
            Romans 12:2
          </p>
          </div>
          <img src={floor}></img>
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

export default Renew;