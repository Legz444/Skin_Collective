import React from 'react';
import {Figure} from 'react-bootstrap';

const Tegan = () => {
    return(
        <div className="about_Tegan">
            <h1>Tegan Ryan</h1>
            <h3>Founder</h3>
        <Figure className="Tegan_figure">
                <Figure.Image
                    width={250}
                    height={350}
                    alt="Tegan Ryan"
                    src="https://res.cloudinary.com/legz444/image/upload/v1624329767/skin_collective/tegan_wedding_havczl.jpg"
                />
                <Figure.Caption className="Tegan_text text-light p-3 w-50" >
                Tegan has been a licensed aesthetician for 6 years. For 5 of those years, she was the lead aesthetician at a top dermatologist in Boulder. Tegan works with dozens of skincare lines and countless technologies.<br></br><br></br> Her passion is to create a space that utilizes the best of the best.<br></br><br></br>Each product line and piece of equipment has been carefully chosen to tackle tough skin concerns like <strong>pigmentation, acne, sensitivity,</strong> and of course, <strong>aging.</strong> Tegan loves to create a space that evokes the feelings of a day spa but where clients leave the treatment room with noticeable results and are inspired to continue their skincare at home. 
                </Figure.Caption>
                </Figure>
        </div>
    )
}
export default Tegan;