import React, {Component} from 'react';
import Product from './Product';
import '../Styles/store.css';

class Products extends Component {
    render() {
        let products = this.props.products.map((product) => {
            return (
                <Product
                addVariantTocart={this.props.addItemToCart}
                client = {this.props.client}
                key= {product.id.toString()}
                product={product}
                />
            );
        });

    return(
            <div className="Product-wrapper">
                {products}
            </div>
        );
    }
}   
export default Products;
