import React from 'react'
import "./style.css"
import PIC from "../../../assets/images/WhatsApp Image 2023-03-13 at 11.27 3.png"
import VIS from "../../../assets/icon/vision 1.png"
import GOAL from "../../../assets/icon/goal 1.png"


const AboutContent = () => {
  return (
    <div className='about_content'>
      <div className='about_info_one'>
        <div className='about_img_container'>
          <img className='about_img'  src={PIC} alt=''/>
        </div>
        <p className='about_info_paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15
          00s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div className='about_card_container'>
        <div className='about_card'>
          <img src={VIS} alt=''/>
          <h3>Our Vision</h3>
          <p>Lorem Ipsum is simply dummy text of the printing 
              and typesetting industry. Lorem Ipsum has been 
              the industry's standard dummy text ever since the 15
          </p>
        </div>
        <div className='about_card'>
          <img src={GOAL} alt=''/>
          <h3>Our Mission</h3>
          <p>Lorem Ipsum is simply dummy text of the printing 
              and typesetting industry. Lorem Ipsum has been 
              the industry's standard dummy text ever since the 15
          </p>
        </div>
        <div className='about_card'>
          <img src={GOAL} alt=''/>
          <h3>Our Motto</h3>
          <p>Lorem Ipsum is simply dummy text of the printing 
              and typesetting industry. Lorem Ipsum has been 
              the industry's standard dummy text ever since the 15
          </p>
        </div>
      </div>
      <div className='about_spec'>
        <h2>SPECIALIZATION</h2>
        <div className='about_spec_container'>
          <div className='about_spec_card'></div>
          <div className='about_spec_card'></div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent