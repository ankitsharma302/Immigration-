
import React, { Fragment, useState } from 'react';
import { Link, Route, Routes, Switch } from "react-router-dom";
import Menu from './Menu';
import Footer from './Footer';
import axios from 'axios';

function Contact() {
    const [state, setState] = useState({
        fname: "",
        lname: "",
        phone: "",
        email: "",
        message: "",
    })


    const handleChange = e => {
        const { name, value } = e.target

        setState({
            ...state,
            [name]: value
        })
    }

    const submitNow = () => {
        axios.post(`${process.env.REACT_APP_NODE_URL}/contact/new`, state)
            .then(result => {
                // login success
                console.log(result)
                console.log(result.data.message)
                alert(result.data.message)
                setState({
                    ...state,
                    fname: "",
                    lname: "",
                    phone: "",
                    email: "",
                    message: "",
                })
            })
            .catch(err => {
                console.log(err.response.data.error)
            })
    }

    return (
        <>
            <div className="sub_page">
                <div className="hero_area">

                    <div className="hero_bg_box">
                        <div className="img-box">
                            <img src="images/Plane.jpeg" alt="" />
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
                        <Menu />
                    </header>

                </div>


                <section className="contact_section layout_padding">
                    <div className="contact_bg_box">
                        <img src="images/flight2.jpg" alt="" />
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
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" placeholder="First Name" id="user" name="fname" onChange={handleChange} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" placeholder="Last Name" name="lname" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input type="email" className="form-control" placeholder="Email" name='email' onChange={handleChange} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" placeholder="Phone Number" name='phone' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group ">
                                        <input type="text" className="message-box" placeholder="Message" name='message' onChange={handleChange} />
                                    </div>
                                    <div className="btn-box">
                                        <button type="submit" onClick={submitNow}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>

        </>
    );
}
export default Contact;

