import React, { Component } from 'react';
import '../comp/view.css';
import img1 from '../footer/6.jpg';
import img2 from '../footer/5.jpg';
import img3 from '../footer/2.jpeg';
import {Link} from 'react-router-dom'

class Footer extends Component {
    render() { 
        return ( 
            <div>
                
                <footer className="footer-area ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3  col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h6>About Us</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore
                                        magna aliqua.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h6>Newsletter</h6>
                                    <p>Stay update with our latest</p>
                                    <div className="" id="mc_embed_signup">

                                        <form target="_blank" 
                                        method="get" className="form-inline">

                                            <div className="d-flex flex-row">

                                                <input className="form-control"  placeholder="Enter Email" 
                                                 type="email"/>


                                                <button style={{cursor:"ponter"}} className="click-btn btn btn-default"><Link to="/"  className="fa fa-arrow-right" aria-hidden="true"></Link></button>
                                                <div style={{position: "absolute", left: "-5000px"}}>
                                                    <input   type="text"/>
                                                </div>

                                                        <div className="col-lg-4 col-md-4">
                                                            
                                                        </div> 
                                            </div>
                                            <div className="info"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3  col-md-6 col-sm-6">
                                <div className="single-footer-widget mail-chimp">
                                    <h6 className="mb-20">Instragram Feed</h6>
                                    <ul className="instafeed d-flex flex-wrap">
                                        <img style={{width:"70px",height:"70px"}} alt="img" src={img1}/>
                                        <img style={{width:"70px",height:"70px"}} alt="img" src={img2}/>
                                        <img style={{width:"70px",height:"70px"}} alt="img" src={img3}/>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h6>Follow Us</h6>
                                    <p>Let us be social</p>
                                    <div className="footer-social d-flex align-items-center">
                                        <Link to="/" href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="/" href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="/" href="#"><i className="fab fa-instagram"></i></Link>
                                        <Link to="/" href="#"><i className="fab fa-gmail"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
                            <p className="footer-text m-0">
                            Copyright &copy;2020 <i className="fa fa-heart-o" aria-hidden="true"></i> 
                            
                            </p>
                        </div>
                    </div>
                </footer>
	
            </div> 
        );
    }
}
 
export default Footer;