import React from 'react';
import{Carousel} from 'react-bootstrap';

const Photos = () => {
 return(
     <>
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://res.cloudinary.com/legz444/image/upload/v1625067312/skin_collective/pexels-maria-orlova-4946936_s9upzy.jpg"
                alt="Woman's face, close up"
                />
                <Carousel.Caption>
                <h6>The Skin Collective is</h6>
                <h2>PERSONALIZED</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://res.cloudinary.com/legz444/image/upload/v1624753545/skin_collective/b80d9f29-766e-4440-96eb-6f92d6d2ee83_mrbivf.jpg"
                alt="Facial Treatment"
                />

                <Carousel.Caption>
                <h6>The Skin Collective is</h6>
                <h2>PROFESSIONAL</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://res.cloudinary.com/legz444/image/upload/c_limit,h_500,w_800/v1624753635/skin_collective/pexels-vie-studio-6168344_wkzpoa.jpg"
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