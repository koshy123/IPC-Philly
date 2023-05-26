import React from 'react';
import ".././Renew/renew.css";
import "./sundaySchool.css"
import zion from "./zion.png"
import choir from "./kidsChoir.jpg"
import { Link } from "react-router-dom";

const SundaySchool = () => {
    return (
        <div className='renew'>
            <div className='sundaySchool_padding'>
            </div>
        <div className='images_at_renew'>
          <img src={zion}></img>
          <div className='top_container_about'>
          <p class="verse">
            "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect."
          </p>
          <p class="reference">
            Romans 12:2
          </p>
          </div>
          <img src={choir}></img>
        </div>
        <div className='bottom_container_about'>
            <p className='bottom_text_about'>
            Our Sunday School program, held for an hour before the church service, serves as a pillar of spiritual education and growth within our community. The dedicated teachers guide students through a well-structured curriculum, covering a range of topics that deepen their understanding of the Bible and Christian principles. Not only do our students gain knowledge, but they also have the opportunity to put their learning into practice by taking tests that reinforce their comprehension. It is with great pride that we celebrate our Sunday School's achievements, including winning awards in the IPC Eastern Region, which reflects the commitment and excellence of both our teachers and students.            
            </p>
            <div>
              <p className='schedule_about'>
              <b>When:</b> <Link to="/contact">Contact us for more info </Link>
              </p>
            </div>
        </div>
        </div>
      )
    }

export default SundaySchool;