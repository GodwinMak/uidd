import React from 'react';
import './style.css'
import { Card } from 'react-bootstrap';

const InfoComponent = () => {
  return (
    <div className='info_container'>
      <div style={{height: "inherit", width: "50%"}}>
        <video controls style={{height: "inherit", width: "100%"}}  ></video>
      </div>
      <div  style={{height: "inherit", width: "50%"}}>
        <Card style={{height: "100%", border: "none"}}>
          <Card.Body>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default InfoComponent 