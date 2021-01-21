import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';

import NavBar from './navBarComponent';
import Home from './homeComponent';
import ShoppingCart from './shoppingCartComponent';
import Menu from './menuComponent';
import NotFound from './notFoundComponent';
import Admin from './adminComponent';
import ProductForm from './ProductFormComponent';
import { URL } from './UrlComponent';

class App extends Component {
state= {
    products: [],
}

async componentDidMount(){
    //call BackEnd
    let {data} = await axios.get(URL);

    //convert object reterned from firebase to array
    // const dataArray =[];
    // for(const key in data) {
    //     dataArray[parseInt(data[key].id)]= data[key];
    // }

    //set state
    this.setState({ products: data });
}

handleDelete = async (product) => {
    //state
    //clone
    //edit
    const oldProducts = [...this.state.products];
    const products = this.state.products.filter((p) => p.id !== product.id);
    //set state
    this.setState({ products });

    try {
    await axios.delete( URL + product.id);
    } catch (ex) {
    toast("can't Delete");
    this.setState({products: oldProducts});
    }
};

handleReset = () => {
    //clone
    let products = [...this.state.products];
    //edit
    products =products.map((p) => {
        p.count =0;
        return p;
    });
    //set state
    this.setState({products});
};

IncrementHandler = (product) => {
    //deep clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index]= {...products[index]};
    //edit
    products[index].count++;
    //set state
    this.setState({products});
};

handleInCartChange= (product) => {
    //deep clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = {...products[index]};
    //edit
    products[index].isInCart = !products[index].isInCart;
    //set state
    this.setState({products});
};

render() {
    return (
        <React.Fragment>
            <ToastContainer />
            <NavBar 
             productsCount={this.state.products.filter((p) => p.isInCart).length}
            />
            <main className="container">
                <div className="col-md-8 col-sm ml-auto mr-auto mt-5">
                <Switch>
                    <Route 
                      path="/productform/:id"
                      render={(props) => (<ProductForm {...props} products={this.state.products} />)}
                    />
                    <Route path="/home" component={Home} />
                    <Route 
                      path="/admin"
                      render={(props) => (<Admin {...props} products={this.state.products} 
                      onDelete={this.handleDelete}/>)}
                    />
                    <Route path="/cart" 
                     render={(props) => (<ShoppingCart 
                        products={this.state.products.filter((p) => p.isInCart)} onIncrement={this.IncrementHandler} onDelete={this.handleInCartChange}onReset={this.handleReset} {...props}/>)} 
                    />
                    <Route path="/menu" 
                        render={(props) => (<Menu {...props} products={this.state.products} onClick={this.handleInCartChange} />)} 
                    />
                    <Route path="/notfound" component={NotFound} />
                    <Redirect from="/" to="/home" />
                    <Redirect to="/notfound" />
                </Switch>
                </div>
            </main>
        </React.Fragment>
    );
}
}

export default App;