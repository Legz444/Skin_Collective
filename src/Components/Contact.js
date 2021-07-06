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
                <Card.Link>Directions</Card.Link>
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
                    <Form className="form_container">
                        <Form.Row>
                            <Col>
                                
                                    <Form.Control placeholder="First name" />

                            </Col>
                            <Col>
  
                                    <Form.Control placeholder="Last name" />
                         
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                              
                                    <Form.Control as="textarea" placeholder="Message" rows="8"/>
                             
                            </Col>
                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="Modal">
                <Button className="button" onClick={handleClose}>
                    Close
                </Button>
                <Button className="button" onClick={handleClose}>
                    Send Message
                </Button>
                </Modal.Footer>
            </Modal>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Follow Us</Card.Title>
                    <Card.Text>
                        Stay Connected for Updates, Deals and New Products.
                    </Card.Text>
                    <Card.Link href="https://instagram.com/skincollectiveboulder?utm_medium=copy_link"><FaInstagram/></Card.Link>
                    <Card.Link href="https://www.facebook.com/skincollectiveboulder"><FiFacebook/></Card.Link>
                </Card.Body>
            </Card>
        </CardGroup>
        </>
    )
}

export default Contact;