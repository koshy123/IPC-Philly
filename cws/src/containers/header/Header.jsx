import React from 'react';
import "./header.css";
import "../../App.css"
import preacher from '../../assets/pastor_preach.jpg'
import banner from '../../assets/ipcTitle.png'

const Header = () => {
  return (
    <div className='ipc__header section__padding id="home'>
      <div className='ipc__header-content'>
        <h1 className='gradient__text'> Lets grow together </h1>

        <div className='ipc__header-content__input'>
          <input type="email" placeholder='your email address'></input>
          <button type='button'>Get Involved</button>
        </div>

        <div className='ipc__header-content__people'>
          <img src={banner}  />
          {/* <p>Taste and see that the Lord is Good</p> */}
        </div>
      </div>

      <div className='ipc__header-image'>
        <img src={preacher} />
        {/* <p>And the Word became Flesh</p> */}
      </div>
    </div>
  )
}

export default Header;