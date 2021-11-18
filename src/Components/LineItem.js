import React, {Component} from 'react';

class LineItem extends Component{
    constructor(props){
    super(props);

    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
}
// decrement and increment functions.
// variable for the updated quantity and then set the updated quantity in the cart to that
decrementQuantity(lineItemId){
    const updatedQuantity = this.props.line_item.quantity -1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
}
incrementQuantity(lineItemId){
    const updatedQuantity = this.props.line_item.quantity +1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
}
    render(){
        return(
            <li className="line_item">
                <div className="line_item_img">
                    {this.props.line_item.variant.image ? <img src={this.props.line_item.variant.image.src} alt={`${this.props.line_item.title} product shot`} width="200px"/> : null}
                </div>
                <div className="Line-item__content">
                <div className="Line-item__content-row">
                    
                    <span className="Line-item__title">
                    {this.props.line_item.title}
                    </span>
                </div>
                <div className="Line-item__content-row">
                    {/* <div className="Line-item__quantity-container">
                    <button className="Line-item__quantity-update" onClick={() => this.decrementQuantity(this.props.line_item.id)}>-</button>
                    <span className="Line-item__quantity">{this.props.line_item.quantity}</span>
                    <button className="Line-item__quantity-update" onClick={() => this.incrementQuantity(this.props.line_item.id)}>+</button>
                    </div> */}
                    <span className="Line-item__price">
                    $ { (this.props.line_item.quantity * this.props.line_item.variant.price).toFixed(2) }
                    </span>
                    <br></br>
                    <button className="Line-item__remove" onClick={()=> this.props.removeLineItemInCart(this.props.line_item.id)}>Remove Item</button>
                </div>
                </div>
            </li>
        )
    }
}

export default LineItem; 