import React from 'react'
import Coca from "../../../assets/icon/logo-coca-cola.png"
import Godrej from "../../../assets/icon/logo-godrej.png"
import Oppo from "../../../assets/icon/logo-oppo.png"
import Paypal from "../../../assets/icon/logo-paypal.png"
import Red from "../../../assets/icon/logo.png"
import "./style.css"

const Partner = () => {
  return (
    <div className='partner_container'>
        <h2>Our Partner</h2>
        <div className='partner_icons'>
            <img src={Red} alt=''/>
            <img src={Coca} alt=''/>
            <img src={Godrej} alt=''/>
            <img src={Paypal} alt=''/>
            <img src={Oppo} alt=''/>
        </div>
    </div>
  )
}

export default Partner