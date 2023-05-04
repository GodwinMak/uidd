import React from 'react'
import "./style.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Icon from "../../../assets/icon/UISS LOGO_VR 1.png"
import Image from 'react-bootstrap/esm/Image';

const RegNavbar = () => {
  return (
    <div className='reg_navbar_container'>
        <Navbar>
            <Container>
                <Nav style={{display: "flex", height: "50%", alignItems: "center"}} className="me-auto">
                    <Nav.Link className='reg_navbar_link'>HOME</Nav.Link>
                    <Nav.Link className='reg_navbar_link'>ABOUT</Nav.Link>
                    <Nav.Link>
                        <Image src={Icon}  className='reg_navbar_icon' />
                    </Nav.Link>
                    <Nav.Link className='reg_navbar_link'>EVENTS</Nav.Link>
                    <Nav.Link className='reg_navbar_link'>PROJECTS</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default RegNavbar