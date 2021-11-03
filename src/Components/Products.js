import React, {Component} from 'react';
import Product from './Product';
import '../Styles/store.css';

class Products extends Component {
    
    render() {
        let products = this.props.products.map((product) => {
            return (
                <Product
                addItemToCart={this.props.addItemToCart}
                client = {this.props.client}
                key= {product.id.toString()}
                product={product}
                />
            );
        });

    return(
            <div className="product_grid">
                {products}
            </div>
        );
    }
}   
export default Products;
