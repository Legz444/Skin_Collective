import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Accordion, Card} from 'react-bootstrap';
import {MdSpa} from 'react-icons/md';

const Services = () =>{
    return(
        <>
        <div className="menu">
            <h3>Services & Packages</h3>
        <Accordion className="service_menu w-50 mx-auto">
            <Card className="card">
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Facials
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <h4>HydraFacial</h4>
                    <h5>$170</h5>
                    <MdSpa/>
                    <h4>Express HydraFacial (30/45 min, no fluff)</h4>
                    <h5>$150</h5>
                    <MdSpa/>
                    <h4>Fire and Ice Facial</h4>
                    <h5>$99</h5>
                    <MdSpa/>
                    <h4>Microneedling</h4>
                    <h5>$299</h5>
                    <MdSpa/>
                    <h4>Dermaplane</h4>
                    <h5>$60</h5>
                    <MdSpa/>
                    <h4>Dermaplane Add-On</h4>
                    <h5>$40</h5>
                    <MdSpa/>
                    <h4>Extractions</h4>
                    <h5>$60</h5>
                    <MdSpa/>
                    <h4>Chemical peel</h4>
                    <h5>$99</h5>
                    <MdSpa/>
                    <h4>Advanced Chemical Peel</h4>
                    <h5>$150</h5>
                    <MdSpa/>
                    <h4>Teen Facial</h4>
                    <h5>$60</h5>
                    <MdSpa/>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card">
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Brow and Lashes
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                    <h4>Lash Tint</h4>
                    <h5>$25</h5>
                    <MdSpa/>
                    <h4>Brow Tint</h4>
                    <h5>$15</h5>
                    <MdSpa/>
                    <h4>Brow and Lash</h4>
                    <h5>$30</h5>
                    <MdSpa/>
                    <h4>Add-On Lash Tint</h4>
                    <h5>$15</h5>
                    <MdSpa/>
                    <h4>Add-On Brow Tint</h4>
                    <h5>$10</h5>
                    <MdSpa/>
                    <h4>Brow Wax</h4>
                    <h5>$15</h5>
                    <MdSpa/>
                    <h4>Add-On Brow Wax</h4>
                    <h5>$5</h5>
                    <MdSpa/>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card">
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Packages
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <h4>4 HydraFacials for $500 ($125 each)</h4>
                    <MdSpa/>
                    <h4>3 Microneedles for $750 ($250 each)</h4>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
            <Button className="button">Schedule Now</Button>
        </div>
        
        </>
    )
}

export default Services;