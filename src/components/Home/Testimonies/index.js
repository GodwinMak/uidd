import React from 'react'
import "./style.css"

const Testimonies = () => {
  return (
    <div className='testimonies_container'>
        <div className='testimonies_wrapper'>
            <h2>Testimonies</h2>
            <p>We aspire Creativity and innovative spirits among the university students</p>
            <div className='testimonies_content'>
                <div className='testimonies_card'>
                    <p>"Lorem Ipsum for the betterness of the good things we do and produce but we keep in mind the service and luck."</p>
                    <div className='testmonie_name'>
                        <span>~Dr Baraka Maiseli HEAD OF DEPARTMENT,ETE</span>
                    </div>
                </div>
                <div className='testimonies_card'>
                    <p>"Lorem Ipsum for the betterness of the good things we do and produce but we keep in mind the service and luck."</p>
                    <div className='testmonie_name'>
                        <span>~Kedyson Zacharia DELOITTE</span>
                    </div>
                </div>
                <div className='testimonies_card'>
                    <p>"Lorem Ipsum for the betterness of the good things we do and produce but we keep in mind the service and luck."</p>
                    <div className='testmonie_name'>
                        <span>~Ms Angela Mwemezi KPMG</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonies