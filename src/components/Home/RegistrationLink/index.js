import React from 'react'
import IMG from  "../../../assets/images/IMG-20230120-WA0072 1.png"
import "./style.css"
import { useNavigate } from 'react-router-dom'

const RegistrationLink = () => {
  const navigate = useNavigate();
  return (
    <div className='registration_container'>
        <div className='registration_wrapper'>
        <img src={IMG} alt="" className='registration_img'/>
        <h3>Let’s make an impact to the YouthTogether</h3>
        <button className='registration_button' onClick={() => navigate("/register")}>Join Us</button>
        </div>
    </div>
  )
}

export default RegistrationLink