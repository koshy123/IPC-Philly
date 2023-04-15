import Feature from '../../components/feature/Feature';
import { sliderData } from "../../slider-data";
import "./whatIPC.css";

const WhatIPC = () => {
  

  return (
    <div className="ipc__whatIPC section__margin"  id='ipc' >
      <div className='ipc__whatIPC-feature'>
      <div className="ipc__whatIPC-feature">
      {/* <Feature title="Who are we?" text="The Indian Pentecostal Church of God (IPC) is the largest Pentecostal Christian Denomination in India, with over 10,000 congregations worldwide. Its organisational headquarters located in Kumbanad, Kerala, India." /> */}
      </div>
      </div>
      <div className="ipc__whatIPC-heading">
      {/* <h1 className="gradient__text">"Taste and see that the Lord is good"</h1> */}
      <p>Sunday Service</p>
    </div>
    <div className="ipc__whatIPC-container">
      <Feature title="Time" text="Starts prompt at 10:30am (except the second Sunday of the month, which starts at 9:30am)" />
      <Feature title="Live Stream" text="Not able to attend? We are streaming live on Youtube every Sunday at 9:30am(EST)." />
      <Feature title="Location" text="7781 Craig Street Philadelphia, PA 19136 " />
    </div>
  </div>
  )
}

export default WhatIPC;