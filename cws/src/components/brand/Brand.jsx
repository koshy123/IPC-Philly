import React from 'react'
import "./brand.css";
import { renew, ladies_ministry, missions, prayer, sundaySchool } from './imports'
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div className="ipc__brand section__padding" id='live'>
    <div>
    <Link to="/renew">
      <img src={renew}/>
    </Link>
    </div>
    <div>
      <Link to="/ladies">
      <img src={ladies_ministry} />
      </Link>
    </div>
    <div>
      <Link to="/missions">
      <img src={missions} />
      </Link>     
    </div>
    <div>
      <Link to="/worship">
      <img src={prayer} />
      </Link>
    </div>
    <div>
      <Link to="/sunday-school">
      <img src={sundaySchool} />
      </Link>
    </div>
  </div>
  )
}

export default Brand