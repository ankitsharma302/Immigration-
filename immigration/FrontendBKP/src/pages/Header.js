import React, { Fragment } from 'react';
import { Link, Route, Routes, Switch } from "react-router-dom";
import Menu from './Menu';
function Header(){
    return(
        <Fragment>
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
                            <a href="/image" className="contact_link1">
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
            <section className=" slider_section ">
            {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active"> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-7">
                                    <div className="detail-box">
                                        <h1>
                                            Imagine A Better Future.<br/> Make It Happen.
                                        </h1>
                                        <p>
                                            A one-stop solution for all your visa needs!
                                        </p>
                                        <div className="btn-box">
                                            <a href="/login" className="btn-1"> Know more </a>
                                            <a href="/hiring" className="btn-2">Get A Job</a>
                                            {/* <Link to={"/login"}>know more</Link>
                                            <Link to={"/register"}>Get a Quote</Link> */}
                                        </div>
                                    </div>
                                {/* </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <a className="carousel-control-prev" role="button" data-slide="prev"></a>
                    <div className="carousel-item ">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-7">
                                    <div className="detail-box">
                                        <h1>
                                            Imagine A Better Future.<br/> Make It Happen.
                                        </h1>
                                        <p>
                                            A one-stop solution for all your visa needs!
                                        </p>
                                        <div className="btn-box">
                                            <a href="" className="btn-1"> Read more </a>
                                            <a href="" className="btn-2">Get A Quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-7">
                                    <div className="detail-box">
                                        <h1>
                                            Imagine A Better Future.<br/> Make It Happen.
                                        </h1>
                                        <p>
                                            A one-stop solution for all your visa needs!
                                        </p>
                                        <div className="btn-box">
                                            <a href="" className="btn-1"> Read more </a>
                                            <a href="" className="btn-2">Get A Quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container idicator_container">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol> */}
                </div>
            </div>
        </section>
        </div>

        </Fragment>
    );
}
export default Header;







