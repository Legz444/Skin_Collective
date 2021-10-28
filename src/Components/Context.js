// import React, { Component } from 'react';

// const ShopContext = React.createContext();

// class ShopProvider extends Component {
// // create initial state. we want to hold the products which come in as an array of objects. We need to hold the single product, when viewing it, which comes in as an object. We need a checkout cart for every individual user. And we want the cart to open when a user adds the product to the checkout.
//     state = {
//         products: [],
//         product: {},
//         checkout: {},
//         isCartOpen: false,
//         test: 'test'
//     } 
//     componentDidMount(){
//         this.createCheckout()
//     }
//     createCheckout = async(client) => {
//         const checkout = await client.checkout.create()
//         this.setState({checkout: checkout})
//     }

//     addItemToCart = async(varientId, quantity, client) =>{
//         const itemToAdd = [{
//             varientId,
//             quantity: parseInt(quantity, 10)
//         }]
//         const checkout = await client.checkout.itemToAdd(this.state.checkout.id, itemToAdd)
//         this.setState({ checkout: checkout })
//     }

//     fetchAllProducts = async(client) =>{
//         const allProducts = await client.product.fetchAll();
//         this.setState({allProducts: allProducts})
//     }

//     fetchProductWithId = async(id, client) =>{
//         const productWithId= await client.products.fetch(id);
//         this.setState({productWithId: productWithId})
//     }

//     closeCart = async() =>{
//         this.setState({isCartOpen: false})
//     }

//     openCart = async() =>{
//         this.setState({isCartOpen: true})
//     }

//     // addDiscount = async() =>{

//     // }
//     // removeDiscount = async() =>{

//     // }

//     render() {
//         return(
//             <ShopContext.Provider 
//                 value={{
//                     ...this.state,
//                     addItemToCart: this.addItemToCart,
//                     fetchAllProducts: this.fetchAllProducts,
//                     fetchProductWithId: this.fetchProductWithId,
//                     closeCart: this.closeCart,
//                     openCart: this.openCart
//                 }}
//             >
//                 {this.props.children}
//             </ShopContext.Provider>
//         )
//     }
// }
// const ShopConsumer = ShopContext.Consumer;
// export { ShopConsumer, ShopContext };
// export default ShopProvider;
