import React, { Component } from 'react';
import '../Styles/store.css';
import Products from '../Components/Products';
import { timers } from 'jquery';
// import ShopContext from '../Components/Context';



class Store extends Component {
      // create a constructor for the component
  constructor(){
    super();
  //set initial state of the application
    this.state ={
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      product: {},
      shop: {}
    };
  // set each of the functions to this state with bind()

  this.handleCartClose = this.handleCartClose.bind(this);
  this.addItemToCart = this.addItemToCart.bind(this);
  this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
  this.removeLineItemsInCart = this.removeLineItemsInCart.bind(this); 
}

  // create functions

  componentWillMount() {
    this.props.client.checkout.create().then((res) => {
      this.setState({
        checkout: res
      });
    });
    this.props.client.product.fetchAll().then((res) => {
        this.setState({
            products: res
        });
    });
    this. props.client.shop. fetchInfo().then((res) => {
        this.setState({
            shop: res
        });
    });
  }
  //close Cart
  handleCartClose(){
    this.setState({
      isCartOpen: false
    });
  }

  // add items to cart, set open cart and set checkout state
  addItemToCart(variantId, quantity){
    this.setState({
      isCartOpen: true
    });
    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
    const checkoutId = this.state.checkout.variantId

    return this.props.cient.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.setState({
        checkout: res
      });
    });
  }

  // update the quantity of an item in the cart
  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.variantId
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]
  
    return this.props.ciient.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      this.setState({
        checkout: res
      });
    });
  }
// remove items Items from Cart
removeLineItemsInCart(lineItemId){
  const checkoutId = this.state.checkout.id

  return this.props.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
    this.setState({
      checkout: res
    });
  });
}
    // const { fetchAllProduct, products } = useContext(ShopContext);

    // useEffect(() =>{
    //     fetchAllProduct()
    //     return() => {

    //     };
    // }, [fetchAllProduct]);

    render() {
        return (
        <div className="Store">
            <header className="Store__header">   
            </header>
            <body>
            <Products
                products={this.state.products}
                client={this.props.client}
                addVariantToCart={this.addItemToCart}
        />
            </body>
        </div>
        );
    }   
}


export default Store;