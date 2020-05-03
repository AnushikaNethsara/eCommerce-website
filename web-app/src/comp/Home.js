import React, { Component } from 'react';
import './view.css';
import img1 from '../footer/f1.png';
import img2 from '../footer/f2.png';
import img3 from '../footer/f3.png';
import img4 from '../footer/f4.png';
import {Link} from 'react-router-dom'
import banner from '../footer/banner.jpg';
import c1 from '../footer/c1.jpg';
import c2 from '../footer/c2.jpg';
import c3 from '../footer/c3.jpg';
import c4 from '../footer/c4.jpg';
import c5 from '../footer/c5.jpg';
import b1 from '../footer/b1.png';
import b2 from '../footer/b2.png';
import b3 from '../footer/b3.png';
import b4 from '../footer/b4.png';
import b5 from '../footer/b5.png';


class Home extends Component {

    render() { 
        return ( 

            
            <div>
                {/*** Banner ***/}
                <section className="banner-area">
                    <div className="container">
                        <div className="row fullscreen align-items-center justify-content-start">
                            <div className="col-lg-12">
                                <div className="active-banner-slider owl-carousel">
                                    
                                    <div className="row single-slide align-items-center d-flex">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="banner-content">
                                                <h1>Twiner New <br/>Camera Collection!</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                                <div className="add-bag d-flex align-items-center">
                                                    <i className="fab fa-connectdevelop"></i><span className="lnr lnr-cross"></span>
                                                    <span className="add-text text-uppercase">Twiner</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="banner-img">
                                                <img className="img-fluid" src={banner} alt="banner"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/*featers */}
                <div style={{textAlign:"center",marginBottom:"1000px"}}>
                    <div>
                
                        <section className="features-area section_gap">
                            <div className="container">
                                <div className="row features-inner">
                                    
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="single-features">
                                            <div className="f-icon">
                                                <img src={img1} alt=""/>
                                            </div>
                                            <h6>Free Delivery</h6>
                                            <p>Free Shipping on all order</p>
                                        </div>
                                    </div>
                                
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="single-features">
                                            <div className="f-icon">
                                                <img src={img2} alt=""/>
                                            </div>
                                            <h6>Return Policy</h6>
                                            <p>Free Shipping on all order</p>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="single-features">
                                            <div className="f-icon">
                                                <img src={img3} alt=""/>
                                            </div>
                                            <h6>24/7 Support</h6>
                                            <p>Free Shipping on all order</p>
                                        </div>
                                    </div>
                                
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="single-features">
                                            <div className="f-icon">
                                                <img src={img4} alt=""/>
                                            </div>
                                            <h6>Secure Payment</h6>
                                            <p>Free Shipping on all order</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
        

                    </div>
                </div> 




                {/***category Area ***/}
            <div>
                <section className="category-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8">
                                        <div className="single-deal">
                                            <div className="overlay"></div>
                                            <img className="img-fluid w-100" src={c1}  alt=""/>
                                            <Link to="/shop" >
                                                <div className="deal-details">
                                                    <h6 className="deal-title">NIKON</h6>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="single-deal">
                                            <div className="overlay"></div>
                                            <img className="img-fluid w-100" src={c2} alt=""/>
                                            <Link to="/shop">
                                                <div className="deal-details">
                                                    <h6 className="deal-title">CANNON</h6>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="single-deal">
                                            <div className="overlay"></div>
                                            <img className="img-fluid w-100" src={c3} alt=""/>
                                            <Link to="/shop">
                                                <div className="deal-details">
                                                    <h6 className="deal-title">SONNY</h6>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8">
                                        <div className="single-deal">
                                            <div className="overlay"></div>
                                            <img className="img-fluid w-100" src={c4} alt=""/>
                                            <Link to="/shop">
                                                <div className="deal-details">
                                                    <h6 className="deal-title">OLYMPUS</h6>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-deal">
                                    <div className="overlay"></div>
                                    <img className="img-fluid w-100" src={c5} alt=""/>
                                    <Link to="/shop">
                                        <div className="deal-details">
                                            <h6 className="deal-title">PENTAX</h6>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/***Brand Area ***/}

                <section class="brand-area section_gap">
                    <div class="container">
                        <div class="row">
                            <Link to="/" class="col single-img" >
                                <img class="img-fluid d-block mx-auto" src={b1} alt=""/>
                            </Link>
                            <Link to="/"  class="col single-img" >
                                <img class="img-fluid d-block mx-auto" src={b2} alt=""/>
                            </Link>
                            <Link to="/" class="col single-img" >
                                <img class="img-fluid d-block mx-auto" src={b3} alt=""/>
                            </Link>
                            <Link to="/"  class="col single-img" >
                                <img class="img-fluid d-block mx-auto" src={b4} alt=""/>
                            </Link>
                            <Link to="/"  class="col single-img" >
                                <img class="img-fluid d-block mx-auto" src={b5} alt=""/>
                            </Link>
                        </div>
                    </div>
	            </section>
            </div>


            </div>
            
        );
    }
}
 
export default Home;