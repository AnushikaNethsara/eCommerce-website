import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


class ModalView extends Component {

    render() { 
        return (  
            <ProductConsumer>
            {value=>{
                const{modalOpen,closeModal}=value;
                const{img,title,price}=value.modalProduct;

                if(!modalOpen){
                    return null;
                }

                else{
                    return(
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto
                                    col-md-6 col-lg-4 text-center
                                    text-capitalize">
                                        <h5 style={{padding:"15px"}}>item added to the cart</h5>
                                        <img src={img} className="img-fluid" alt="product"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">Price : $ {price}</h5>
                                        <Link to="/shop">
                                            <button className="ButtonContainer2" onClick={()=>closeModal()}>
                                                Store
                                            </button>
                                        </Link>

                                        <Link to="/cart">
                                            <button className="ButtonContainer2" onClick={()=>closeModal()}>
                                                Go To Cart
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                )
                }
            }}
        </ProductConsumer>
        );
    }
}
 
export default ModalView;

const ModalContainer=styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:#f3f3f3;
    border-radius: 5px;
}`
;