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
            <img src="images/spain.jpg" className="bussiness" height="400" width="800"/>
            <br/><br/>
            <div>If you wish to immigrate in Spain and you have sufficient income to support yourself and your dependents, you may apply for a Non-lucrative residence visa. This visa does not entitle you to work in Spain.<br /><br />You must have income of at least €25,560 annually, plus €6,390 per each additional family member. Income may be derived from investments, annuities, sabbaticals and any other sources of income.<br /><br />The visa issued will have a validity of three months and fifteen days, with multiple entries and 90 days of stay in Spain. Within one month of your arrival in Spain, you must apply for a residence permit and a foreign national identity card.<br /><br />The residence permit is usually issued for a period of 2 years, renewable, provided that you still meet the economic requirements and you have lived at least 183 days in Spain each year.<br /><br />After 5 years of holding the temporary residence permit, you will be eligible for permanent residency.<br /><br />The permanent residency will entitle you to live and work in Spain indefinitely.<br /><br />After 10 years of legal residency (temporary or permanent) you may be eligible for naturalization. To become a Spanish citizen, you will be required to commit to renounce your previous nationality, have financial stability, no criminal record, attend an interview and prove your degree of integration into Spanish society, e.g. knowledge of Spanish language, culture, values and participation in Spanish social activities.<br /><br />Note that nationals of the Philippines, Andorra, Spanish-American countries, Equatorial Guinea, Portugal, as well as individuals with Jewish Sephardic origin, may be eligible for citizenship after two years of legal residency.</div>
        <br />
        <h3 className='center'>Requirements</h3>
        <br />
        <p>- Not be in Spain with irregular immigration status.</p>
        <p>- Be over 18 years old.</p>
        <p>- Evidence of economic means sufficient to support your stay and, depending on the case, to support your family, during the length of stay you are applying for, without working.</p>
        <p>- Negative criminal record issued in the last three months by the authorities of the country or countries where you have resided in the past 5 years.</p>
        <p>- Medical insurance subscribed with a company legally entitled to operate in Spain.</p>
        <p>- Notarized document explaining why you are requesting this visa, the purpose, the place and length of your stay in Spain and any other reasons you need to explain, with a certified translation into Spanish.&nbsp;</p>
        <h3 className='center'>Documents Required</h3>
        <br />
        <ul>
          <li>Original and photocopy of passport</li>
          <li>Medical Certificate</li>
          <li>Original Police Clearance Certificate</li>
          <li>Proof of income</li>
          <li>Evidence of Health Insurance</li>
          <li>Receipt of payment of fees</li>
          <li>Notarized document regarding purpose of stay</li>
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