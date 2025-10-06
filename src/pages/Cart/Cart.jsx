import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Button from "components/Button/Button";

import Calendar from "assets/icon/calendar-solid-full.svg";
import Clock from "assets/icon/clock-solid-full.svg";
import Dollar from "assets/icon/dollar-sign-solid-full.svg";

import { getUser } from "api/api";


export default function Cart() {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [cart, setCart] = useState();
    const [price, setPrice] = useState(0);
    const [orderNumber, setOrderNumber] = useState();


    useEffect(() => {
        const id = sessionStorage.getItem("Id");
        if(id){
            getUser({id: id}).then(data => {setUser(data)});
        } else {
            alert("Please Log In to add porduct to cart");
            navigate("/login");
        }

        const cart = JSON.parse(sessionStorage.getItem("Cart"));
        if(cart){
            setCart(cart);

            let items = [];
            if (Array.isArray(cart)) {
                items = cart;
            } else if (cart && typeof cart === 'object') {
                items = Object.values(cart);
            }

            const total = items.reduce((acc, it) => {
                const price = Number(it.price ?? it.unitPrice ?? 0);
                const qty = Number(it.quantity ?? it.qty ?? 1);
                return acc + price * qty;
            }, 0);

            setPrice(total.toFixed(2));
            const randomOrderNumber = Math.floor(100000 + Math.random() * 900000);
            setOrderNumber(randomOrderNumber);
        }
        else {
            setPrice(0);
        }
        
        


    }, [navigate]);

    const cartItems = React.useMemo(() => {
        if (!cart) return [];
        if (Array.isArray(cart)) return cart;
        if (typeof cart === 'object') return Object.values(cart);
        return [];
    }, [cart]);

    return (
        <div className="main">
            <Header />
            <div className="main-container">
                <h1 className="title text-3xl font-bold mt-20 text-center"> Your Order</h1>
                <div className="flex justify-center p-5">
                    <div className="delivery-container border rounded-2xl m-10 flex gap-40 w-1/2 p-10">
                        <div className="order-details">
                            <h2 className="title text-2xl font-semibold p-2">Your Order</h2>
                            <div className="flex flex-col gap-5 mt-5">
                                <div className="day-container flex gap-5 items-center">
                                    <img className="w-10" src={Calendar} alt="calendar-icon" />
                                    <select id="calendar-input" name="calendar">
                                        <option value="">Please select à frequency</option>
                                        <option value="week">Every Week</option>
                                        <option value="mounth">Every Mounth</option>
                                    </select>
                                </div>
                                <div className="hour-container flex gap-5 items-center">
                                    <img className="w-10" src={Clock} alt="clock-icon" />
                                    <select id="clock-input" name="clock">
                                        <option value="">Please select à hour</option>
                                        <option value="ten">10h - 12h</option>
                                        <option value="fourteen">14h - 16h</option>
                                        <option value="sixteen">16h - 18h</option>
                                        <option value="eighteen">18h - 20h</option>
                                    </select>
                                </div>
                                <div className="price-container flex gap-5 items-center">
                                    <img className="w-10" src={Dollar} alt="dollar-container" />
                                    <p className="price">{ price } €</p>
                                </div>
                            </div>
                        </div>
                        <div className="delivery-details">
                            <h2 className="title text-2xl font-semibold p-2">n° { orderNumber }</h2>
                            <div className="flex flex-col gap-3 mt-5">
                                <div className="day-container">
                                    <p className="address">{ user.address }</p>
                                </div>
                                <div className="hour-container">
                                    <p className="zip-code">{ user.postalCode }</p>
                                </div>
                                <div className="price-container">
                                    <p className="city">{ user.city }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="delivery-container border rounded-2xl mb-10 w-1/2 p-10">
                        <h2 className="title text-2xl font-semibold p-2">Product of your cart</h2>
                        {cartItems.length === 0 ? (
                            <p className="text-gray-500 p-2">Your cart is empty.</p>
                        ) : (
                            <ul className="w-full space-y-4 mt-4">
                                {cartItems.map((it, idx) => {
                                    const name = it?.name ?? it?.title ?? it?.productName ?? `Article ${idx + 1}`;
                                    const unit = Number(it?.price ?? it?.unitPrice ?? 0);
                                    const qty = Number(it?.quantity ?? it?.qty ?? 1);
                                    const subtotal = (unit * qty).toFixed(2);
                                    const key = it?.id ?? it?._id ?? `${name}-${idx}`;
                                    const image = it?.image ?? it?.img ?? it?.photo ?? it?.photoUrl ?? it?.picture ?? it?.thumbnail ?? it?.imageUrl ?? null;
                                    return (
                                        <li key={key} className="flex justify-between items-center border-b pb-3">
                                            <div className="flex gap-2">
                                                <div className="img w-16 h-16 mr-4">
                                                    {image && (
                                                        <img src={image} alt={name} className="w-full h-full object-cover rounded" />
                                                    )}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-medium">{name}</span>
                                                    <span className="text-sm opacity-70">Qté : {qty} × {Number(unit).toFixed(2)} €</span>
                                                </div>
                                            </div>
                                            <div className="font-semibold">{subtotal} €</div>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="flex justify-center mb-10">
                    <div className="w-96">
                        <Button type="button" text="Complete Order" onClick={""}></Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}