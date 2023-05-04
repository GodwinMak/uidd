import React from 'react'
import './style.css'
import ICON from "../../../assets/icon/lo 1.png"
import Image from "../../../assets/images/WhatsApp Image 2023-03-13 at 11.27 1.png"
import NavbarComponent from '../NavbarComponent'
const HeaderComponent = () => {
  return (
    <header>
        <div className='wrapper'>
            {/* <div className='header_image_blur'/> */}
            <NavbarComponent/>
            <img src={Image} alt="image1" className='header_image'/>
            <div className='welcome'>
                <h1>Welcome UISS</h1>
            </div>
            <div className='logo'>
                <img src={ICON} alt='unlogo'/>
            </div>
            <div className='paragraph'>
                <p>Join a Student Community that Fuels Creativity and Drives Innovation</p>
            </div>
        </div>
    </header>
  )
}

export default HeaderComponent