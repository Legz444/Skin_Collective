import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import{ Navbar, Nav} from 'react-bootstrap';
import {FaInstagram} from 'react-icons/fa';
import {FiFacebook} from 'react-icons/fi';
import {Link} from 'react-router-dom';


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
            
            <Navbar.Text className="nav d-flex smicon">
                <Nav.Link className="d-inline-block p-3" href="https://www.facebook.com/skincollectiveboulder">
                    <FiFacebook/>
                </Nav.Link>
                <Nav.Link className="d-inline-block p-3" href="https://www.instagram.com/boulderskincollective/">
                    <FaInstagram/>
                </Nav.Link>
            </Navbar.Text>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#services">Services & Packages</Nav.Link>
                <Nav.Link href="#products">Products</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="https://www.myaestheticspro.com/clientportal/dsp_loginportal.cfm?6C7A1A2C8B9ED7DBDF0D8A88769FF081">Log-In Patient Portal</Nav.Link>
                <Link to="/store">Online Store</Link>
                
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default Navigate;