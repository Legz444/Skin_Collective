import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Figure} from 'react-bootstrap';

const ProductIcons = () => {
    return(
        <div className="product-cards">
            {/* <img class="img-responsive" src="https://res.cloudinary.com/legz444/image/upload/v1624384125/skin_collective/hydrafacial_logo_l3kxjy.svg" alt="Hydrafacial Logo" width="100px"></img>
            <img class="img-responsive" src="https://res.cloudinary.com/legz444/image/upload/v1624384087/skin_collective/Avene_logo_qd3cge.png" alt="Avene Logo" width="100px"></img>
            <img class="img-responsive" src="https://res.cloudinary.com/legz444/image/upload/v1624384087/skin_collective/Avene_logo_qd3cge.png" alt="Avene Logo" width="100px"></img>
         */}
        
        
        <Figure className="product-fig p-3">
            <Figure.Image
                width={100}
                height={100}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1624384125/skin_collective/hydrafacial_logo_l3kxjy.svg"
            />
        </Figure>
        <Figure className="product-fig p-3">
            <Figure.Image
                width={100}
                height={100}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1624384087/skin_collective/Avene_logo_qd3cge.png"
            />
        </Figure>
        <Figure className="product-fig p-3">
            <Figure.Image
                width={100}
                height={100}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1624384085/skin_collective/Obagi_logo_ajflty.png"
            />
        </Figure>
        <Figure className="product-fig p-3">
            <Figure.Image
                width={100}
                height={100}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1624384077/skin_collective/elta_logo_gwtzur.svg"
            />
        </Figure>
        <Figure className="product-fig p-3">
            <Figure.Image
                width={100}
                height={100}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1626197471/skin_collective/iS_Clinical_Logo_1600x_k4ntrv.png"
            />
        </Figure>
        <Figure className="product_fig p-3">
            <Figure.Image
                width={100}
                height={100}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1634658299/skin_collective/Collagen_PIN_logo_Final-01_jbld9v.png"
            />
        </Figure>
        <Figure className="product_fig p-3">
            <Figure.Image
                width={100}
                height={100}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1633966363/skin_collective/Glytone_Logo_-_No_background_cvwrzl.png"
            />
        </Figure>
      </div>
    )
}

export default ProductIcons;