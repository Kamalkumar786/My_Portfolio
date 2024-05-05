import { color } from 'framer-motion';
import React from 'react'
import { Container,Nav,Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';


const Header = () => {
    let activeStyle={
        color:"#fff",
    };
  return (
    <div className='header'>
        <Navbar expand="lg" fixed="top">
            <Container>
                <Navbar.Brand>KAMAL NAYAN YAGIK</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className='justify-content-end'></Navbar.Collapse>
                    <Nav className='ml-auto'>
                        <NavLink to="/" className="nav-link" style={({isActive}) => (isActive ? activeStyle :undefined)}>Home</NavLink>
                        <NavLink to="/projects" className="nav-link" style={({isActive}) => (isActive ? activeStyle :undefined)}>Projects</NavLink>
                        <NavLink to="/about" className="nav-link" style={({isActive}) => (isActive ? activeStyle :undefined)}>About</NavLink>
                        <NavLink to="/contact" className="nav-link" style={({isActive}) => (isActive ? activeStyle :undefined)}>Contact</NavLink>
                    </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header