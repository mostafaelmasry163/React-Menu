import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
        <Link className="navbar-brand" to="/home">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <NavLink className="nav-link" to="home">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="menu">
          Menu 
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/admin">
          Admin
        </NavLink>
      </li>
       <li className="nav-item">
        <NavLink className="nav-link" to="cart">
          Shoping Cart
        </NavLink>
      </li> 
    </ul>
        <Link className="form-inline my-2 my-lg-0" to="/cart">
          <span className="badge badge-primary">
            <i style={{ color: "white" }} className="fas fa-cart-plus"></i>
            {props.productsCount}
          </span>
        </Link>
  </div>

  
      
</nav>
    );
}
 
export default NavBar;