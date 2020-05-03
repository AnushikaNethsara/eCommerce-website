import React, { Component } from 'react';
import {ProductConsumer} from '../../src/context'
import {Link} from 'react-router-dom';
import './Detail.css'

class Detail extends Component {
    state = {  }
    render() { 
        return ( 
            
            <ProductConsumer>
                {(value)=>{
                    const{id,company,price,info,img,title,inCart}=value.detailProduct;
                    return(
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* product info*/}

                            <div className='row'>
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                {/* product text*/}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model: {title}</h2>
                                    <h4 className="text-title text-uppercase 
                                    text-muted mt-3 mb-2">
                                        made by:<span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            Price: <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Info:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/*button */}
                                    <div>
                                        <Link to="/shop">
                                            <button className="ButtonContainer2">Back to Products</button>
                                        </Link>

                                        <button className="ButtonContainer2"
                                        disabled={inCart? true : false}
                                        onClick={()=>{
                                            value.addToCart(id);value.openModal(id);
                                        }}
                                        >
                                         {inCart ? "in cart" : "add to cart"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}
 
export default Detail;