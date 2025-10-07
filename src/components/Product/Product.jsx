import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";


export default function Product({ product }) {
    const navigate = useNavigate();
 
    const checkLogin = () => {
        const id = sessionStorage.getItem("Id");

        if (!id) {
            alert("Please Log In to add porduct to cart");
            navigate("/login");
        }
    }

    const addToCart = () => {
        checkLogin();

        const storedCart = JSON.parse(sessionStorage.getItem("Cart")) || [];
        const updatedCart = [...storedCart, product];
        sessionStorage.setItem("Cart", JSON.stringify(updatedCart));
    }

    return (
        <div className="product-container border p-2 rounded-xl shadow-md flex flex-col w-72 h-full">
            <div className="img-container p-2 h-72 w-full flex justify-center items-center mb-2 border-b-2">
                <img className="img h-full" src={ product.image } alt="Product" />
            </div>
            <div className="product-details data-container p-2 h-1/5 mb-4">
                <h2 className="font-bold py-1">{ product.title }</h2>
                <p className="py-1">{ product.price } €</p>
            </div>
            <Button type="button" text="Add to cart" onClick={addToCart} />
        </div>
    );
}