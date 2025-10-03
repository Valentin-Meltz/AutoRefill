import React from "react";
import { useEffect } from "react";
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
    useEffect(() => {
        const container = document.querySelector(".main-container");
        const registerBtn = document.querySelector(".register-btn");
        const loginBtn = document.querySelector(".login-btn");

        registerBtn.addEventListener("click", () => {
            container.classList.add("active");
        });

        loginBtn.addEventListener("click", () => {
            container.classList.remove("active");
        });
    }, []);

    return (
        <div className="main">
            <Header />
            <div className="main-body flex items-center justify-center py-10">
                <div className="main-container">
                    {/* Login Form */} 
                    <div className="form-box login">
                        <form action="">
                            <h1>Login</h1>
                            <div className="input-box">
                                <input id="" type="email" placeholder="Email" required />
                                <img className="w-7" src={ inbox } alt="inbox-icon" />             
                            </div>
                            <div className="input-box">
                                <input id="" type="password" placeholder="Password" required />
                                <img className="w-7" src={ lock } alt="lock-icon" />
                            </div>
                            <button type="submit" className="btn">Login</button>
                        </form>
                    </div>

                    {/* Register Form */} 
                    <div className="form-box register">
                        <form action="">
                            <h1>Register</h1>
                            <div className="input-box">
                                <input id="" type="text" placeholder="First Name" required />
                                <img className="w-7" src={ user } alt="user-icon" />
                            </div>
                            <div className="input-box">
                                <input id="" type="text" placeholder="Last Name" required />
                                <img className="w-7" src={ user } alt="user-icon" />
                            </div>
                            <div className="input-box">
                                <input id="" type="text" placeholder="Email" required />
                                <img className="w-7" src={ inbox } alt="user-icon" />
                            </div>
                            <div className="input-box">
                                <input id="" type="text" placeholder="Address" required />
                                <img className="w-7" src={ house } alt="user-icon" />
                            </div>
                            <div className="input-box">
                                <input id="" type="text" placeholder="Zip Code" required />
                                <img className="w-7" src={ envelope } alt="user-icon" />
                            </div>
                            <div className="input-box">
                                <input id="" type="text" placeholder="City" required />
                                <img className="w-7" src={ city } alt="user-icon" />
                            </div>
                            <div className="input-box">
                                <input id="" type="phone" placeholder="Mobile Phone" required />
                                <img className="w-7" src={ phone } alt="user-icon" />
                            </div>
                            <div className="input-box">
                                <input id="" type="password" placeholder="Password" required />
                                <img className="w-7" src={ lock } alt="user-icon" />
                            </div>
                            <button type="submit" className="btn">Register</button>
                        </form>
                    </div>

                    {/* Toggle Box */} 
                    <div className="toggle-box">
                        {/* Toggle Box Left*/} 
                        <div className="toggle-panel toggle-left">
                            <h1>Hello, Welcome !</h1>
                            <p>Don't have an acccount ?</p>
                            <button className="btn register-btn">Register</button>  
                        </div>

                        {/* Toggle Box Right*/} 
                        <div className="toggle-panel toggle-right">
                            <h1>Welcome back !</h1>
                            <p>Alreday have an acccount ?</p>
                            <button className="btn login-btn">Log In</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}