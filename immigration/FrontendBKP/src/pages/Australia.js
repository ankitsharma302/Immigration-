import React, { Fragment } from 'react';
import { Link, Route, Routes, Switch } from "react-router-dom";
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header';
// import "./Work.css";
function Canada(){
    return(
        <Fragment>
           <div className="sub_page">
    <div className="hero_area">
    
        <div className="hero_bg_box">
            <div className="img-box">
                <img src="images/contact-bg.jpeg" alt=""/>
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
            <div className="countries">
            <div>
            <img src="images/australia.jpg" className="bussiness" height="400" width="800"/>
            <br/><br/>
            <h3 className='center'><strong>Australia Immigration from India</strong></h3>
            <br/>
        <p>Australia has always been a leading destination for skilled and talented people looking to immigrate to an advanced country. The Australian government has designed several visa categories, which facilitate <strong>Australia immigration from India</strong>. Few of these categories are, i.e. Permanent residence visa, Study visa, Visit Visa, Family sponsored visa, etc. Australia is one of the best countries to immigrate to, based on various factors.</p>
        <p>With new point system changes applicable from November 16, 2019, it will now be easier to apply and obtain a skilled visa in Australia. Here are some key aspects of <strong>immigration to Australia from India</strong>, which lure the genuine aspirants in the region to relocate to Australia- the land down under.</p>
        <br/>
        <h3 className='center'><strong>Why should one immigrate to Australia?</strong></h3>
        <br/>
        <p>Here are a few key reasons to apply for immigration to Australia:</p>
        <ul>
          <li>Australia is an advanced country with excellent infrastructure and career opportunities</li>
          <li>As per US News and World Report, Australia is the 7th best country in the world for quality of life and 8th best for obtaining the citizenship</li>
          <li>It is 3rd best country in the world for a comfortable retirement</li>
          <li>It has an organized point-based immigration system</li>
          <li>The New Immigration point system of Australia will make it easy for the applicants to earn more immigration points</li>
          <li>Australia is gradually opening its State nomination programs to invite, assesses and nominate the suitable applicants for Australian Skilled visa</li>
        </ul>
      </div>
      </div>
      </div>
          </div>
          <Footer/>

</Fragment>

    );
}
export default Canada;