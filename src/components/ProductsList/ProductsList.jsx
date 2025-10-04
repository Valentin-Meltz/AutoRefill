import React from "react";
import Product from "components/Product/Product";

export default function ProductsList ({ products }) {
    return(
        <div className="products-container">
            <div className="grid grid-cols-4 gap-x-3.5 gap-y-8">
                {products.map((product, index) => (
                    <Product product={product}/>
                ))}
            </div>
        </div>
    );
}