import React from 'react'
import "./style.css"
import Call from "../../../assets/icon/call 2.png";
import Mail from "../../../assets/icon/mail  2.png";
import Pin from "../../../assets/icon/pin 5.png"
import Fb from "../../../assets/icon/facebook.png"
import Ig from "../../../assets/icon/Frame.png"
import Ld from "../../../assets/icon/instagram.png"
import Tw from "../../../assets/icon/linkedin.png"

const Footer = () => {
  return (
    <div className='Footer_container'>
      <div className='footer_content'>
        <div className='footer_card email_input'>
          <h6>STAY CONNECTED WITH US</h6>
          <div>
            <form>
              <label>Email</label>
              <input type='email' placeholder='Enter your Email'/>
              <button type='submit'>Contact Us</button>
            </form>
          </div>
        </div>
        <div className='footer_card contacts'>
          <div className='info'>
            <img src={Pin} alt=''/>
            <span>COICT,Kijitonyama</span>
          </div>
          <div  className='info'>
            <img src={Mail} alt=''/>
            <span>udsmict@gmail.com</span>
          </div >
          <div className='info'>
            <img src={Call} alt=''/>
            <span>+255765345345</span>
          </div>
        </div>
        <div className='footer_card social'>
          <h6>Follow us on social media</h6>
          <div className='social_icon'>
            <img src={Ld} alt=''/>
            <img  src={Ig} alt=''/>
            <img  src={Tw} alt=''/>
            <img  src={Fb} alt=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer