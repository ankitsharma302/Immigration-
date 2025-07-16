import React, { Fragment } from 'react';
import { Link, Route, Routes, Switch } from "react-router-dom";
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header';
// import "./Work.css";
function Tourist(){
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
            <div className="bussinessvisa">
            <div>
            <img src="images/tourist.jpg" className="bussiness" height="400" width="1000"/>
            <br/><br/>
        <p>The Schengen visa allows nationals of non-European countries to visit Schengen countries in Europe for up to 90 days within a 6 months period. Whether you are visiting friends and family or taking a leisure trip, the Schengen tourist visa is your gateway to Europe. This is a temporary visa for individuals looking to travel to European countries belonging to the Schengen zone. Migrate Overseas can help you understand your options and guide you through the Schengen visa process with our dedicated visa services.</p>
        <p>You have up to three months to apply for a Schengen visa before your scheduled trip.</p>
        <br/>
        <h3 className='center'>SCHENGEN VISIT VISA DETAILS</h3><br/>
        <p>The Schengen Visa is a temporary visa for individuals looking to travel to European countries belonging to the Schengen zone. The countries in this zone are Austria, Belgium, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden, and Switzerland.</p>
        <br/>
        <ul>
          <li>The Schengen tourist visa allows you to stay in Schengen countries for up to 90 days in a 6 months period.</li>
          <li>You need to apply for the visa to the country you are visiting or to the country where you are spending the greatest number of days or in which you step first if you are spending equal days in all countries.</li>
          <li>Typically, it takes 2 weeks or less to process the Europe visa but this depends on the embassy.</li>
          <li>You do not have to go through the hassle of applying for a visa in any of the Schengen countries.</li>
        </ul>
        <p>&nbsp;</p>
    
        <h5 className='center'>ELIGIBILITY FOR SCHENGEN VISIT VISA</h5>
        <br/>
        <p>You must be a citizen of a non-European country that is not in the European Union. The reason for travelling as well as the time frame must be justified. You must have a passport that is valid for at least 3 months after the date of your visa application. You must have a minimum of €30,000 in medical insurance to apply for the Europe visa.</p>
        <br/>
        
        <h5 className='center'>DOCUMENTS REQUIRED FOR SCHENGEN VISA APPLICATION</h5>
        <br/>
        <p>The Schengen tourist visa is a unique document that allows you access to several European countries with a single visa. In order to apply for it you must submit:</p>
        <ul>
          <li>Valid passport</li>
          <li>Completed Schengen visit visa application form</li>
          <li>Travel itinerary including countries you plan to visit, accommodation &amp; flight details</li>
          <li>Evidence of financial sufficiency</li>
          <li>Evidence of your employment or student status to prove you will not be staying on</li>
          <li>Proof of adequate health insurance</li>
        </ul>
       <br/>
        <h5 className='center'>STEPS TO APPLY FOR SCHENGEN VISIT VISA</h5>
        <br/>
        <ol>
          <li>Make sure you’re eligible for a Schengen Visa for tourists. Because there are numerous sorts of Schengen visas, you must be certain of the visa you require.</li>
          <li>Find out where you need to submit your application.</li>
          <li>Determine the optimal time to apply for a tourist visa.</li>
          <li>Gather the necessary documents for a tourist Schengen Visa.</li>
          <li>Make an appointment at your destination country’s embassy. This appointment may need to be made online or in person at the embassy/consulate/visa center.</li>
          <li>Attend the visa interview.</li>
          <li>Pay the cost for the Europe visa.</li>
          <li>Wait for your visa application to be approved.</li>
        </ol>
      </div>
      </div>
      </div>
          </div>
          <Footer/>

</Fragment>

    );
}
export default Tourist;