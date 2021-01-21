import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {};
  render() {
    return (
        <React.Fragment>
            <h1>Home</h1>
            <p> This App helps you to make a resturant manu by <Link to="/admin">creating</Link> products name and products price. you could <Link to="/menu">add</Link> this proucts in a ShoppingCart to buy them leater. you can <Link to="/cart">view</Link> what is in the ShoppingCart too.</p>

        </React.Fragment>
    );
  }
}

export default Home;