import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Accordion, Card} from 'react-bootstrap';


const Services = () =>{
    return(
        <>
        <div className="menu">
            <h3>Services & Packages</h3>
        <Accordion className="service_menu w-75 mx-auto">
            <Card className="card">
                <Card.Header>
                <Accordion.Toggle className="accordion_title" as={Button} variant="link" eventKey="0">
                    Facials
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Accordion className="single_service">
                        <Accordion.Toggle as={Button} variant="link" eventKey="01">
                            <h4>Custom Facial</h4>
                        </Accordion.Toggle>
                            <h5>$99-$115</h5>
                        <Accordion.Collapse eventKey="01">
                            <h5>Description</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="02">
                            <h4>Fire and Ice Facial</h4>
                        </Accordion.Toggle>
                            <h5>$115</h5>
                        <Accordion.Collapse eventKey="02">
                            <h5>Description</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="03">
                            <h4>HydraFacial</h4>
                        </Accordion.Toggle>
                            <h5>$170</h5>
                        <Accordion.Collapse eventKey="03">
                            <h5>Description</h5>
                        </Accordion.Collapse>
                        
                        <Accordion.Toggle as={Button} variant="link" eventKey="04">
                            <h4>Microneedling</h4>
                        </Accordion.Toggle>
                            <h5>$299</h5>
                        <Accordion.Collapse eventKey="04">
                            <h5>Description</h5>
                        </Accordion.Collapse>
                        
                        <Accordion.Toggle as={Button} variant="link" eventKey="05">
                            <h4>Dermaplane</h4>  
                        </Accordion.Toggle>
                            <h5>$60</h5>
                        <Accordion.Collapse eventKey="05">
                            <h5>Description</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="06">
                            <h4>Dermaplane Add-On</h4>
                        </Accordion.Toggle>
                            <h5>$40</h5>
                        <Accordion.Collapse eventKey="06">
                            <h5>Description</h5>
                        </Accordion.Collapse>
                        
                        <Accordion.Toggle as={Button} variant="link" eventKey="07">
                            <h4>Extractions</h4>
                        </Accordion.Toggle>
                            <h5>$60</h5>
                        <Accordion.Collapse eventKey="07">
                            <h5>Description</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="08">
                            <h4>Chemical peel</h4>
                        </Accordion.Toggle>
                            <h5>$99</h5>
                        <Accordion.Collapse eventKey="08">
                            <h5>Description</h5>
                        </Accordion.Collapse>
                        
                        <Accordion.Toggle as={Button} variant="link" eventKey="09">
                            <h4>Advanced Chemical Peel</h4>
                        </Accordion.Toggle>
                            <h5>$150</h5>
                        <Accordion.Collapse eventKey="09">
                            <h5>Description</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="010">
                            <h4>Teen Facial</h4>
                        </Accordion.Toggle>
                            <h5>$60</h5>
                        <Accordion.Collapse eventKey="010">
                            <h5>Description</h5>
                        </Accordion.Collapse>
                    </Accordion>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card">
                <Card.Header>
                <Accordion.Toggle className="accordion_title" as={Button} variant="link" eventKey="1">
                    Brow and Lashes
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                    <Accordion className="single_service">
                        <Accordion.Toggle as={Button} variant="link" eventKey="11">
                            <h4>Lash Tint</h4>
                        </Accordion.Toggle>
                            <h5>$25</h5>
                        <Accordion.Collapse eventKey="11">
                            <h5>Description</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="12">
                            <h4>Brow Tint</h4>
                        </Accordion.Toggle>
                            <h5>$15</h5>
                        <Accordion.Collapse eventKey="12">
                            <h5>Description</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="13">
                            <h4>Brow and Lash</h4>
                        </Accordion.Toggle>
                            <h5>$30</h5>
                        <Accordion.Collapse eventKey="13">
                            <h5>Description</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="14">
                            <h4>Add-On Lash Tint</h4>
                        </Accordion.Toggle>
                            <h5>$15</h5>
                        <Accordion.Collapse eventKey="14">
                            <h5>Description</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="15">
                            <h4>Add-On Brow Tint</h4>
                        </Accordion.Toggle>
                            <h5>$10</h5>
                        <Accordion.Collapse eventKey="15">
                            <h5>Description</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="16">
                            <h4>Brow Wax</h4>
                        </Accordion.Toggle>
                            <h5>$15</h5>
                        <Accordion.Collapse eventKey="16">
                            <h5>Description</h5>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="link" eventKey="17">
                            <h4>Add-On Brow Wax</h4>
                        </Accordion.Toggle>
                            <h5>$5</h5>
                        <Accordion.Collapse eventKey="17">
                            <h5>Description</h5>
                        </Accordion.Collapse>
                    </Accordion>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card">
                <Card.Header>
                <Accordion.Toggle className="accordion_title" as={Button} variant="link" eventKey="2">
                    Packages
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <h4>4 HydraFacials for $500 ($125 each)</h4>

                    <h4>3 Microneedles for $750 ($250 each)</h4>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
            <Button className="button" href="https://www.myaestheticspro.com/booknow/index.cfm?6C7A1A2C8B9ED7DBDF0D8A88769FF081">Book Now</Button>
        </div>
        
        </>
    )
}

export default Services;