import React, { Component } from 'react';
import axios from 'axios';
import { URL } from './UrlComponent';

class ProductForm extends Component {
    state = { 
        id: "",
        name: "",
        price: ""
     };

     async componentDidMount() {
         const id = this.props.match.params.id;
         if(id !== "new") {
             const { data } = await axios.get(URL + id);
             //clone 
             const state = { ...this.state };
             //edit
             state.name = data.name;
             state.price = data.price;
             state.id = data.id;
             //set state
             this.setState(state);
         }
     }

     handleSubmit = async (e) => {
         e.preventDefault();
         //Add
         if(this.props.match.params.id === "new") {
             //call backend
             const obj = {
                ...this.state,
                count:0,
                isInCart:false,
                id: this.props.products[this.props.products.length - 1].id +1,
             };
             await axios.post(URL,obj);
         } else {
             //edit
             const obj ={
                 ...this.state,
                 count:0,
                 isInCart: false,
             };
             //delete id
             delete obj.id;

             await axios.put(URL+ this.state.id,obj);
         }

         this.props.history.replace('/admin')
     };

     handleChange = (e) => {
         //clone
         let state ={...this.state};
         //edit
         state[e.currentTarget.name]=e.currentTarget.value;
         //set state
         this.setState(state);
     }

    render() { 
        return ( 
            <React.Fragment>
        <h1>
          {this.props.match.params.id === "new"
            ? "Add Product"
            : "Edit Product"}
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              onChange={this.handleChange}
              value={this.state.name}
              id="name"
              name="name"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              className="form-control"
              onChange={this.handleChange}
              value={this.state.price}
              id="price"
              name="price"
              type="text"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {this.props.match.params.id === "new" ? "Add" : "Edit"}
          </button>
        </form>
      </React.Fragment>
         );
    }
}
 
export default ProductForm;