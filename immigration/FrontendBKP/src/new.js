import React , { Component } from 'react' ;
import ReactDOM from 'react-dom';
import { Link, Route, Routes } from "react-router-dom";

import Services from "./pages/Services";
import Home from "./pages/Home";
import About from "./pages/About";
import Countries from "./pages/Countries";
import Contact from "./pages/Contact"; 


function App() {
    return ( 
    <>
        {/*
           <Link to="/">Home </Link> 
            <Link to="/Services">Services </Link>
            <Link to="/About">Services </Link>
            <Link to="/Countries">Countries </Link>
            <Link to="/Contact">Contact Us </Link>
            {
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Countries" element={<Countries />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            }
        */}

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
                        <a href="" className="contact_link3">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <span>
                migrateover@gmail.com
              </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="header_bottom">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container">
                        <a className="navbar-brand" href="/">
                            <span>
                Migrate Overseas
              </span>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""></span>
            </button>

                        <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                            <ul className="navbar-nav  ">
                                <li className="nav-item active">
                                <Link to="/About" className="nav-link">
                                 About
                                </Link>
                                </li>
                                <Link to="/Services" className="nav-link">
                                 Services
                                </Link>
                                <li className="nav-item">
                                    <a className="nav-link" href="about.html"> About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="countries.html"> Countries </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Contact us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="hiring.html">Hiring</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>

        <section className=" slider_section ">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-7">
                                    <div className="detail-box">
                                        <h1>
                                            Imagine A Better Future.<br/> Make It Happen.
                                        </h1>
                                        <p>
                                            A one-stop solution for all your visa needs!
                                        </p>
                                        <div className="btn-box">
                                            <a href="" className="btn-1"> Know more </a>
                                            <a href="" className="btn-2">Get A Quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" role="button" data-slide="prev"></a>
                    <div className="carousel-item ">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-7">
                                    <div className="detail-box">
                                        <h1>
                                            Imagine A Better Future.<br/> Make It Happen.
                                        </h1>
                                        <p>
                                            A one-stop solution for all your visa needs!
                                        </p>
                                        <div className="btn-box">
                                            <a href="" className="btn-1"> Read more </a>
                                            <a href="" className="btn-2">Get A Quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-7">
                                    <div className="detail-box">
                                        <h1>
                                            Imagine A Better Future.<br/> Make It Happen.
                                        </h1>
                                        <p>
                                            A one-stop solution for all your visa needs!
                                        </p>
                                        <div className="btn-box">
                                            <a href="" className="btn-1"> Read more </a>
                                            <a href="" className="btn-2">Get A Quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container idicator_container">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                </div>
            </div>
        </section>
        
    </div>
      <Routes>
      <Route path="/Services" element={<Services />} />
      </Routes>

    <section className="service_section layout_padding">
        <div className="container">
            <div className="heading_container heading_center">
                <h2>
                    Our services
                </h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="box ">
                        <div className="img-box">
                            <img src="images/s1.png" alt=""/>
                        </div>
                        <div className="detail-box">
                            <h6>
                                Business Visa
                            </h6>
                            <p>
                                Business Visas aid in the facilitation of trade and commerce between countries.We can assist you in evaluating your options and applying for a visa that will provide you with the best opportunity to conduct business abroad.
                            </p>
                            <a href="">
                Read More
              </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="box ">
                        <div className="img-box">
                            <img src="images/s2.png" alt=""/>
                        </div>
                        <div className="detail-box">
                            <h6>
                                Work Visa
                            </h6>
                            <p>
                                A work visa allows you to enter a foreign nation and work temporarily. Each country will have its work visa requirements. The procedures and eligibility criteria for a work visa will also differ for each country.
                            </p>
                            <a href="">
                Read More
              </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="box ">
                        <div className="img-box">
                            <img src="images/s3.png" alt=""/>
                        </div>
                        <div className="detail-box">
                            <h6>
                                Tourist Visa
                            </h6>
                            <p>
                                Applying for a visa is not an easy task. We can easily feel overwhelmed with an infinite list of regulations to follow and documents to keep track of.We have a high success rate and provide the best service in the industry.
                            </p>
                            <a href="">
                Read More
              </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="box ">
                        <div className="img-box">
                            <img src="images/s4.png" alt=""/>
                        </div>
                        <div className="detail-box">
                            <h6>
                                Student Visa
                            </h6>
                            <p>
                                Studying Abroad strides the career direction to the highest level for a student. And graduating from universities abroad can provide global exposure and intercontinental prominence for the degree.
                            </p>
                            <a href="">
                Read More
              </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="about_section layout_padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 px-0">
                    <div className="img_container">
                        <div className="img-box">
                            <img src="images/about-img.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 px-0">
                    <div className="detail-box">
                        <div className="heading_container ">
                            <h2>
                                Who Are We?
                            </h2>
                        </div>
                        <p>
                            Migrate Overseas are one of the leading Immigration Consultant in Punjab. We provide Bussiness Visa,Study Visa,Work Visa and Tourist Visa services. Our main target destination is the France, Canada, Australia, United States, Spain and New Zealand. Providers
                            Overseas provide high-quality services for students, professionals, and tourists. We are one of the leading companies providing study visas for students to study abroad in any country that we mentioned above.
                        </p>
                        <div className="btn-box">
                            <a href="">
                Read More
              </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="country_section layout_padding">
        <div className="container">
            <div className="heading_container heading_center">
                <h2>
                    Choose Country
                </h2>
                <p>
                    Select country you want to apply visa for
                </p>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <a href="" className="box">
                        <img src="images/c1.jpg" alt=""/>
                        <div className="detail-box">
                            <h3>
                                France
                            </h3>
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="" className="box">
                        <img src="images/c2.jpg" alt=""/>
                        <div className="detail-box">
                            <h3>
                                Canada
                            </h3>
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="" className="box">
                        <img src="images/c3.jpg" alt=""/>
                        <div className="detail-box">
                            <h3>
                                United States
                            </h3>
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="" className="box">
                        <img src="images/c4.jpg" alt=""/>
                        <div className="detail-box">
                            <h3>
                                New Zealand
                            </h3>
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="" className="box">
                        <img src="images/c5.jpg" alt=""/>
                        <div className="detail-box">
                            <h3>
                                Australia
                            </h3>
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="" className="box">
                        <img src="images/c6.jpg" alt=""/>
                        <div className="detail-box">
                            <h3>
                                Spain
                            </h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

   
    <section className="contact_section layout_padding">
        <div className="contact_bg_box">
            <img src="images/flight2.jpg" alt=""/>
        </div>
        <div className="container">
            <div className="heading_container heading_center">
                <h2>
                    Contact Us
                </h2>
            </div>
            <div className="row">
                <div className="col-md-9 mx-auto">
                    <div className="form_container">
                        <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" placeholder="First Name" name="n1" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Last Name" name="n2" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" placeholder="Email" name="n3" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Phone Number" name="n4" />
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <input type="text" className="message-box" placeholder="Message" name="n5" />
                                </div>
                                <div className="btn-box">
                                    <button type="submit">Submit</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
   

    <section className="client_section layout_padding">
        <div className="container">
            <div className="heading_container">
                <h2>
                    What Says Our Client
                </h2>
            </div>
            <div className="client_container">
                <div className="carousel-wrap ">
                    <div className="owl-carousel">
                        <div className="item">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/client-1.jpg" alt="" className="img-1"/>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Mark Evans
                                    </h5>
                                    <h6>
                                        Magna
                                    </h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua. Ut enim ad minim
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/client-2.jpg" alt="" className="img-1"/>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Anthony White
                                    </h5>
                                    <h6>
                                        Magna
                                    </h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua. Ut enim ad minim
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/client-1.jpg" alt="" className="img-1"/>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Mark Evans
                                    </h5>
                                    <h6>
                                        Magna
                                    </h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua. Ut enim ad minim
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/client-2.jpg" alt="" className="img-1"/>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Anthony White
                                    </h5>
                                    <h6>
                                        Magna
                                    </h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua. Ut enim ad minim
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  
    <section className="info_section ">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="info_logo">
                        <a className="navbar-brand" href="index.html">
                            <span>
               Migrate Overseas
              </span>
                        </a>
                        <p>
                            Migrate Overseas are one of the leading Immigration Consultant in Punjab. We provide Bussiness Visa,Study Visa,Work Visa and Tourist Visa services.
                        </p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="info_links">
                        <h5>
                            Useful Link
                        </h5>
                        <ul>
                            <li>
                                <a href="">
                  Home
                </a>
                            </li>
                            <li>
                                <a href="service.html">
                  Services
                </a>
                            </li>
                            <li>
                                <a href="about.html">
                  About us
                </a>
                            </li>
                            <li>
                                <a href="countries.html">
                  Countries
                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="info_info">
                        <h5>
                            Contact Us
                        </h5>
                    </div>
                    <div className="info_contact">
                        <a href="" className="">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <span>
                Mohali,Punjab
              </span>
                        </a>
                        <a href="" className="">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <span>
                Call : +91 9041412730
              </span>
                        </a>
                        <a href="" className="">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <span>
                migrateover@gmail.com
              </span>
                        </a>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="info_form ">
                        <h5>
                            Newsletter
                        </h5>
                        <form action="#">
                            <input type="email" placeholder="Enter your email"/>
                            <button>
                Subscribe
              </button>
                        </form>
                        <div className="social_box">
                            <a href="">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-youtube" aria-hidden="true"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <footer className="container-fluid footer_section">
        <p>
            &copy; <span id="displayYear"></span> Migrate Overseas 2022 - All Rights Reserved


        </p>
    </footer>
     </>
    );
}

export default App;