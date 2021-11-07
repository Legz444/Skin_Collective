import React, {Component} from 'react';
// import VariantSelector from './VariantSelector';

class Product extends Component {
  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
  }

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange(event) {
    const target = event.target
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product, selectedOptions)

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image
    });
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  }

  render() {
    let variantImage = this.state.selectedVariantImage || this.props.product.images[0]
    let variant = this.state.selectedVariant || this.props.product.variants[0]
    let variantQuantity = this.state.selectedVariantQuantity || 1
    // let variantSelectors = this.props.product.options.map((option) => {
    //   return (
    //     <VariantSelector
    //       handleOptionChange={this.handleOptionChange}
    //       key={option.id.toString()}
    //       option={option}
    //     />
    //   );
    // });
    return (
      <div className="product">
        <div className="img_container">
          {this.props.product.images.length ? <img src={variantImage.src} alt={`${this.props.product.title} product shot`} className="product_img"/> : null}
          <div className="product_img_overlay">
          <div className="overlay_txt">View</div>
          </div>
        </div>
        <h5 className="product_title">{this.props.product.title}</h5>
        <span className="product_price">${variant.price}</span>
        <label className="product_option">
          Quantity: 
          <input min="1" type="number" defaultValue={variantQuantity} onChange={this.handleQuantityChange}></input>
        </label>
        <button className="product_buy_btn" onClick={() => this.props.addItemToCart(variant.id, variantQuantity)}>Add to Cart</button>
      </div>
    );
  }
}

export default Product;
