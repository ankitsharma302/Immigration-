import React, { Fragment } from 'react';
import { Link, Route, Routes, Switch } from "react-router-dom";
import Menu from './Menu';
import Footer from './Footer';
function Countries(){
    return(
        <Fragment>

        <div className="sub_page">
    <div className="hero_area">
        
        <div className="hero_bg_box">
            <div className="img-box">
                <img src="images/Plane.jpeg" alt=""/>
            </div>
        </div>

        <header className="header_section">
            <div className="header_top">
                <div className="container-fluid">
                    <div className="contact_link-container">
                        <a href="" className="contact_link1">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <span>
                Mohali,Punjab
              </span>
                        </a>
                        <a href="" className="contact_link2">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <span>
                Call : +91 9041412730
              </span>
                        </a>
                        <a href="mailto:migrateover@gmail.com" className="contact_link3">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <span>
                migrateover@gmail.com
              </span>
                        </a>
                    </div>
                </div>
            </div>
          <Menu/>
        </header>
        
    </div>

    <section className="country_section layout_padding">
        <div className="container">
            <div className="heading_container heading_center">
                <h2>
                    Choose Country
                </h2>
                <p>
                    Select country you want to apply visa for
                </p>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <a href="/France" className="box">
                        <img src="images/c1.jpg" alt=""/>
                        <div className="detail-box">
                            <h3>
                                France
                            </h3>
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="/Canada" className="box">
                        <img src="images/c2.jpg" alt=""/>
                        <div className="detail-box">
                            <h3>
                                Canada
                            </h3>
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="/America" className="box">
                        <img src="images/c3.jpg" alt=""/>
                        <div className="detail-box">
                            <h3>
                                United States
                            </h3>
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="/Newzealand" className="box">
                        <img src="images/c4.jpg" alt=""/>
                        <div className="detail-box">
                            <h3>
                                New Zealand
                            </h3>
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="/Australia" className="box">
                        <img src="images/c5.jpg" alt=""/>
                        <div className="detail-box">
                            <h3>
                                Australia
                            </h3>
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="/Spain" className="box">
                        <img src="images/c6.jpg" alt=""/>
                        <div className="detail-box">
                            <h3>
                                Spain
                            </h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

        <Footer/>
      </div>
        </Fragment>
    );
}
export default Countries;


