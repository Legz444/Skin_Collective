import React, { Component } from 'react';
import '../Styles/store.css';
import Products from '../Components/Products';
import "bootstrap/dist/css/bootstrap.min.css";
import{ Navbar, Nav} from 'react-bootstrap';
import {FaInstagram} from 'react-icons/fa';
import {FiFacebook} from 'react-icons/fi';
import {BsCart3} from 'react-icons/bs';
import Cart from '../Components/Cart';



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
      collection: [],
      shop: {}
    };
  // set each of the functions to this state with bind()

  this.handleCartClose = this.handleCartClose.bind(this);
  this.addItemToCart = this.addItemToCart.bind(this);
  this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
  this.removeLineItemInCart = this.removeLineItemInCart.bind(this); 
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
            console.log(this.state.products);
        });
        // this.props.client.collection.fetchAll().then((res) => {
        //     this.setState({
        //         collection: res
        //     });
        // });
        this. props.client.shop.fetchInfo().then((res) => {
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
    const checkoutId = this.state.checkout.id

    return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
        this.setState({
            checkout: res
        });
    });
    }

  // update the quantity of an item in the cart
    updateQuantityInCart(lineItemId, quantity) {
        const checkoutId = this.state.checkout.variantId
        const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]

        return this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
            this.setState({
                checkout: res
            });
        });
    }
// remove items Items from Cart
removeLineItemInCart(lineItemId){
    const checkoutId = this.state.checkout.id

    return this.props.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
        this.setState({
            checkout: res
        });
    });
}


    render() {
        return (
        <>
        <div className="store">
            <Navbar collapseOnSelect expand={false} bg="light" variant="light" className="navbar" fixed="top">
            <Navbar.Brand href="#home">
                <img 
                src="https://res.cloudinary.com/legz444/image/upload/v1624299955/skin_collective/primary_logo_sgdmn6.png" 
                width="80"
                height="80"
                className="d-inline-block align-top"
                alt="Skin Collective Logo"
                />
            </Navbar.Brand>
            
            <Navbar.Text className="nav d-flex smicon">
                <Nav.Link className="d-inline-block p-3" href="/">
                    Home
                </Nav.Link>
                <Nav.Link className="d-inline-block p-3" href="https://www.facebook.com/skincollectiveboulder">
                    <FiFacebook/>
                </Nav.Link>
                <Nav.Link className="d-inline-block p-3" href="https://www.instagram.com/boulderskincollective/">
                    <FaInstagram/>
                </Nav.Link>
                {!this.state.isCartOpen &&
                    <button className="cart_btn"
                        onClick={()=> this.setState({isCartOpen: true})}>
                         <BsCart3/>
                    </button>}
            </Navbar.Text>
            </Navbar>
            {/* <div className="sidebar">
                <h1>Collections</h1>
            </div>  */}
            <Products
                products={this.state.products}
                client={this.props.client}
                addItemToCart={this.addItemToCart}
            />
            <Cart
                checkout={this.state.checkout}
                isCartOpen={this.state.isCartOpen}
                handleCartClose={this.handleCartClose}
                updateQuantityInCart={this.updateQuantityInCart}
                removeLineItemInCart={this.removeLineItemInCart}
            />
        </div>
        </>
        );
    }   
}


export default Store;