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
                <p className="p1 position-relative">Your aesthetician listens to everything you have to say about your skin, then tunes into what your skin has to say. Through this artful consultation process a skincare regime is created just for you.<br></br><br></br>Whether you are just dipping your toe into skincare or ready to dive in, <strong>Skin Collective</strong> will guide the way.</p>
             </div>
          </div>
      </div>
      </>
    )
}

export default ImgStack;