import React, { useState } from "react";
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

export default function LogIn() {
    const [isRegister, setIsRegister] = useState(false);
    const [step, setStep] = useState(false);

    return (
        <div className="main">
            <Header />
            <div className="main-body flex items-center justify-center py-10">
                <div className={`form-container ${isRegister ? 'active' : ''}`}>
                    {/* Login Form */} 
                    <div className="form-box login">
                        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                            <h1>Login</h1>
                            <div className="input-box">
                                <input id="login-email" type="email" placeholder="Email" required />
                                <img className="w-7" src={ inbox } alt="inbox-icon" />             
                            </div>
                            <div className="input-box">
                                <input id="login-password" type="password" placeholder="Password" required />
                                <img className="w-7" src={ lock } alt="lock-icon" />
                            </div>
                            <button type="submit" className="btn">Login</button>
                        </form>
                    </div>

                    {/* Register Form */} 
                    <div className="form-box register">
                        <div className={`register-steps ${step ? 'step-2' : ''}`}>
                            <form className="register-form" onSubmit={(e) => e.preventDefault()}>
                                <h1>Register</h1>
                                <div className="input-box">
                                    <input id="register-firstname" type="text" placeholder="First Name" required />
                                    <img className="w-7" src={ user } alt="user-icon" />
                                </div>
                                <div className="input-box">
                                    <input id="register-lastname" type="text" placeholder="Last Name" required />
                                    <img className="w-7" src={ user } alt="user-icon" />
                                </div>
                                <div className="input-box">
                                    <input id="register-email" type="email" placeholder="Email" required />
                                    <img className="w-7" src={ inbox } alt="user-icon" />
                                </div>
                                <div className="input-box">
                                    <input id="register-password" type="password" placeholder="Password" required />
                                    <img className="w-7" src={ lock } alt="user-icon" />
                                </div>
                                <button type="submit" className="btn" onClick={() => setStep(true)}>Register</button>
                            </form>
                            <form className="complete-form" onSubmit={(e) => e.preventDefault()}>
                                <h1>Complete information</h1>
                                <div className="input-box">
                                    <input type="text" placeholder="Address" required />
                                    <img className="w-7" src={ house } alt="user-icon" />
                                </div>
                                <div className="input-box">
                                    <input type="text" placeholder="Zip Code" required />
                                    <img className="w-7" src={ envelope } alt="user-icon" />
                                </div>
                                <div className="input-box">
                                    <input type="text" placeholder="City" required />
                                    <img className="w-7" src={ city } alt="user-icon" />
                                </div>
                                <div className="input-box">
                                    <input type="tel" placeholder="Mobile Phone" required />
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