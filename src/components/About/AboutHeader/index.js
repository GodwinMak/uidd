import React from 'react'
import PIC from "../../../assets/images/johannes-plenio-fmTde1Fe23A-unsplash 1.png"
import ICON from "../../../assets/icon/lo 1.png"
import "./style.css"
import AboutNavbar from '../AboutNavbar'
const AboutHeader = () => {
  return (
    <header className='about_header'>
      <div className='about_container'>
        <img src={PIC} alt='' className='pic'/>
        <AboutNavbar/>
        <div className='about_logo'>
                <img src={ICON} alt='unlogo' />
        </div>
        <div className='about_paragraph'>
          <h2 style={{textAlign: "center"}}>About Us</h2>
          <p style={{textAlign: "center"}}>We aspire Creativity and Innovative Spirits among  the University students</p>
        </div>
      </div>
    </header>
  )
}

export default AboutHeader