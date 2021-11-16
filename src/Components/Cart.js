import React, {Component} from 'react';
import LineItem from '../Components/LineItem';

class Cart extends Component{
    //pass in constructor state
    constructor(props) {
    super(props);

    this.openCheckout = this.openCheckout.bind(this);
    }
    //make a function to open the checkout window and populate it with the client's checkout items
    openCheckout() {
        window.open(this.props.checkout.webUrl);
    }

    render(){
//    make variable for line items so we can map over them and return the lineItem component in cart
    let line_items = this.props.checkout.lineItems.map((line_item) => {
        return (
            <LineItem
                updateQuantityInCart={this.props.updateQuantityInCart}
                removeLineItemInCart={this.props.removeLineItemInCart}
                key={line_item.id.toString()}
                line_item={line_item}
            />
        )
    })
        return(
            <div className={`Cart ${this.props.isCartOpen ? 'Cart--open' : ''}`}>
            <header className="Cart_header">
            <h2 className="Cart_title">Cart</h2>
            <button className="Cart_close" onClick={this.props.handleCartClose}>
                Close</button>
            </header>
            <ul className="Cart_line_items">
                {line_items}
            </ul>
            <footer className="Cart_footer">
            <div className="Cart-info clearfix">
                <div className="Cart-info__total Cart-info__small">Subtotal:</div>
                <div className="Cart-info__pricing">
                <span className="pricing">$ {this.props.checkout.subtotalPrice}</span>
                </div>
            </div>
            <div className="Cart-info clearfix">
                <div className="Cart-info__total Cart-info__small">Taxes:</div>
                <div className="Cart-info__pricing">
                <span className="pricing">$ {this.props.checkout.totalTax}</span>
                </div>
            </div>
            <div className="Cart-info clearfix">
                <div className="Cart-info__total Cart-info__small">Total:</div>
                <div className="Cart-info__pricing">
                <span className="pricing">$ {this.props.checkout.totalPrice}</span>
                </div>
            </div>
            <button className="Cart__checkout button" onClick={this.openCheckout}>Checkout</button>
            </footer>
        </div>
      )
    }
}

export default Cart;
