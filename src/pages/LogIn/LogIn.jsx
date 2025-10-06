import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Input from "components/Input/Input"
import Button from "components/Button/Button";

import user from "assets/icon/user-solid-full.svg"
import inbox from "assets/icon/inbox-solid-full.svg"
import house from "assets/icon/house-solid-full.svg"
import city from "assets/icon/city-solid-full.svg"
import phone from "assets/icon/phone-solid-full.svg"
import lock from "assets/icon/lock-solid-full.svg"
import envelope from "assets/icon/envelope-solid-full.svg"

import "./LogIn.css"

import { createUser, checkLogin } from "api/api"

export default function LogIn() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();
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
                    setLoginMessage("Login successful!");
                    sessionStorage.setItem("Id", data.id);

                    navigate("/");
                }
            })
            .catch(err => {
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
            setFirstName(regFirstName);
            setLastName(regLastName);
            setEmail(regEmail);
            setPassword(regPassword);

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
            createUser({firstName: firstName, lastName: lastName, email: email, password: password, address: regAddress, postalCode: regZipCode, city: regCity, phone: regPhone})
            setRegisterMessage("Thanks for your register");

            checkLogin({ email: email, password: password })
            .then(data => {
                if (data) {
                    sessionStorage.setItem("Id", data.id);
                    navigate("/");
                }
            });
        }        
    }

    useEffect(() => {
        const id = sessionStorage.getItem("Id");

        if(id){
            navigate("/account");
        }
    }, [navigate]);

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
                            
                            <Input id={"login-email"} type={"email"} placeholder={"Email"} src={ inbox } alt={"inbox-icon"}></Input>
                            <Input id={"login-password"} type={"password"} placeholder={"Password"} src={ lock } alt={"lock-icon"}></Input>
                            
                            <Button type={ "submit "} text={ "Login" }></Button>
                        </form>
                    </div>

                    {/* Register Form */} 
                    <div className="form-box register">
                        <div className={`register-steps ${step ? 'step-2' : ''}`}>
                            {/* First Register From */}
                            <form className="register-form" onSubmit={prenventRegister}>
                                <h1>Register</h1>
                                
                                {registerMessage && <p className="form-description">{registerMessage}</p>}
                                
                                <Input id={"register-firstname"} type={"text"} placeholder={"First Name"} src={ user } alt={"user-icon"}></Input>
                                <Input id={"register-lastname"} type={"text"} placeholder={"Last Name"} src={ user } alt={"user-icon"}></Input>
                                <Input id={"register-email"} type={"email"} placeholder={"Email"} src={ inbox } alt={"inbox-icon"}></Input>
                                <Input id={"register-password"} type={"password"} placeholder={"Password"} src={ lock } alt={"lock-icon"}></Input>
                                
                                <Button type={ "submit "} text={ "Register" }></Button>
                            </form>

                            {/* Second Register From */}
                            <form className="complete-form" onSubmit={preventCompletRegister}>
                                <h1>Complete information</h1>
                                
                                {registerMessage && <p className="form-description">{registerMessage}</p>}
                                
                                <Input id={"register-address"} type={"text"} placeholder={"Address"} src={ house } alt={"house-icon"}></Input>
                                <Input id={"register-zipcode"} type={"text"} placeholder={"Zip Code"} src={ envelope } alt={"envelope-icon"}></Input>
                                <Input id={"register-city"} type={"text"} placeholder={"City"} src={ city } alt={"city-icon"}></Input>
                                <Input id={"register-phone"} type={"tel"} placeholder={"Mobile Phone"} src={ phone } alt={"user-icon"}></Input>
                                
                                <Button type={ "submit "} text={ "Register" }></Button>
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