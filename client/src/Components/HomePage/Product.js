import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import './Product.css';

const Product = ({ image, name, price, description }) => (
    <div className="product-card">
        <img src={image} alt={name} className="product-image" />
        <div className="product-info">
            <h2 className="product-name5">{name}</h2>
            <p className="product-description">{description}</p>
            <p className="product-price">₹ {price}  <del>₹ 60,000</del></p>
            <div className="product-buttons">
            <button className="product-wish">
                    <FaRegHeart />
                </button>
                <button className="product-cart">
                   Add to Cart
                </button>
                <button className="product-buy">
                    Buy Now
                </button>
            </div>
        </div>
    </div>
);

export default Product;
