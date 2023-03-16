import React from 'react'
import "./brand.css";
import {    renew, ladies_ministry, missions, prayer, sundaySchool,} from './imports'

const Brand = () => {
  return (
    <div className="ipc__brand section__padding">
    <div>
      <img src={renew} />
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