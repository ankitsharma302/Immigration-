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
            <img src="images/france.jpg" className="bussiness" height="400" width="800"/>
            <br/><br/>
            <p>Affordable tuition fees, outstanding research facilities, and a flexible education system are driving forces in attracting students to France. The country offers an advantage for students unfamiliar with the French language by offering plenty of English-taught programs. Let’s start by knowing more reasons to study in France.&nbsp;</p>
        <p>What makes France an ideal study destination?&nbsp;</p>
        <p>Some of the top factors that make France an ideal study destination are:</p>
        <h4>1. English-taught programs:</h4>
        <p>&nbsp;This is probably one of the most beneficial aspects of the French education system. By including English-taught programs in their curriculum, French universities offer an opportunity for students to learn in English.&nbsp;</p>
        <h4>2. Affordable tuition costs:&nbsp;</h4>
        <p>Compared to other European countries, studying in France is comparatively more affordable than in other countries like the UK.</p>
        <h4>3. Globally recognized for research:&nbsp;</h4>
        <p>Known as a hub of research and innovation, French universities offer students one of the best research facilities.&nbsp;</p>
        <h4>4. Offers a chance to learn a new language:&nbsp;</h4>
        <p>Although English is a global language, French is considered the third most common business language and the official language in over 30 countries worldwide. Studying in France gives students a chance to learn French.</p>
        <br/>
        <h3 className='center'>Applying for a France student visa&nbsp;</h3>
        <br/>
        <p>Nationals from distinct countries apply for a &nbsp;French student visa through Campus France, the country’s official national agency for higher education and international students. To start with your visa application, you must follow the steps mentioned below:</p>
        <ul>
          <li>Create an account at www.india.campusfrance.org</li>
          <li>Fill out the Campus France form by mentioning your academic records and language skills and submitting certain documents such as your updated CV and Statement of Purpose&nbsp;</li>
          <li>Submit your file</li>
        </ul>
        <p>Once you submit your application, it would get reviewed by Campus France, and you would be assigned an appointment date. The next step involves paying the Campus France fee.</p>
        <br/>
        <h3 className='center'><strong>Documents needed for student visas:&nbsp;</strong></h3>
        <br/>
        <ul>
          <li>Invitation letter for preliminary admission tests.&nbsp;</li>
          <li>Registration certificate for school/university.&nbsp;</li>
          <li>For those under 18, a signed letter from the applicant’s parents permits them to move to the country.&nbsp;</li>
          <li>Copy of the last finished educational diploma or degree.&nbsp;</li>
          <li>Scholarship certificate copy if it is applicable.&nbsp;</li>
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