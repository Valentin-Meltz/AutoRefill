import React from "react";
import { useState, useEffect } from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import ProductsList from "components/ProductsList/ProductsList";

import { getProducts } from "api/api";


export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(data => {
            setProducts(data);
        });
    }, []);

    return (
        <div className="main">
            <Header />
            <div className="main-container">
                <ProductsList products={ products } />
            </div>
            <Footer />
        </div>
    );
}