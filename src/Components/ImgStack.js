import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const ImgStack = () => {
    return(
      <>
      <div className="container-fluid position-relative">
        <div className="imageStack">
            <div className="first position-absolute">
            </div>
            <div className="second position-absolute">
            <h2 className="p2">Tegan Ryan</h2>
            <h4 className="p2">Founder & Lead Aesthetician</h4>
            </div>
            <div className="imgText position-absolute">
            <h4 className="p1">Welcome to Skin Collective</h4>
                <p className="p1">Your aesthetician listens to everything you have to say about your skin, then tunes into what your skin has to say. Through this artful consultation process a skincare regime is created just for you.<br></br><br></br>Whether you are just dipping your toe into skincare or ready to dive in, <strong>Skin Collective</strong> will guide the way.</p>
            
              <p className="p2">
                <br></br>Tegan has been a licensed aesthetician for 6 years. For 5 of those years, she was the lead aesthetician at a top dermatologist in Boulder. Tegan works with dozens of skincare lines and countless technologies.<br></br><br></br> Her passion is to create a space that utilizes the best of the best.<br></br><br></br>Each product line and piece of equipment has been carefully chosen to tackle tough skin concerns like <strong>pigmentation, acne, sensitivity,</strong> and of course, <strong>aging.</strong> Tegan loves to create a space that evokes the feelings of a day spa but where clients leave the treatment room with noticeable results and are inspired to continue their skincare at home. </p>
{/* 
                <img className = "p2" id="headshot" src="https://res.cloudinary.com/legz444/image/upload/v1624329767/skin_collective/tegan_wedding_havczl.jpg"></img> */}
            </div>
          </div>
      </div>
      </>
    )
}

export default ImgStack;