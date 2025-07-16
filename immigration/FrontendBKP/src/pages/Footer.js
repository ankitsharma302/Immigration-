import React, { Fragment } from 'react';
import { Link, Route, Routes, Switch } from "react-router-dom";
function Footer(){
    return(
        <Fragment>
            <section className="info_section ">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="info_logo">
                        <a className="navbar-brand" href="">
                            <span>
               Migrate Overseas
              </span>
                        </a>
                        <p>
                            Migrate Overseas are one of the leading Immigration Consultant in Punjab. We provide Bussiness Visa,Study Visa,Work Visa and Tourist Visa services.
                        </p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="info_links">
                        <h5>
                            Useful Link
                        </h5>
                        <ul>
                            <li>
                            <Link to="/">Home</Link>
                            </li>
                            <li>
                            <Link to="/services">Services</Link>                
                            </li>
                            <li>
                            <Link to="/about">About</Link>
                            </li>
                            <li>
                            <Link to="/countries">Countries</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="info_info">
                        <h5>
                            Contact Us
                        </h5>
                    </div>
                    <div className="info_contact">
                        <a href="/image" className="">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <span>
                Mohali,Punjab
              </span>
                        </a>
                        <a href="" className="">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <span>
                Call : +91 9041412730
              </span>
                        </a>
                        <a href="mailto:migrateover@gmail.com" className="">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <span>
                migrateover@gmail.com
              </span>
                        </a>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="info_form ">
                        <h5>
                            Newsletter
                        </h5>
                        <form action="#">
                            <input type="email" placeholder="Enter your email"/>
                            <button>
                Subscribe
              </button>
                        </form>
                        <div className="social_box">
                            <a href="">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-youtube" aria-hidden="true"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
          <footer className="container-fluid footer_section">
            <p>
                 &copy; <span id="displayYear"></span> Migrate Overseas 2025- All Rights Reserved
            </p>
            </footer>   
                 
        </Fragment>
    );
}
export default Footer;




