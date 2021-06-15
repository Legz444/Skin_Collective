import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Figure} from 'react-bootstrap';

const Products = () => {
    return(
        <div className="product-cards">
        <Figure>
            <Figure.Image
                width={150}
                height={150}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1623779760/circle_evjqme.png"
            />
            <Figure.Caption>
                <h5>A little about this product</h5>
                <h6>$$$</h6>
            </Figure.Caption>
        </Figure>
        <Figure>
            <Figure.Image
                width={150}
                height={150}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1623779760/circle_evjqme.png"
            />
            <Figure.Caption>
                <h5>A little about this product</h5>
                <h6>$$$</h6>
            </Figure.Caption>
        </Figure>
        <Figure>
            <Figure.Image
                width={150}
                height={150}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1623779760/circle_evjqme.png"
            />
            <Figure.Caption>
                <h5>A little about this product</h5>
                <h6>$$$</h6>
            </Figure.Caption>
        </Figure>
        <Figure>
            <Figure.Image
                width={150}
                height={150}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1623779760/circle_evjqme.png"
            />
            <Figure.Caption>
                <h5>A little about this product</h5>
                <h6>$$$</h6>
            </Figure.Caption>
        </Figure>
        <Figure>
            <Figure.Image
                width={150}
                height={150}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1623779760/circle_evjqme.png"
            />
            <Figure.Caption>
                <h5>A little about this product</h5>
                <h6>$$$</h6>
            </Figure.Caption>
        </Figure>
        <Figure>
            <Figure.Image
                width={150}
                height={150}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1623779760/circle_evjqme.png"
            />
            <Figure.Caption>
                <h5>A little about this product</h5>
                <h6>$$$</h6>
            </Figure.Caption>
        </Figure>
      </div>
    )
}

export default Products;