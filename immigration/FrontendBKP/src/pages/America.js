import React, { Fragment } from 'react';
import { Link, Route, Routes, Switch } from "react-router-dom";
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header';
// import "./Work.css";
function America(){
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
            <div className="countries">
            <div>
            <img src="images/america.jfif" className="bussiness" height="400" width="800"/>
            <br/><br/>
            <p>The USA is a dream of sovereignty and eternal possibilities. This made the United States of America stand on the top of the destination list for Indian Immigrants. And if you plan on comparing America with any other nation, Sorry, but it is impossible. America has shaped into a huge nation with a diversity of cultures, a strong economy, excellent quality of life, and opportunities for everyone. Here is an end-to-end guide to “immigrate to the USA”.</p>
        <br/>
        <h3 className='center'>Why Migrate to the USA?</h3>
        <br/>
        <p>Thousands of people&nbsp; apply for a US Green Card each year to seek their fortune in America. But what exactly makes immigration to the United States so appealing to them? The following are the most common reasons:</p>
        <ul>
          <li>Quality of Life</li>
          <li>Plenty of Job Opportunities</li>
          <li>Better Education</li>
          <li>Enhanced Lifestyle</li>
          <li>Spouse &amp; Dependent Visas</li>
          <li>World’s leading economy</li>
        </ul>
        </div>
        </div>
      </div>
          </div>
          <Footer/>

</Fragment>

    );
}
export default America;