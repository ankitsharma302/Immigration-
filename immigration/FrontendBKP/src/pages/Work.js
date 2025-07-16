import React, { Fragment } from 'react';
import { Link, Route, Routes, Switch } from "react-router-dom";
import Menu from './Menu';
import Footer from './Footer';
// import "./Work.css";
function Work(){
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
            <div className="workvisa">
            <img src="images/work.jpg" className="bussiness" height="400" width="1000"/>
             <br/><br/>
              <p>Do you want to build a career and life abroad? As one of the world’s leading overseas career specialists and a leading work visa agent, Migrate Overseas has helped thousands of individuals and families settle in the world’s most liveable countries. We’ve seen firsthand how moving abroad can dramatically improve not just the migrant’s life but that of their family and parents. With our comprehensive&nbsp; overseas career solutions, we are the #1 choice for professionals seeking to work abroad.</p>

            <div>
              <br/>
              <h5 className='center'>END TO END JOB SEARCH SERVICES</h5>
             <br/>
              <p>Migrate Overseas has streamlined the steps involved in working abroad to make your journey smoother. Our process is aimed at making your profile more accessible, attractive and engaging. Our services begin with helping you create a resume that meets international standards and help you craft an engaging LinkedIn profile. We then market your profile in the countries of your choice and work to get you interview calls. A dedicated Job Search consultant will work with you on your international career, guiding you through the process.</p>
              <div>
              <br/>

                <h5 className='center'>OUR JOB SEARCH SERVICES INCLUDE THE FOLLOWING:</h5>
                <br/>
                <ul>
                  <li><strong>Job Search Strategy Report:</strong> With the help of experts, we create a comprehensive report based on your profile and decide on positioning it in your target country</li>
                  <li><strong>Opportunity Research:</strong> We identify industry trends and job sources to get you more job offers. We help you modify your profile to present it on different platforms</li>
                  <li><strong>Job Applications:</strong> We register your profile on various portals and job sites and even apply to relevant job postings on your behalf</li>
                </ul>
              </div>
              </div>
            
        <div>
          <div>
            <div>
              <br/>
              <h3 className='center'><bold>WHY WORK ABROAD?</bold></h3>
              <br/>
              <p>Working abroad can dramatically transform your life and career. Working in a foreign country would surely require you to acquire new abilities. You will learn new soft skills, such as communication and networking, as well as new technical skills at your new career abroad. After all, navigating a new location without knowing the language requires resourcefulness, and working in an international team will improve your communication skills.</p>
              <p>Working overseas also gives you the opportunity to learn a foreign language. This will not only help you in your work but also make living abroad easier for you. Besides this, your new language skills will have a positive impact on your career.</p>
              <p>Working in a foreign country is a fantastic way to broaden your personal and professional network. Working in another country exposes you to fresh opportunities because you will be collaborating with locals and expats from other countries. You will also develop friendships with people from various walks of life, some of which will last a lifetime.</p>
              <p>Having an international assignment on your resume may help you find work in the future. In recruiting, talent mobility is a hot topic, and an increasing proportion of future professions will necessitate foreign travel. Working overseas will demonstrate your flexibility and independence, as well as make your resume stand out from the crowd. Additionally, any other talents you acquire while abroad, such as language skills, will enhance your resumé.</p>
              <p><strong>Working abroad is the perfect option for you if you plan to:</strong></p>
              <div>
                <ul>
                  <li>Grow your career and have international mobility</li>
                  <li>Earn dollar salaries leading to higher saving</li>
                  <li>Live in well-developed countries</li>
                  <li>Have access to world-class education &amp; healthcare</li>
                  <li>Gain access to citizen benefits</li>
                  <li>Get a powerful passport that facilitates international travel</li>
                  <li>Transform your family’s life</li>
                </ul>
              </div>
          </div>
          </div>
          </div>
          </div>
   </div>
          </div>
 <Footer/>
</Fragment>

    );
}
export default Work;