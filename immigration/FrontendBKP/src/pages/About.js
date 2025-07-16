import React, { Fragment } from 'react';
import { Link, Route, Routes, Switch } from "react-router-dom";
import Menu from './Menu';
import Footer from './Footer';
function About(){
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
    </div>

    <section className="about_section layout_padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 px-0">
                    <div className="img_container">
                        <div className="img-box">
                            <img src="images/about-img.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 px-0">
                    <div className="detail-box">
                        <div className="heading_container ">
                            <h2>
                                Who Are We?
                            </h2>
                        </div>
                        <p>
                            Migrate Overseas are one of the leading Immigration Consultant in Punjab. We provide Bussiness Visa,Study Visa,Work Visa and Tourist Visa services. Our main target destination is the France, Canada, Australia, United States, Spain and New Zealand. Providers
                            Overseas provide high-quality services for students, professionals, and tourists. We are one of the leading companies providing study visas for students to study abroad in any country that we mentioned above.
                        </p>
                        <div className="btn-box">
                            <a href="/WHO">
                Read More
              </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <Footer/>
    </div>

        </Fragment>
    );
}
export default About;






