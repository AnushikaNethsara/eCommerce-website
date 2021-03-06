import React from 'react';
import CartItem from '../Cart/CartItem';

 export default function CartList ({value}) {
        
    const {cart}=value;
        return (  
            <div >
                {cart.map(item=>{
                    return <CartItem key={item.id} cart={item} value={value}/>
                })

                }
                   
            </div>
            
        );

}
