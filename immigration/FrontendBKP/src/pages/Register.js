import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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

    const registerNow = () => {
        axios.post(`${process.env.REACT_APP_NODE_URL}/user/register`, { email: user.email, password: user.password })
            .then(result => {
                // register success and go to login page
                console.log(result)
                window.location.href = '/login'
                alert(result.data.message)
            })
            .catch(err => {
                console.log(err.response.data.error)
            })
    }
    return (
        <>
            <div id="loginDiv">
                <Menu />
                <div className="login form">
                    <h1>Register Here</h1>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={handleChange} />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handleChange} />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="form-floating mb-3">
                        <p>Already a member ? <Link to={"/login"}>Login</Link></p>
                    </div>
                    <div class="form-floating">
                        <button className="btn btn-primary" onClick={registerNow}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;