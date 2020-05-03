import React, { Component } from 'react';
import '../comp/Nav.css';
import {Link} from 'react-router-dom'

class Nav extends Component {
    state = {  }
    render() { 
        return (  
        <div className="all">
            <nav className="navbar navbar-expand-sm bg-primary bg-light px-sm-5" 
              style={{background:"#e3f2fd"}}>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-3">
                        <Link to="/"  id="logo" className="nav-link">
                        <i className="fab fa-connectdevelop"></i>
                            Twiner
                        </Link>
                    </li>
                </ul>
                
                <div className="ml-auto">
                    <Link to="/"  id="plate" className="ml-5">
                        <i className="fas fa-home"></i>
                            HOME
                    </Link>

                    <Link to="/shop" id="plate" className="ml-5">
                        <i className="fab fa-google-wallet"></i>
                            SHOP
                    </Link>

                    <Link to="/cart" className="ml-5">
                        <button className="ButtonContainer">
                            <span className="mr-1">
                                <i className="fas fa-cart-plus"/>
                            </span>
                            CART
                        </button>
                    </Link>
                </div>
            </nav>
            
        </div>
        );
    }
}
 
export default Nav;