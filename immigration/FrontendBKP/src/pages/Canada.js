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
            <img src="images/canada.jfif" className="bussiness" height="400" width="800"/>
            <br/><br/>
            <p>Canada remains one of the most popular choices for immigrants from India and across the world. India is one of the top sources of highly skilled talent in Canada. The reasons for this are not hard to find. Canada offers the best combination of urban efficiency coupled with a laid-back rural lifestyle.</p>
        <p>It is a country where you may advance professionally while still maintaining a work-life balance and providing quality healthcare and education for your entire family. The following advantages can be obtained through immigration to Canada. Our&nbsp;Canadian immigration consultant can help you realize your dream of migrating to Canada in the smoothest possible way.</p>
        <br/>
        <h3 className='center'>What are the Advantages of Canadian Immigration?</h3>
        <br/>
        <ul>
          <li>Immigration to Canada enables you to live, work and study anywhere in Canada.</li>
          <li>You will be able to earn in Canadian dollars which is one of the strongest currencies in the world.</li>
          <li>You can get Canadian citizenship within three years of completing your immigration process with a qualified Canadian immigration consultant.</li>
          <li>You and your family can get access to affordable universal healthcare benefits.</li>
          <li>You can get free education for your children up to university level as well as several scholarship options for university-level education as well.</li>
          <li>Number of job opportunities in various industries such as medical, teaching, IT, hospitality, manufacturing, and others.</li>
          <li>Canada has the easiest immigration process in the world and the right immigration consultant can expedite the process.</li>
          <li>It is possible to take your entire family including your parents with you when you immigrate to Canada.</li>
          <li>Canada PR holders are eligible for unemployment benefits and are protected under the Canadian law.</li>
        </ul>
       <br/>
        <h3 className='center'>What is the Immigration Process for Canada?</h3>
        <br/>
        <p>If you are planning to immigrate to Canada and settle permanently in the country, then you will need to go through the Canada Immigration Process.</p>
        <ul>
          <li>The immigration process will differ based on your educational and professional background as well as your personal preferences.</li>
          <li>There are many pathways for immigration to Canada. The huge number of paths available can make it confusing if you are a first-time applicant. It is therefore beneficial to take the services of a good immigration consultant.</li>
          <li>Canada follows a multi-faceted system for immigration into the country. Federal and provincial governments in Canada welcome skilled, semi-skilled, and agricultural workers.</li>
          <li>The most popular avenue for immigration to Canada is the Express Entry stream which works on a points-based system.</li>
          <li>Other pathways for&nbsp; immigration to Canada are work-permit visas, which allow its holder to work in Canada for a limited amount of time. A person can choose to extend a work permit and seek permanent residency without ever having lived in the nation.</li>
          <li>Quebec, has its pathway for immigration to its province, as it is an autonomous region within Canada.</li>
          <li>You can also choose to enter the country as a student and then gain experience in a Canadian company and gain extra points to migrate through the Express Entry.</li>
        </ul>
        <p> To check your CRC Score to apply for PR ypu have to login <Link to="/Login">here</Link></p>
      </div>
      </div>
      </div>
          </div>
          <Footer/>

</Fragment>

    );
}
export default Canada;