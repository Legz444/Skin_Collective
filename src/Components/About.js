import React from 'react';
import {FaInstagram} from 'react-icons/fa';
import {FiFacebook} from 'react-icons/fi';
import ImgStack from './ImgStack';

const About = () => {
    return(
        <>
        <div className="about_container">
            <div className="stack1"><img src="https://res.cloudinary.com/legz444/image/upload/v1623351535/skin_collective/raphael-lovaski-Pe9IXUuC6QU-unsplash_l4yonv.jpg" width="350px" height="300px"></img></div>
            <div className="stack2"><img src="https://res.cloudinary.com/legz444/image/upload/v1624299958/skin_collective/white_texture_qdcqna.jpg" width="500" height="500px"></img></div>
            <div className="about_text"><p>As soon as you are on the table, Tegan listens to everything you have to say about your skin, then tunes into what your skin has to say. Through this artful consultation process a skincare regime is created just for you. Whether you are just dipping your toe into skincare or ready to dive in, Skin Collective will guide the way.</p>
            <br></br>
            <div><FaInstagram className="socmed"/> <FiFacebook className="socmed"/></div>
        </div>
        </div>
        </>
    )
}

export default About;