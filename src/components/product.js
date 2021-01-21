import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    
    getClasses() {
        return this.props.product.count === 0 ? 
        "badge badge-warning m-2" 
        : "badge badge-info m-2";
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-8">
                <span>
                    <p>{this.props.product.name}</p>
                </span>
                </div>
                <div className="col">
                <span style={{ cursor: "pointer" }} onClick={() => this.props.onDelete(this.props.product)}>
                    <i className="fas fa-trash m-2 float-right"></i>
                </span>
                <button
                    onClick={() => this.props.onIncrement(this.props.product)}
                    className="btn btn-primary btn-sm float-right"
                >
                    +
                </button>
                <span className={this.getClasses()+" float-right"}>{this.props.product.count}</span>
                </div>
            </div>
         );
    }
}
 
export default Product;