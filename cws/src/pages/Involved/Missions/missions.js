import React from 'react';
import ".././Renew/renew.css";
import sherin from '../../assets/SherinPray.png'
import nursing from '../../assets/nursingHome.png'
import { Link } from "react-router-dom";

const Missions = () => {
    return (
        <div className='renew'>
            <div className='missions_padding'>
            </div>
        <div className='images_at_renew'>
          {/* <img src={sherin}></img> */}
          <div className='top_container_about'>
          <p class="verse">
          “Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything that I have commanded you. And surely I am with you always, to the very end of the age.”          </p>
          <p class="reference">
          Matthew 28:19-20          
          </p>
          </div>
          {/* <img src={nursing}></img> */}
        </div>
        <div className='bottom_container_about'>
            <p className='bottom_text_about'>
            Our church is deeply committed to missions work, both abroad and within our local community. We actively support ministry efforts in India, partnering with organizations dedicated to spreading the gospel and meeting the needs of the people. Additionally, we engage in local outreach initiatives in Philadelphia, recognizing the importance of reaching out to our neighbors and demonstrating God's love through acts of service and evangelism. Every soul that is saved through these endeavors brings us immense joy and fuels our passion to continue sharing the transformative message of Christ.              </p>
            <div>
              <p className='schedule_about'>
              <b>When:</b> <Link to="/contact">Contact us for more info </Link>
              </p>
            </div>
        </div>
        </div>
      )
    }

export default Missions;