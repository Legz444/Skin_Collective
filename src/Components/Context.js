require('dotenv').config();
import React, {Component} from 'react';
import Client from 'shopify-buy';

const Token = process.env.AccessToken;
const ShopContext = React.createContext();

const client = Client.buildClient({
    domain: 'boulder-skin-collective.myshopify.com',
    storefrontAccessToken: Token
})

class ShopProvider extends Component {
// create initial state. we want to hold the products which come in as an array of objects. We need to hold the single product, when viewing it, which comes in as an object. We need a checkout cart for every individual user. And we want the cart to open when a user adds the product to the checkout.
    state = {
        products: [],
        product: {},
        checkout: {},
        isCartOpen: false,
        test: 'test'
    } 

    render() {
        return(
            <ShopContext.Provider value={[...this.state]}>
            {this.props.children}
            </ShopContext.Provider>
        )
    }
}
const ShopConsumer = ShopContext.Consumer;
export { ShopConsumer, ShopContext };
export default ShopProvider;
