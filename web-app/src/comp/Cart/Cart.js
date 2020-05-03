import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import CartColomns from '../CartColomns';
import EmptyCart from '../Cart/EmptyCart';
import CartList from '../Cart/CartList';
import Totals from './Totals';

class Cart extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <ProductConsumer>
                    {value=>{
                        const {cart}=value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                    <CartColomns/> 
                                    <CartList value={value}/>
                                    <Totals value={value}/>
                                </React.Fragment>
                                
                            )

                        }

                        else{
                           return <EmptyCart/>
                        }
                    }}
                </ProductConsumer>
            </div>
        );
    }
}
 
export default Cart;