import React from 'react';
import '../Cart/Totals.css'

export default function CartItem ({cart,value}) {

        const {id,title,price,img,count,total}=cart;
        const {decrement,increment,remove}=value
        return (  
            <div className="row my-1 text-capitalize text-center" >
                <div className="col-10 mx-auto col-lg-2">
                    <img src={img} 
                    style={{width:'5rem',height:'5rem'}}
                    className="img-fluid" alt="product"/>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Product: </span>
                    {title}
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Price: </span>
                    {price}
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <span >
                        <button className="inde" onClick={()=>{decrement(id)}}>-</button>
                        <span className="count">{count}</span>
                        <button className="inde" onClick={()=>{increment(id)}}>+</button > 
                    </span>
                    
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <i id="trash" className="fas fa-trash " style={{cursor:"pointer"}} onClick={()=>{remove(id)}}></i>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Total: </span>
                    ${total}
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>

        );
    
}
 
