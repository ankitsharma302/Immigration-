import React, { Fragment } from 'react';
import { Link, Route, Routes, Switch } from "react-router-dom";
import Menu from './Menu';
import Footer from './Footer';

function Services(){
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

    <section className="service_section layout_padding">
        <div className="container">
            <div className="heading_container heading_center">
                <h2>
                    Our services
                </h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="box ">
                        <div className="img-box">
                            <img src="images/s1.png" alt=""/>
                        </div>
                        <div className="detail-box">
                            <h6>
                                Business Visa
                            </h6>
                            <p>
                                Business Visas aid in the facilitation of trade and commerce between countries. We can assist you in evaluating your options and applying for a visa that will provide you with the best opportunity to conduct business abroad.
                            </p>
                            <a href="/Bussiness" >
                Read More
              </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="box ">
                        <div className="img-box">
                            <img src="images/s2.png" alt=""/>
                        </div>
                        <div className="detail-box">
                            <h6>
                                Work Visa
                            </h6>
                            <p>
                                A work visa allows you to enter a foreign nation and work temporarily. Each country will have its work visa requirements. The procedures and eligibility criteria for a work visa will also differ for each country.
                            </p>
                            <a href="/Work">
                Read More
              </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="box ">
                        <div className="img-box">
                            <img src="images/s3.png" alt=""/>
                        </div>
                        <div className="detail-box">
                            <h6>
                                Tourist Visa
                            </h6>
                            <p>
                                Applying for a visa is not an easy task. We can easily feel overwhelmed with an infinite list of regulations to follow and documents to keep track of. We have a high success rate and provide the best service in the industry.
                            </p>
                            <a href="/Tourist">
                Read More
              </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="box ">
                        <div className="img-box">
                            <img src="images/s4.png" alt=""/>
                        </div>
                        <div className="detail-box">
                            <h6>
                                Student Visa
                            </h6>
                            <p>
                                Studying Abroad strides the career direction to the highest level for a student. And graduating from universities abroad can provide global exposure and intercontinental prominence for the degree. Get more info here.
                            </p>
                            <a href="/Study">
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
export default Services;