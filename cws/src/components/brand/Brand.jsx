import React from 'react'
import "./brand.css";
import {    renew, ladies_ministry, missions, prayer, sundaySchool,} from './imports'
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
      <img src={ladies_ministry} />
    </div>
    <div>
      <img src={missions} />
    </div>
    <div>
      <img src={prayer} />
    </div>
    <div>
      <img src={sundaySchool} />
    </div>
  </div>
  )
}

export default Brand