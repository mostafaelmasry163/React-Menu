import React, { Component } from 'react';

class Admin extends Component {
    
    render() {
 
        return ( 
            <React.Fragment>
                
                <h1>Admin</h1>
                <button onClick={() => this.props.history.push("/productform/new")} className="btn btn-lg btn-info float-right" >Add</button>
                
                    <table className="table table-striped">
                        <thead style={{backgroundColor: '#e3f2fd'}}>
                            <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.products.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                <i
                                    onClick={() =>
                                    this.props.history.push(`/productform/${product.id}`)
                                    }
                                    className="fas fa-edit"
                                    style={{ cursor: "pointer" }}
                                ></i>
                                </td>
                                <td>
                                <i
                                    onClick={() => this.props.onDelete(product)}
                                    className="fas fa-trash" style={{ cursor: "pointer" }}
                                ></i>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                
            </React.Fragment>
         );
    }
}
 
export default Admin;