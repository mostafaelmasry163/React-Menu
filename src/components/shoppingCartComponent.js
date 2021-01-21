import React, { Component } from 'react';
import Product from './product';

export const Cart = props => {
  const style = !props.product.isInCart
    ? { color: "#80808080", cursor: "pointer" }
    : { cursor: "pointer" };
  return (
    <i
      style={style}
      onClick={() => props.onClick(props.product)}
      className="fas fa-cart-plus"
    ></i>
  );
};

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <React.Fragment>
              <div className="row mb-5">
                <h1 className="flex-fill">Shopping Cart</h1>
                <button
                onClick={this.props.onReset}
                className="btn btn-secondary btn-sm m-2"
                >
                Reset
                </button>
              </div>
                {this.props.products.map(product => (
                <Product
                    key={product.id}
                    product={product}
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
                />
                ))}
            </React.Fragment>
         );
    }
}
 
export default ShoppingCart;