import React from 'react';
import Feature from '../../components/feature/Feature';
import "./whatIPC.css";

const WhatIPC = () => {
  return (
    <div className="ipc__whatIPC section__margin" id="ipc">
      <div className='ipc__whatIPC-feature'>
      <div className="ipc__whatIPC-feature">
      <Feature title="What is IPC" text="The Indian Pentecostal Church of God (IPC) is one of the largest Pentecostal Christian Denomination in India,[2] with over 10,000 congregations worldwide. Its organisational headquarters located in Kumbanad, Kerala, India." />
      </div>
      </div>

      <div className="ipc__whatIPC-heading">
      <h1 className="gradient__text">"Taste and see that the Lord is good"</h1>
      <p>Experience his presence</p>
    </div>
    <div className="ipc__whatIPC-container">
      <Feature title="Sunday Service" text="Service starts Sunday at 10:30am (every second Sunday, service starts at 9:30am)" />
      <Feature title="Live Stream" text="We are streaming live on Youtube every Sunday at 9:30am(EST)." />
      <Feature title="Location" text=" " />
    </div>

  </div>
  )
}

export default WhatIPC; 