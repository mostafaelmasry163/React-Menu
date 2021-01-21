import React from 'react';
import {Cart} from './shoppingCartComponent';

const Menu = props => {
    return ( 
        <React.Fragment>
      <h1>Menu</h1>
      <table className="table table-striped ">
        <thead style={{backgroundColor: '#e3f2fd'}}>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <Cart onClick={props.onClick} product={product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
     );
}
 
export default Menu;