import React from 'react'
import "./style.css"
import PIC from "../../../assets/images/pic.png"
import ICON from "../../../assets/icon/lo 1.png"
import RegNavbar from '../RegNavbar'
const RegHeaderComponent = () => {
  return (
    <header className='reg_header'>
        <div className='reg_container'>
            <img src={PIC} alt='' className='pic'/>
            <RegNavbar/>
            <div className='reg_logo'>
                <img src={ICON} alt='unlogo' />
            </div>
        </div>
    </header>
  )
}

export default RegHeaderComponent