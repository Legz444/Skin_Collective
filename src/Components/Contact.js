import React from 'react';
import{useState} from 'react';
import {CardGroup, Button, Card, Form, Modal, Col} from 'react-bootstrap';
import {FaInstagram} from 'react-icons/fa';
import {FiFacebook} from 'react-icons/fi';


const Contact = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <CardGroup>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Location</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Skin Collective</Card.Subtitle>
                <Card.Text>
                Boulder, CO
                </Card.Text>
                <Card.Link href="https://www.google.com/maps/place/2600+Canyon+Blvd,+Boulder,+CO+80302/@40.0171304,-105.2624122,17z/data=!3m1!4b1!4m5!3m4!1s0x876bedd160f07f49:0x158454605ea16e14!8m2!3d40.0171304!4d-105.2602235">Directions</Card.Link>
            </Card.Body>
        </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Reach Out</Card.Title>
                    <Card.Text>
                    Let Us Know What You're Thinking
                    </Card.Text>
                    <Card.Link onClick={handleShow}>Contact Us</Card.Link>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton className="Modal">
                <Modal.Title >Reach Out</Modal.Title>
                </Modal.Header>
                <Modal.Body className="Modal">
                    <Form className="form_container" method="POST" action="https://formsubmit.co/boulderskincollective@gmail.com" >
                        <Form.Row>
                            <Col>
                                    <Form.Control placeholder="First name" name="First Name" required/>
                            </Col>
                            <Col>
                                    <Form.Control placeholder="Last name" name="Last Name" required/>
                            </Col>
                        </Form.Row>
                        <Form.Row><Col><Form.Control type="email" placeholder="Email Address" name="email"></Form.Control></Col></Form.Row>
                        <Form.Row>
                            <Col>
                                    <Form.Control as="textarea" placeholder="Message" rows="8" name="Message" required/>
                            </Col>
                        </Form.Row>
                        <Button className="button" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className="button" type="submit" onClick={handleClose}>
                            Send Message
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Follow Us</Card.Title>
                    <Card.Text>
                        Stay Connected for Updates, Deals and New Products.
                    </Card.Text>
                    <Card.Link href="https://www.instagram.com/boulderskincollective/"><FaInstagram/></Card.Link>
                    <Card.Link href="https://www.facebook.com/skincollectiveboulder"><FiFacebook/></Card.Link>
                </Card.Body>
            </Card>
        </CardGroup>
        </>
    )
}

export default Contact;