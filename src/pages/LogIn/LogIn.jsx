import React from "react";
import { useState } from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import user from "assets/icon/user-solid-full.svg"
import inbox from "assets/icon/inbox-solid-full.svg"
import house from "assets/icon/house-solid-full.svg"
import city from "assets/icon/city-solid-full.svg"
import phone from "assets/icon/phone-solid-full.svg"
import lock from "assets/icon/lock-solid-full.svg"
import envelope from "assets/icon/envelope-solid-full.svg"
import "./LogIn.css"

import { creatuser, getUser, checkLogin } from "api/api"

export default function LogIn() {
    const [log, setLog] = useState();
    const [isRegister, setIsRegister] = useState(false);
    const [step, setStep] = useState(false);
    const [loginMessage, setLoginMessage] = useState('Please enter your login details below.');
    const [registerMessage, setRegisterMessage] = useState('Please enter your register details below.');

    const preventLogin = (e) => {
        e.preventDefault();

        const logEmail = document.getElementById("login-email").value;
        const logPassword = document.getElementById("login-password").value;

        if (logEmail === "" || logPassword === "") {
            setLoginMessage("Error: Email and Password are required.");
            return;
        }

        checkLogin({ email: logEmail, password: logPassword })
            .then(data => {
            if (!data) {
                setLoginMessage("Error: Email and Password are not correct.");
            } else {
                setLog(data);
                setLoginMessage("Login successful!");
                // setup session storage
            }
            })
            .catch(err => {
            console.error(err);
            setLoginMessage(err.message);
        });
    };

    const prenventRegister = (e) => {
        e.preventDefault();

        const regFirstName = document.getElementById("register-firstname").value;
        const regLastName = document.getElementById("register-lastname").value;
        const regEmail = document.getElementById("register-email").value;
        const regPassword = document.getElementById("register-password").value;

        if(regFirstName === "" || regLastName === "" || regEmail === "" || regPassword === "") {
            setRegisterMessage("Error: All fields are required.");
        } else {
            setStep(true);
            setRegisterMessage("Please complete your register details below.");
        }
    }

    const preventCompletRegister = (e) => {
        e.preventDefault();

        const regAddress = document.getElementById("register-address").value;
        const regZipCode = document.getElementById("register-zipcode").value;
        const regCity = document.getElementById("register-city").value;
        const regPhone = document.getElementById("register-phone").value;

        if(regAddress === "" || regZipCode === "" || regCity === "" || regPhone === "") {
            setRegisterMessage("Error: All fields are required.");
        } else {
            /* On connect à l'auth */
        }
    }

    return (
        <div className="main">
            <Header />
            <div className="main-body flex items-center justify-center py-10">
                <div className={`form-container ${isRegister ? 'active' : ''}`}>
                    {/* Login Form */} 
                    <div className="form-box login">
                        <form className="login-form" onSubmit={preventLogin}>
                            <h1>Login</h1>
                            {loginMessage && <p className="form-description">{loginMessage}</p>}
                            <div className="input-box">
                                <input id="login-email" type="email" placeholder="Email" />
                                <img className="w-7" src={ inbox } alt="inbox-icon" />             
                            </div>
                            <div className="input-box">
                                <input id="login-password" type="password" placeholder="Password" />
                                <img className="w-7" src={ lock } alt="lock-icon" />
                            </div>
                            <button type="submit" className="btn">Login</button>
                        </form>
                    </div>

                    {/* Register Form */} 
                    <div className="form-box register">
                        <div className={`register-steps ${step ? 'step-2' : ''}`}>
                            {/* First Register From */}
                            <form className="register-form" onSubmit={prenventRegister}>
                                <h1>Register</h1>
                                
                                {registerMessage && <p className="form-description">{registerMessage}</p>}
                                
                                <div className="input-box">
                                    <input id="register-firstname" type="text" placeholder="First Name" />
                                    <img className="w-7" src={ user } alt="user-icon" />
                                </div>
                                <div className="input-box">
                                    <input id="register-lastname" type="text" placeholder="Last Name" />
                                    <img className="w-7" src={ user } alt="user-icon" />
                                </div>
                                <div className="input-box">
                                    <input id="register-email" type="email" placeholder="Email" />
                                    <img className="w-7" src={ inbox } alt="user-icon" />
                                </div>
                                <div className="input-box">
                                    <input id="register-password" type="password" placeholder="Password" />
                                    <img className="w-7" src={ lock } alt="user-icon" />
                                </div>
                                
                                <button type="submit" className="btn">Register</button>
                            </form>

                            {/* Second Register From */}
                            <form className="complete-form" onSubmit={preventCompletRegister}>
                                <h1>Complete information</h1>
                                
                                {registerMessage && <p className="form-description">{registerMessage}</p>}
                                
                                <div className="input-box">
                                    <input id="register-address" type="text" placeholder="Address" />
                                    <img className="w-7" src={ house } alt="user-icon" />
                                </div>
                                <div className="input-box">
                                    <input id="register-zipcode" type="text" placeholder="Zip Code" />
                                    <img className="w-7" src={ envelope } alt="user-icon" />
                                </div>
                                <div className="input-box">
                                    <input id="register-city" type="text" placeholder="City" />
                                    <img className="w-7" src={ city } alt="user-icon" />
                                </div>
                                <div className="input-box">
                                    <input id="register-phone" type="tel" placeholder="Mobile Phone" />
                                    <img className="w-7" src={ phone } alt="user-icon" />
                                </div>
                                
                                <button type="submit" className="btn">Register</button>
                            </form>
                        </div>
                    </div>

                    {/* Toggle Box */} 
                    <div className="toggle-box">
                        {/* Toggle Box Left*/} 
                        <div className="toggle-panel toggle-left">
                            <h1>Hello, Welcome !</h1>
                            <p>Don't have an acccount ?</p>
                            <button type="button" className="btn register-btn" onClick={() => setIsRegister(true)}>Register</button>  
                        </div>

                        {/* Toggle Box Right*/} 
                        <div className="toggle-panel toggle-right">
                            <h1>Welcome back !</h1>
                            <p>Alreday have an acccount ?</p>
                            <button type="button" className="btn login-btn" onClick={() => setIsRegister(false)}>Log In</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}