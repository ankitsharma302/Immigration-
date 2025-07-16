import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { setAuth, setCookie } from "../helper/auth";
import "./Login.css";
import Menu from "./Menu";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleChange = e => {
        const { name, value } = e.target

        setUser({
            ...user,
            [name]: value
        })
    }

    const loginNow = () => {
        axios.post(`${process.env.REACT_APP_NODE_URL}/user/login`, { "email": user.email, "password": user.password })
            .then(result => {
                // login success
                console.log(result)
                console.log(result.data.message)
                alert(result.data.message)
                // redirect to dat.js page
                // window.location.href = "/data"
                setAuth(result.data.token, () => {
                    window.location.href = "/data"
                })
            })
            .catch(err => {
                console.log(err)
                alert(err.response.data.error)
                // console.log(err.response.data.error)
            })
    }
    return (
        <>
            <div id="loginDiv">
                <Menu />
                <div className="login form">
                    <h1>Login Here</h1>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={handleChange} />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handleChange} />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="form-floating mb-3">
                        <p>Not a member ? <Link to={"/register"}>Register</Link></p>
                    </div>
                    <div class="form-floating">
                        <button className="btn btn-primary" onClick={loginNow}>LOGIN</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;