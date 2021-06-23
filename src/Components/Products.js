import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Figure} from 'react-bootstrap';

const Products = () => {
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
                src="https://res.cloudinary.com/legz444/image/upload/v1624384083/skin_collective/iSC_Logo_t7qjfy.png"
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
        <Figure className="product_fig p-3">
            <Figure.Image
                width={100}
                height={100}
                alt="250x250"
                src="https://res.cloudinary.com/legz444/image/upload/v1624384073/skin_collective/IT-LOGO-New-color-pdf_cdu5ui.jpg"
            />
        </Figure>
      </div>
    )
}

export default Products;