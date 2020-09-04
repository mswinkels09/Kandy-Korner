import React from "react";
import "./Product.css"

export const Product = ({product, type, location}) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <address className="product__price">${product.price}</address>
        <div className="product__type">Product type: {type.type}</div>
        <div className="product__location">Product location: {location.address}</div>

    </section>
)