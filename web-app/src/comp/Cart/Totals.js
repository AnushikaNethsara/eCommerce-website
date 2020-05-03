import React from 'react';
import '../Cart/Totals.css'

export default function Totals  ({value}) {
        const {clearCart,tax,subTotal,lastTotal}=value;
        return (  
            <div style={{textAlign:"center",padding:"10px",marginBottom:"1000px"}}>
                <div>
                    <button className="clear" onClick={()=>clearCart()}>
                        CLEAR CART
                    </button>
                </div>

                <div className="totalas">
                    <h4>Sub Total:${subTotal}</h4>
                    <h4>Tax      :${tax}</h4>
                    <h4>Total    :${lastTotal}</h4>
                </div>
            </div>
        );
    
}
 
