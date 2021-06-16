import React from 'react';
import{useState} from 'react';
import {Button, Card, Modal} from 'react-bootstrap';
import {FaInstagram} from 'react-icons/fa';
import {FiFacebook} from 'react-icons/fi';

const Contact = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <div className="location">
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
        </div>
        <div className="form">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Reach Out</Card.Title>
                    <Card.Text>
                    Let Us Know What You're Thinking
                    </Card.Text>
                    <Card.Link onClick={handleShow}>Contact Us</Card.Link>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Reach Out</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="info" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="info" onClick={handleClose}>
                    Send Message
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
        <div className="sm-links">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Follow Us</Card.Title>
                    <Card.Text>
                        <FaInstagram/>
                        <FiFacebook/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </>
    )
}

export default Contact;