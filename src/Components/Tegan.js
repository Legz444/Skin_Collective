import React from 'react';
import {Card} from 'react-bootstrap';

const Tegan = () => {
    return(
        <div className="about_Tegan">
            <Card className="mx-auto tegan_card">
                <Card.Img variant="top" src="https://res.cloudinary.com/legz444/image/upload/v1632758176/skin_collective/DSC05296_o5tgtj.jpg" className="p-5"></Card.Img>
                <Card.Body>
                <Card.Title className="tegan_title">Tegan Ryan</Card.Title>
                <Card.Subtitle className="tegan_title p-2">Founder and Lead Aesthetician</Card.Subtitle>
                <Card.Text className="tegan_text p-3">Tegan has been a licensed aesthetician for 6 years. For 5 of those years, she was the lead aesthetician at a top dermatologist in Boulder and has now started her dream company: <strong>Skin Collective</strong>. Tegan works with dozens of skincare lines and countless technologies, providing her clients with individualized and high quality care.<br></br><br></br> 
                <span>Her passion is to create a space that utilizes the best of the best.</span>
                <br></br><br></br>Each product line and piece of equipment has been carefully chosen to tackle tough skin concerns like <strong>pigmentation, acne, sensitivity,</strong> and of course, <strong>aging.</strong> Tegan loves to create a space that evokes the feelings of a day spa but where clients leave the treatment room with noticeable results and are inspired to continue their skincare at home.</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Tegan;