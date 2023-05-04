import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Icon from "../../../assets/icon/UISS LOGO_VR 1.png"
import Image from "react-bootstrap/Image"
const NavbarComponent = () => {
  return (
    <div className='navbar_container'>
        <Navbar>
            <Container>
                <Nav style={{display: "flex", height: "50%", alignItems: "center"}} className="me-auto">
                    <Nav.Link className='_navbar_link' href='/'>HOME</Nav.Link>
                    <Nav.Link className='_navbar_link' href='/about'>ABOUT</Nav.Link>
                    <Nav.Link href='/'>
                        <Image src={Icon}  className='navbar_icon'/>
                    </Nav.Link>
                    <Nav.Link className='_navbar_link' href='/event'>EVENTS</Nav.Link>
                    <Nav.Link className='_navbar_link' href='/project'>PROJECTS</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavbarComponent