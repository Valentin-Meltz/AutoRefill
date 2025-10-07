import React from "react";
import Product from "components/Product/Product";

export default function ProductsList ({ products }) {
    return(
        <div className="products-container flex justify-center">
            <div className="grid grid-cols-4 place-items-center gap-x-3.5 gap-y-8 w-full">
                {products.map((product, index) => (
                    <div key={product?.id || index} className="w-full h-full flex items-center justify-center">
                        <Product product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}