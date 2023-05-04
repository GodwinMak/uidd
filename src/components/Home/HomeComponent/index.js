import React from 'react'
import HeaderComponent from '../HeaderComponent'
import './style.css'
import Content from '../HomeContent'
const HomeComponent = () => {
  return (
    <div className='home_container'>
        <HeaderComponent/>
        <Content/>
    </div>
  )
}

export default HomeComponent