import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import{ Navbar, Nav} from 'react-bootstrap';
import {FaInstagram} from 'react-icons/fa';
import {FiFacebook} from 'react-icons/fi';


const Navigate = () => {
    return(
        <>
        <Navbar collapseOnSelect expand={false} bg="light" variant="light">
            <Navbar.Brand href="#home">
                Skin Collective
            </Navbar.Brand>
            <Nav.Link><FiFacebook/></Nav.Link>
            <Nav.Link><FaInstagram/></Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#services">Services & Packages</Nav.Link>
                <Nav.Link href="#products">Products</Nav.Link>
                <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default Navigate;