import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../assets/smartify-removebg-preview.png'

function Header() {
    return (
        <>
            <Navbar style={{backgroundColor:'#003366'}} expand="lg">
                <Container >
                    <Navbar.Brand style={{color:'white'}} href="#home"><img src={logo} alt="" width={'120px'} className='rounded vh-20' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex justify-content-between fs-5 ">
                           <div className='d-flex'>
                                <Nav.Link style={{color:'white'}} className='nav-link' as={Link} to="/">Home</Nav.Link>
                                <Nav.Link style={{color:'white'}} as={Link} to="/dashboard">Dashboard</Nav.Link>
                                <Nav.Link style={{color:'white'}} as={Link} to="/goalsetting">Goal</Nav.Link>
                                <Nav.Link style={{color:'white'}} as={Link} to="/guides">Guide</Nav.Link>
                                <Nav.Link style={{color:'white'}} href="#contact">Contact Us</Nav.Link>
                           </div>
                                    <div className='ms-auto'>
                                    <Nav.Link style={{color:'white'}} as={Link} to="/login">Login</Nav.Link>
                                    </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
