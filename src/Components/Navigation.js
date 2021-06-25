import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import{ Navbar, Nav} from 'react-bootstrap';
import {FaInstagram} from 'react-icons/fa';
import {FiFacebook} from 'react-icons/fi';


const Navigate = () => {
    return(
        <>
        <Navbar collapseOnSelect expand={false} bg="light" variant="light" className="navbar" fixed="top">
            <Navbar.Brand href="#home">
                <img 
                src="https://res.cloudinary.com/legz444/image/upload/v1624299955/skin_collective/primary_logo_sgdmn6.png" 
                width="80"
                height="80"
                className="d-inline-block align-top"
                alt="Skin Collective Logo"
                />
            </Navbar.Brand>
            
            <Navbar.Text className="d-flex smicon">
                <Nav.Link className="d-inline-block p-4">
                    <FiFacebook/>
                </Nav.Link>
                <Nav.Link className="d-inline-block p-4">
                    <FaInstagram/>
                </Nav.Link>
            </Navbar.Text>
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