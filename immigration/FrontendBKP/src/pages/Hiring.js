import React, { Fragment } from 'react';
import { Link, Route, Routes, Switch } from "react-router-dom";
import Menu from './Menu';
import Footer from './Footer';
function Hiring(){
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
      <div className="countries">
        <div>
          <br/>
          <h2 className='center'>Visa Counsellor/Immigration Advisors</h2>
        </div>
        <br/>
        <div>
          <p><strong>Career with Migrate Overseas</strong></p>
          <p><strong>Location</strong>- Mohali</p>
          <p><strong>Candidate Eligibility</strong></p>
          <ul>
            <li><strong>Education</strong>: Bachelor’s from Any stream or under graduate</li>
            <li>Good communication skills</li>
            <li>Hard working</li>
            <li>Should have motivational spirit towards monthly targets</li>
            <li>Pleasant personality</li>
          </ul>
          <p><strong>Experience</strong></p>
          <ul>
            <li>From the Immigration industry with 1 to 4 Years of experience or any experience in SALES as counselor.</li>
            <li>Even Fresher’s can apply</li>
            <li>Female candidate preferred.</li>
            <li>Prior experience into Immigration,Canada PR,Australia PR, will be preferred</li>
          </ul>
          <p><strong>Job Description</strong></p>
          <ul>
            <li>Should have good knowledge of PR visa for Canada, Australia</li>
            <li>Cold calling to arrange meetings with potential customers to prospect for new business</li>
            <li>Attend walk-ins to the office and counsel for overseas opportunities.</li>
            <li>Cold calling to arrange meetings with potential customers to prospect for new business</li>
            <li>Aiming to meet or exceed targets.</li>
            <li>Keep regular follow up with clients for immigration process</li>
            <li>Target oriented &amp; self-motivated</li>
            <li>Maximizing Conversion ratio</li>
            <li>Providing information about different visa process over calls, emails and walk-ins</li>
            <li>Leads given by the Management.</li>
            <li>Training provided by the Company.</li>
            <li>Counselling clients. Acquisition of new Clients &amp; follow up with existing clients. Should handle entire Sales Development Cycle.</li>
            <li>For career with Migrate Overseas should be able to work under pressure of deadlines/goals</li>
            <li>Meet revenue and bottom line targets</li>
          </ul>
        </div>
        <div>Mail here:</div>
        <div><a href="mailto:migrateover@gmail.com">Here</a></div>
      </div>

      <Footer/>
    </div>
        </Fragment>
    );
}
export default Hiring;