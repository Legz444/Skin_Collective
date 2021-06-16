import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap';

const Services = () =>{
    return(
        <>
        <div className="menu">
            <h1>Services & Packages</h1>
            <h3>Facials</h3>
                <h4>$60</h4>
                <h6>This explains the service in more detail</h6>
            <h3>Facials</h3>
                <h4>$60</h4>
                <h6>This explains the service in more detail</h6>
            <h3>Facials</h3>
                <h4>$60</h4>
                <h6>This explains the service in more detail</h6>
                <Button variant="info">Schedule Now</Button>
        </div>
        
        </>
    )
}

export default Services;