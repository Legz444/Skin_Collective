import React, { Component } from 'react';
import '../Styles/store.css';
import Products from '../Components/Products';
import "bootstrap/dist/css/bootstrap.min.css";
import{ Navbar, Nav} from 'react-bootstrap';
import {FaInstagram} from 'react-icons/fa';
import {FiFacebook} from 'react-icons/fi';
import {Link} from 'react-router-dom';



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
                <Nav.Link className="d-inline-block p-3" href="https://www.facebook.com/skincollectiveboulder">
                    <FiFacebook/>
                </Nav.Link>
                <Nav.Link className="d-inline-block p-3" href="https://www.instagram.com/boulderskincollective/">
                    <FaInstagram/>
                </Nav.Link>
            </Navbar.Text>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Link to="/">Home</Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <div className="products_container">
            <Products
                products={this.state.products}
                client={this.props.client}
                addVariantToCart={this.addItemToCart}
        />
            </div>
        </div>
        );
    }   
}


export default Store;