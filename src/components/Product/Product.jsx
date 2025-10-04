import React from "react";

export default function Product({ product }) {
    return (
        <div className="product-container border p-2 rounded-xl shadow-md flex flex-col items-center w-72 h-full">
            <div className="img-container p-2 h-72 flex items-center">
                <img className="img h-full" src={ product.image } alt="Product" />
            </div>
            <div className="product-details data-container p-2 text-center h-1/5">
                <h2 className="font-bold">{ product.title }</h2>
                <p>{ product.price } €</p>
            </div>
        </div>
    );
}