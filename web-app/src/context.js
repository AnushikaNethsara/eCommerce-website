
import React, { Component } from 'react'; 
import {StoreProducts,detailProduct } from './Data'
const ProductContext=React.createContext();

class ProductProvider extends Component {
    state={
        products: StoreProducts,
        detailProduct:detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        lastTotal:0,
        subTotal:0,
        tax:0
    }
    componentDidMount(){
        this.setProducts(); 
    }

    getItem=(id)=>{
        const product=this.state.products.find(item=>item.id===id)
        return product;
    }

    setProducts=()=>{
        let tempProducts=[];
        StoreProducts.forEach(item => {
            const singleItem={...item};
            tempProducts=[...tempProducts,singleItem];
        });
        this.setState(()=>{
            return{products:tempProducts}
        })
    }
    handleDetail=(id)=>{
        const product=this.getItem(id);
        this.setState(()=>{
            return {detailProduct: product}
        })
    }
    addToCart=(id)=>{
        let tempProducts=[...this.state.products];
        const index=tempProducts.indexOf(this.getItem(id));
        const product=tempProducts[index];
        if(product.inCart===false){
            product.count=1;
            product.inCart=true;
            const price=product.price;
            product.total=price;

            this.setState(()=>{
                    return {product:tempProducts,
                    cart:[...this.state.cart,product]}
                },()=>{
                this.totals()
            }
            )
        }
        
    }

    openModal=(id)=>{
        const product=this.getItem(id);
        this.setState(()=>{
            return{modalProduct:product,modalOpen:true}
        })
    }

    closeModal=()=>{
        this.setState(()=>{
            return{modalOpen:false}
        })
    }

    increment=(id)=>{
        let tempCart=[...this.state.cart]
        const selectedProduct=tempCart.find(item=>item.id===id)
        
        const index=tempCart.indexOf(selectedProduct);
        const product=tempCart[index];
        
        product.count=product.count+1;
        product.total=product.count*product.price;
        this.setState(()=>{
            return{cart:[...tempCart]}
        },()=>{
            this.totals()
        }
        )

    }


    decrement=(id)=>{
        let tempCart=[...this.state.cart]
        const selectedProduct=tempCart.find(item=>item.id===id)
        const index=tempCart.indexOf(selectedProduct)

        const product=tempCart[index];
  
        if(product.count>0){
            product.count=product.count-1;
            product.total=product.count*product.price;

            this.setState(()=>{
                return {cart: [...tempCart]}
            },()=>{
                this.totals()
            })
        }

        if(product.count===0){
            this.remove(id)
        }  
        
    }

    clearCart=()=>{
        this.setState(()=>{
            return {cart:[]}
        },()=>{this.setProducts()})
    }

    totals=()=>{
        
        let cartSubTotal=0;
        this.state.cart.map(item=>{
            return cartSubTotal=cartSubTotal+item.total;
            //console.log("totals: ",item.price)
        })
        let tax1=0.1*cartSubTotal;
        let cartTax=parseFloat(tax1.toFixed(2))
        
        //console.log("tots: ",cartTax+cartSubTotal)
        this.setState(()=>{
            return{
                lastTotal:cartTax+cartSubTotal,
                subTotal:cartSubTotal,
                tax:cartTax
            }
        })
        
        
    }
/*
    addTotals=(id)=>{
        let tempCart=[...this.state.cart]
        const selectedProduct=tempCart.find(item=>item.id===id)
        const index=tempCart.indexOf(selectedProduct)

        const product=tempCart[index];
        product.total=product.price*product.count;

        

        this.setState(()=>{
            return {
                cart: [...tempCart],    
            }
        }
        )
    }**/


    remove=(id)=>{
        
        let tempCart=[...this.state.cart];
        let tempProducts=[...this.state.products];

        tempCart=tempCart.filter(item=>item.id!==id);
        const index=tempProducts.indexOf(this.getItem(id));
        tempProducts[index].inCart=false;
        
        this.setState(()=>{
            return{
                products:[...tempProducts],
                cart:[...tempCart]
            }
        },()=>{
            this.totals()
        }
        )
    }


    render() { 
        return (  
            <ProductContext.Provider 
            value={{...this.state,
            addToCart:this.addToCart,
            handleDetail:this.handleDetail,
            openModal:this.openModal,
            closeModal:this.closeModal,
            decrement:this.decrement,
            remove:this.remove,
            increment:this.increment,
            clearCart:this.clearCart,

            }} >
                {this.props.children}
            </ProductContext.Provider>

        );
    }
}
const ProductConsumer=ProductContext.Consumer;
 
export {ProductConsumer,ProductProvider};


