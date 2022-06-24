import React, { useState } from 'react';
// import logo from '../assets/images/narasimha.svg';
import '@fortawesome/react-fontawesome';
import 'jquery';
import { Nav, NavDropdown, Container, Navbar } from 'react-bootstrap';
import {Link } from "react-router-dom";





export const Header = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  }
  const hideDropdown = e => {
    setShow(false);
  }
  return (
    <>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
        <Container>
        

          <Navbar.Brand href="#home"><Link to='/'><img className="header-logoimg logo-light" src={'assets/images/narasimha.svg  '} alt="logo" height="32px" width="32px" /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link className='text-decoration-none color--golden' to='/'>Home</Link></Nav.Link>
              <Nav.Link ><Link className='text-decoration-none color--golden' to='/gallery'>Gallery</Link></Nav.Link>
              <Nav.Link ><Link className='text-decoration-none color--golden' to='/seva'>Seva's</Link></Nav.Link>
              <Nav.Link ><Link className='text-decoration-none color--golden' to='/contact-us'>contact us</Link></Nav.Link>
              <NavDropdown title="About" id="collasible-nav-dropdown" show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown} onClick={showDropdown} 
                className='text-decoration-none color--golden'>
                <NavDropdown.Item ><Link className='text-decoration-none color--golden' to='/about-temple'>Temple</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link className='text-decoration-none color--golden' to='/management'>Management</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link className='text-decoration-none color--golden' to='/institutions'>Institutions</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link className='text-decoration-none color--golden' to='/upa-devatha-mandir'>Upa-devatha Mandir</Link></NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
            {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
          
      
        </Container>
      </Navbar>


    </>
  )
}
export default Header
