import React from 'react'
import './style.css'
import ICON from "../../../assets/images/pngwing 1.png"
import InfoComponent from '../InfoComponent'
import Partner from '../Partner'
import Values from '../Values'
import RegistrationLink from '../RegistrationLink'
import Testimonies from '../Testimonies'
import Footer from '../Footer'
const Content = () => {
  return (
    <div className='content_container'>
        <div className='wrapper'>
            <InfoComponent/>
            <Partner/>
            <Values/>
            <RegistrationLink/>
            <Testimonies/>
            <Footer/>
            <img src={ICON} alt="icon" className='content_image'/>
        </div>
    </div>
  )
}

export default Content