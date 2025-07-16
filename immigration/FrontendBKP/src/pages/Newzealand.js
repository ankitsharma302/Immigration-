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
            <img src="images/newzealand.jpg" className="bussiness" height="400" width="800"/>
            <br/><br/>
            <p>New Zealand remains as one of the world's strongest economies in the world and many want to migrate here for its diversity, beautiful landscapes and overall quality of life.</p>
        <p>The New Zealand migration program does not discriminate and is open to anyone from any country regardless of their ethnic origin, gender, colour, religion, provided they meet the criteria set out in law.</p>
        <p>If you would like an opportunity to live and work in New Zealand, there are many visa options available to you. Find the New Zealand visa most likely to&nbsp;<a href="http://www.immigration.govt.nz/new-zealand-visas" target="_blank">meet your specific circumstances</a> here.</p>
        <p><strong>How to apply for permanent residency (PR)?</strong></p>
        <p><strong>Gather documents</strong></p>
        <p>Gather information about the process and the right visa category to apply. Preparing an application varies in complexity. If you’re unsure,&nbsp;<a href="https://www.idp.com/newzealand/why-idp/our-team/">speak to us</a>, lawyer or migration agent so that you get a clearer picture of what needs to be done. Once you identify the ideal visa category and confirm your eligibility for an New Zealand PR visa, compile all evidence together to submit when you’re invited to apply for the visa.</p>
        <p><strong>Competent English</strong></p>
        <p>Some visa applications require you to show you have Competent English. You can do so if you either:</p>
        <ul>
          <li>achieve the relevant score in IELTS or other approved English language test. You must have undertaken the test, no more than 2 years at the time your application on lodged.</li>
          <li>evidence of citizenship in Canada, Ireland, the United Kingdom (UK) or the United States of America (USA), and evidence of having spent at least five years working or studying in those countries, or in Australia or New Zealand</li>
          <li>evidence of a recognised qualification gained in Australia, Canada, New Zealand, Ireland, the UK or the USA. The qualification must be comparable to a New Zealand bachelor’s degree. You must have studied for at least two years in any of those countries to get that qualification</li>
          <li>evidence of a recognised qualification gained in Australia, Canada, New Zealand, Ireland, the UK or the USA. The qualification must be comparable to a postgraduate New Zealand qualification. You must have studied for at least one year in any of those countries to get that qualification.<br />&nbsp;</li>
        </ul>
        <h3 className='center'><strong>Requirements your family must meet</strong></h3><br/>
        <p>Other people included in the application who are aged 16 and older can either meet the requirements above, or pre-purchase English tuition. Children under 16 do not have to meet English language requirements.</p>
        <p><strong>Application</strong></p>
        <p>There’s a lot of information and tools on the&nbsp; Migrate Overseas to help you meet the visa criteria. Be fully prepared and plan ahead to help ensure your application doesn’t need to be sent back to you for more information. Double check all your documents and read all available application guidance.&nbsp;</p>
        <p>Generally, visas come with an associated&nbsp; The cost will depend on the type of visa you’re applying for.&nbsp; Visit Migrate Overseas if you’d like to know how long it will take to process your visa application.&nbsp;</p>
        <p><strong>Submit Application</strong></p>
        <p>Most visas can be applied for online. Others need to be sent with the application forms, your passport and other supporting documents.&nbsp;</p>
        <p><strong>Wait for visa decision</strong></p>
        <p>Your application will be assessed, and you may be asked more information if needed. Once you have submitted your visa application you can find out the status of your application whether it is a paper application, or an application submitted online by using the information&nbsp; here.</p>
        <p><strong>Maintaining lawful status</strong></p>
        <p>If you‘re in New Zealand on a temporary visa and need another temporary visa, you should apply at least two weeks before your current visa expires.</p>
        <p>If NZ Immigration believes your current visa may expire while they’re assessing your application, they may grant you an interim visa so you can maintain your lawful status in New Zealand.</p>
      </div>
      </div>
      </div>
          </div>
          <Footer/>

</Fragment>

    );
}
export default Canada;