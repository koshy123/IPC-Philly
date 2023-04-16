import React from 'react';
import "./renew.css";
import rufus from '../../assets/rufusRenew.png'
import floor from '../../assets/floorSitting.png'

const Renew = () => {
    return (
        <div className='renew'>
            <div>
            <h1 className='title_for_renew'>Renew </h1>
            <p className='text_for_renew'>Rufus James was inspired to start this this meeting so that young adults can grow deeper in Gods word. From its start it has consistently grown and allowed many to have a greater passion for God.</p>

            </div>
        <div className='images_at_renew'>
          <img src={rufus}></img>
          <img src={floor}></img>


        </div>
        
        </div>
      )
    }

export default Renew;