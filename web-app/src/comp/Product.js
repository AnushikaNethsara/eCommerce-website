import React, { Component } from 'react';
import '../comp/view.css';
import '../comp/Product.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {ProductConsumer} from '../../src/context';

class Product extends Component {
    state = {  }
    render() { 
    const {id,title,img,price,inCart}=this.props.product;

        return (  

            <div id="cam-card"  style={{boxShadow: "3px 3px 3px -2px rgba(0,0,0,.2)",marginBottom:"10px", marginTop:"10px"} } className="col-lg-4 col-md-6">
                <div>
                    <ProductConsumer>
                        {(value)=>(
                        <div className="single-product">
                            <Link to="/detail" className="img-container"  onClick={()=>{
                            value.handleDetail(id)
                        }}>
                                <img id="card-img-top" className="img-fluid" src={img} alt="h"/>
                            </Link>
                            <div className="product-details">
                                <Link to="/detail">
                                    <h6 className="title" onClick={()=>{value.handleDetail(id)}}>
                                        {title}
                                    </h6>
                                </Link>
                                <div className="price">
                                    <h6>${price}</h6>
                                </div>
                                <div className="prd-bottom">


                                    <a className="social-info" 
                                    disabled={inCart? true :false}
                                    onClick={()=>{value.addToCart(id);value.openModal(id)}}>
                                        <span className="fas fa-cart-plus"></span>
                                        <p className="hover-text">
                                            {inCart ? "in cart" : "add to cart"}
                                        </p>
                                    </a>


                                    <Link to="/detail" className="social-info" onClick={()=>{value.handleDetail(id)}}>
                                        <span className="fab fa-connectdevelop"></span>
                                        <p className="hover-text">VIEW</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        )}
                    
                    </ProductConsumer>
                </div>
            </div>
          
        );
    }
}

Product.propTypes={
    product: PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool,
        title:PropTypes.string

    }).isRequired
}
 
export default Product;