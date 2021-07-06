import React from 'react';
import{Carousel} from 'react-bootstrap';

const Photos = () => {
 return(
     <>
        <Carousel fade>
            <Carousel.Item>
                <img
                className="ss_img d-block w-100"
                src="https://res.cloudinary.com/legz444/image/upload/v1625153399/skin_collective/pexels-maria-orlova-4946936_r3w5a3.jpg"
                alt="Woman's face, close up"
                />
                <Carousel.Caption>
                <h6>The Skin Collective is</h6>
                <h2>PERSONALIZED</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="ss_img d-block w-100"
                src="https://res.cloudinary.com/legz444/image/upload/v1625153397/skin_collective/b80d9f29-766e-4440-96eb-6f92d6d2ee83_avf0wx.jpg"
                alt="Facial Treatment"
                />

                <Carousel.Caption>
                <h6>The Skin Collective is</h6>
                <h2>PROFESSIONAL</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="ss_img d-block w-100"
                src="https://res.cloudinary.com/legz444/image/upload/v1625153396/skin_collective/pexels-vie-studio-6168345_dgpgzh.jpg"
                alt="Dropper of Facial Serum"
                />

                <Carousel.Caption>
                <h6>The Skin Collective is</h6>
                <h2>AUTHENTIC</h2>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
     </>
 )
}

export default Photos;