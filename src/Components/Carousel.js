import React from 'react';
import{Carousel} from 'react-bootstrap';

const Photos = () => {
 return(
     <>
        <Carousel fade className="mx-auto">
            <Carousel.Item>
                <img
                className="ss_img d-block w-75 mx-auto"
                src="https://res.cloudinary.com/legz444/image/upload/v1625153399/skin_collective/pexels-maria-orlova-4946936_r3w5a3.jpg"
                alt="Woman's face, close up"
                />
                <Carousel.Caption>
                <h5>Skin Collective is</h5>
                <h2>PERSONALIZED</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="ss_img d-block w-75 mx-auto"
                src="https://res.cloudinary.com/legz444/image/upload/v1628304186/skin_collective/9064445d-173a-4827-9a0d-e4ee83ec9d31_axwmms.jpg"
                alt="facial"
                ></img>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="ss_img d-block w-75 mx-auto"
                src="https://res.cloudinary.com/legz444/image/upload/v1625153397/skin_collective/b80d9f29-766e-4440-96eb-6f92d6d2ee83_avf0wx.jpg"
                alt="Facial Treatment"
                />

                <Carousel.Caption>
                <h5>Skin Collective is</h5>
                <h2>PROFESSIONAL</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="ss_img d-block w-75 mx-auto"
                src="https://res.cloudinary.com/legz444/image/upload/v1627919447/skin_collective/15b1bf56-bcca-4f83-a4c4-f28362c72ed7_ga25yx.jpg"
                alt="facial"
                ></img>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="ss_img d-block w-75 mx-auto"
                src="https://res.cloudinary.com/legz444/image/upload/v1625153396/skin_collective/pexels-vie-studio-6168345_dgpgzh.jpg"
                alt="Dropper of Facial Serum"
                />

                <Carousel.Caption>
                <h5>Skin Collective is</h5>
                <h2>AUTHENTIC</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="ss_img d-block w-75 mx-auto"
                src="https://res.cloudinary.com/legz444/image/upload/v1628304187/skin_collective/afafa2b8-556e-4dbe-8a7b-821b1896e3ab_juxel6.jpg"
                alt="facial"
                ></img>
            </Carousel.Item>
            </Carousel>
     </>
 )
}

export default Photos;