import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Figure} from 'react-bootstrap';

const Products = () => {
    return(
        <div className="product-cards">
        <Figure className="product-fig">
            <Figure.Image
                width={150}
                height={150}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1624384125/skin_collective/hydrafacial_logo_l3kxjy.svg"
            />
        </Figure>
        <Figure className="product-fig">
            <Figure.Image
                width={150}
                height={150}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1624384087/skin_collective/Avene_logo_qd3cge.png"
            />
        </Figure>
        <Figure className="product-fig">
            <Figure.Image
                width={150}
                height={150}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1624384085/skin_collective/Obagi_logo_ajflty.png"
            />
        </Figure>
        <Figure className="product-fig">
            <Figure.Image
                width={150}
                height={150}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1624384083/skin_collective/iSC_Logo_t7qjfy.png"
            />
        </Figure>
        <Figure className="product-fig">
            <Figure.Image
                width={150}
                height={150}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1624384077/skin_collective/elta_logo_gwtzur.svg"
            />
        </Figure>
        <Figure className="product_fig">
            <Figure.Image
                width={150}
                height={150}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1624384073/skin_collective/IT-LOGO-New-color-pdf_cdu5ui.jpg"
            />
        </Figure>
      </div>
    )
}

export default Products;