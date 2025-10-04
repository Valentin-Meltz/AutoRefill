import React from "react";

export default function Product({ product }) {
    return (
        <div className="product-container">
            <img src={ product.image } alt="Product" />
            <div className="product-details">
                <h2>{ product.title }</h2>
                <p>{ product.description }</p>
                <span>{ product.price }</span>
            </div>
        </div>
    );
}