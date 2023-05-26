import React from 'react';
import "./empower.css"
import rufus from '../../../assets/rufusRenew.png'
import floor from '../../../assets/floorSitting.png'

const Empower = () => {
    return (
        <div className='renew'>
            <div className='empower_padding'>
            </div>
        <div className='images_at_renew'>
          <img src={rufus}></img>
          <p className='worship_text'>
          <p class="verse">
            "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint."
          </p>
          <p class="reference">
          Isaiah 40:31
          </p>
          </p>
          <img src={floor}></img>
        </div>
        <div className='bottom_container_about'>
            <p className='bottom_text_about'>
            Empower Kids is a vibrant and engaging program specifically designed for the younger members of our church. Through interactive teaching, creative activities, and meaningful discussions, Empower Kids aims to empower children with the knowledge and understanding of the Word of God. We are grateful to witness children from our church community coming together, building friendships, and delving into worship, fellowship, and exploration of the Scriptures. Our sessions consist of captivating teaching series delivered by dedicated leaders or captivating book studies that capture the imaginations of young hearts. Our heartfelt prayer is to equip this younger generation with the timeless truths of the Gospel, enabling them to confidently shine God's light in their schools, communities, and future endeavors.              </p>
            <div>
              <p className='schedule_about'>
                <b>When:</b> Meetings are twice a month.( message us for date and time) <a target='blank' href='https://www.instagram.com/ipcphillyyouth/'> Insta</a>
              </p>
            </div>
        </div>
        </div>
      )
    }

export default Empower;