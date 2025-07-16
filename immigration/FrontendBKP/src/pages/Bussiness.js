import React, { Fragment } from 'react';
import { Link, Route, Routes, Switch } from "react-router-dom";
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header';
// import "./Work.css";
function Bussiness(){
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
              
              <img src="images/bussiness.jpg" className="bussiness" height="400" width="1000"/>
              <br/><br/>
              <p>As the world opens up to more business between countries, a golden opportunity has emerged for entrepreneurs. Business Visas help facilitate trade and business between different countries. These are typically short-stay visas and allow visa holders to conduct business in the countries they visit.</p>
              <p>These visas are valid only for a certain amount of time and allow visa holders to conduct business in the countries they visit. A business visa is a type of travel authorization that allows an individual to visit a foreign nation for the purpose of conducting business.</p>
              <p>During the visit, they may engage in business activities that do not constitute work or employment.</p>
              <p>It does not allow holders to work full-time in the country where the visa was issued.</p>
              <p>Migrate Overseas can help evaluate your options and apply for a suitable visa which gives you the greatest opportunity to conduct your business abroad.</p>
            </div>
            <div>
              <br/> 

              <h3 className="center">BUSINESS VISA DETAILS</h3>
              <br/>
              <p>Almost every country in the world offers flexible business visa options to enable trade between countries. Whether you are conducting client meetings, attending conferences, going on-site or conducing sales meetings, the business visa is typically your best visa option. Most business visas enable you to:</p>
              <ul>
                <li>Stay temporarily in the country you are applying to</li>
                <li>Conduct business and financial transactions</li>
                <li>Setup a temporary office</li>
                <li>Travel in that country</li>
              </ul>
            </div>
            <div>
              <h5 className='center'>ELIGIBILITY FOR APPLYING FOR BUSINESS VISA:</h5>
              <br/>
              <ul>
                <li>Intention of your visit must be business related</li>
                <li>You must have enough finances to cover your expenses during your stay</li>
                <li>You must intend to return to your home country after your visa expires</li>
              </ul>
              <br/>
              <p><strong>Documents required</strong></p>
              <div>
                <p>While each country has different requirements, there are certain documents which almost all of them ask for. These include:</p>
                <ul>
                  <li>A valid passport</li>
                  <li>Travel itinerary including accommodation and flight details</li>
                  <li>Business and professional credentials</li>
                  <li>Academic credentials</li>
                  <li>Evidence supporting that you plan to return to your base country after conducting your business</li>
                  <li>Evidence of adequate financial resources</li>
                  <li>Medical examination and evidence of adequate insurance</li>
                  <li>Filled application with enclosed fee</li>
                </ul>
              </div>
            </div>
            <div>
              <br/>
              <h5 className='center'>GET EXPERT SUPPORT FOR YOUR BUSINESS VISA</h5>
              <br/>
              <div>
                <p>As one of the world’s leading business visa &amp; migration consultancies,Migrate Overseas  can help you in the business visa application process. A dedicated visa consultant will be appointed to your case and will assist you throughout the process. Our support includes:</p>
                <ul>
                  <li>Help in collecting the required papers</li>
                  <li>Document checklist</li>
                  <li>Visa Interview Preparation – if required</li>
                  <li>Updates' Follow-up with the Consulate</li>
                </ul>
              </div>
            </div>
          </div>
          </div>
          </div>
          <Footer/>

</Fragment>

    );
}
export default Bussiness;