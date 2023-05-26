import React from 'react';
import ladies_sing from '../../assets/ladies-sing.jpg'
import weddding_better from '../../assets/wedding_better.png'
import { Link } from "react-router-dom";

import './ladies.css'

const Ladies = () => {
    return (
        <div className='renew'>
            <div className='ladies_padding'>
            </div>
        <div className='images_at_renew'>
          <img src={ladies_sing}></img>
          <div className='top_container_about'>
          <p class="verse">
            "In the same way, the women are to be worthy of respect, not malicious talkers but temperate and trustworthy in everything."
          </p>
          <p class="reference">
          1 Timothy 3:11
          </p>
          </div>
          <img src={weddding_better}></img>
        </div>
        <div className='bottom_container_about'>
            <p className='bottom_text_about'>
            The Women's Ministry in our church is a vibrant community that fosters spiritual growth and support among women. Through prayer meetings, they gather either in person or connect through phone calls, creating a space for fellowship and heartfelt conversations that nurture their faith and strengthen their bonds with one another.              </p>
        <div>
              <p className='schedule_about'>
                <b>When:</b> <Link to="/contact">Contact us for more info </Link>
              </p>
        </div>
        </div>
        </div>
      )
    }

export default Ladies;