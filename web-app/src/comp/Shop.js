import React, { Component } from 'react';
import {ProductConsumer} from '../../src/context'
import {Link} from 'react-router-dom'
import Product from './Product';
import '../comp/view.css'

class Shop extends Component {

    render() { 
        return (  
                    <div  className="container">
                        <div  className="row">
                            <div className="col-xl-3 col-lg-4 col-md-5">
                                <div className="sidebar-categories">
                                    <div style={{color:"black", backgroundColor:"rgb(215,255,255)"}} className="head">Browse Categories</div>
                                    <ul className="main-categories">
                                        <li className="main-nav-list"><Link to="/shop" data-toggle="collapse"  aria-expanded="false" aria-controls="fruitsVegetable"><span
                                                 className="lnr lnr-arrow-right"></span>Nikkon<span className="number">(53)</span></Link>
                                        </li>
                
                                        <li className="main-nav-list"><Link to="/shop" data-toggle="collapse"  aria-expanded="false" aria-controls="meatFish"><span
                                                 className="lnr lnr-arrow-right"></span>Cannon<span className="number">(53)</span></Link>
                                        </li>
                                        <li className="main-nav-list"><Link to="/shop" data-toggle="collapse"  aria-expanded="false" aria-controls="cooking"><span
                                                 className="lnr lnr-arrow-right"></span>Sonny<span className="number">(53)</span></Link>
                                        </li>
                                        <li className="main-nav-list"><Link to="/shop" data-toggle="collapse"  aria-expanded="false" aria-controls="beverages"><span
                                                 className="lnr lnr-arrow-right"></span>Olympus<span className="number">(24)</span></Link>
                                        </li>
                                        <li className="main-nav-list"><Link to="/shop" data-toggle="collapse"  aria-expanded="false" aria-controls="homeClean"><span
                                                 className="lnr lnr-arrow-right"></span>leica<span className="number">(53)</span></Link>
                                        </li>
                                        <li className="main-nav-list"><Link to="/shop" href="#">Pest Control<span className="number">(24)</span></Link></li>
                                        <li className="main-nav-list"><Link to="/shop" data-toggle="collapse" href="#officeProduct" aria-expanded="false" aria-controls="officeProduct"><span
                                                 className="lnr lnr-arrow-right"></span>Pentax<span className="number">(77)</span></Link>
                                        </li>
                                        <li className="main-nav-list"><Link to="/shop" href="#">Others<span className="number">(29)</span></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div  className="col-xl-9 col-lg-8 col-md-7">
                                <div style={{backgroundColor:"rgb(215,255,255)",boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)"}}  className="filter-bar d-flex flex-wrap align-items-center">
                                    <div className="sorting">
                                        
                                    </div>
                                    <div className="sorting mr-auto">
                                        
                                    </div>
                                    <div  className="pagination">
                                        <Link to="/shop" className="prev-arrow"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                                        <Link to="/shop"  className="active">1</Link>
                                        <Link to="/shop" >2</Link>
                                        <Link to="/shop" >3</Link>
                                        <Link to="/shop"  className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></Link>
                                        <Link to="/shop" >6</Link>
                                        <Link to="/shop" className="next-arrow"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                
                
                                {/***       single product             ***/}
                                
                                <section className="lattest-product-area pb-40 category-list">
                                    <div className="row">
                                                 <ProductConsumer>
                                                    {(value)=>{
                                                    return value.products.map(product=>{
                                                        return <Product key={product.id} 
                                                        product={product}
                                                        />
                                                    })
                                                }}
                                                </ProductConsumer> 
                                    </div>
                                </section>
                                
                
                
                
                
                
                                {/***    end of single product***/}
                                <div style={{backgroundColor:"rgb(215,255,255)"}} className="filter-bar d-flex flex-wrap align-items-center">
                                    <div className="sorting mr-auto">
                                        
                                    </div>
                                    <div className="pagination">
                                        <Link to="/shop" className="prev-arrow"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                                        <Link to="/shop" className="active">1</Link>
                                        <Link to="/shop">2</Link>
                                        <Link to="/shop">3</Link>
                                        <Link to="/shop" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></Link>
                                        <Link to="/shop">6</Link>
                                        <Link to="/shop" className="next-arrow"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



        );
    }
}
 
export default Shop;