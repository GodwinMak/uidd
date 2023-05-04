import React from 'react'
import "./style.css"
import PIC from "../../../assets/images/home 1.png"
import ICON from "../../../assets/icon/lo 1.png"
import EventNavbar from '../EventNavbar'

const EventHeader = () => {
  return (
    <div>
      <header className='reg_header'>
        <div className='reg_container'>
            <img src={PIC} alt='' className='pic'/>
            <EventNavbar/>
            <div className='reg_logo'>
                <img src={ICON} alt='unlogo' />
            </div>
            <div className='about_paragraph'>
              <h2 style={{textAlign: "center"}}>Events</h2>
              <p style={{textAlign: "center"}}>We aspire Creativity and Innovative Spirits among  the University students </p>
            </div>
        </div>
    </header>
    </div>
  )
}

export default EventHeader