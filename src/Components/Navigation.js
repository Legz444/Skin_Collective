import React from 'react';
import{ Navbar, Nav} from 'react-bootstrap';



const Navigate = () => {
    return(
        <>
            <Navbar expand="lg" variant="light" bg="light" sticky="top">
                <Navbar.Brand href="#">Skin Collective</Navbar.Brand>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Services & Packages</Nav.Link>
                <Nav.Link href="#">Products</Nav.Link>
                <Nav.Link href="#">Testimonials</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
            </Navbar>
        </>
    )
}
export default Navigate;