import React, { Fragment, useEffect, useState } from 'react';
import { Link, Route, Routes, Switch } from "react-router-dom";
import { getAuth, removeAuth } from '../helper/auth';
function Menu() {
    const [state, setState] = useState({
        userTOken: ""
    })
    useEffect(() => {
        console.log("getAuth()")
        console.log(getAuth())
        var token = getAuth()
        if (token != false) {
            setState({
                ...state,
                userTOken: token,
            })
        }
    }, [])

    const LogoutNow = () => {
        removeAuth(() => {
            window.location.href = "/"
        });
    }
    return (
        <Fragment>

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
                                <Link to="/" class="nav-link">Home</Link>
                                {/* <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a> */}
                            </li>
                            <li class="nav-item">
                                <Link to="/services" class="nav-link">Services</Link>
                                {/* <a class="nav-link" href="service.html"> Services </a> */}
                            </li>
                            <li className="nav-item">
                                <Link to="/about" class="nav-link">About</Link>
                                {/* <Link to="./pages/about" className='nav-link'>About</Link> */}
                            </li>

                            <li className="nav-item">
                                <Link to="/countries" class="nav-link" >Countries</Link>
                                {/* <a className="nav-link" href="countries.html"> Countries </a> */}
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" class="nav-link">Contact Us</Link>
                                {/* <a className="nav-link" href="contact.html">Contact us</a> */}
                            </li>
                            <li className="nav-item">
                                <Link to="/hiring" class="nav-link" >Hiring</Link>
                                {/* <a className="nav-link" href="hiring.html">Hiring</a> */}
                            </li>
                            <li className="nav-item">
                                {
                                    state.userTOken == "" ?
                                        <Link to="/login" class="nav-link" >Login</Link> :
                                        <Link onClick={LogoutNow} class="nav-link" >Logout</Link>

                                }
                                {/* <a className="nav-link" href="hiring.html">Hiring</a> */}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        </Fragment>
    );
}
export default Menu;