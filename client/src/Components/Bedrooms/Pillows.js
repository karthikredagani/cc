import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import Product from './Product'; 
import './Product.css';
import { useWishlist } from '../Wishlist/WishlistContext';
import { useCart } from '../Cart/CartContext';

const Pillows = () => {
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [buttonText, setButtonText] = useState('Add to Cart');
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist } = useWishlist();
    const navigate = useNavigate();

    const products = [
        {
            id: '233',
            image: '../images/Bedrooms/Pillows/p1.jpg',
            name: 'Product 22',
            price: '29999',
        },
        {
            id: '234',
            image: '../images/Bedrooms/Pillows/p2.jpg',
            name: 'Product 2',
            price: '49999',
        },
        {
            id: '235',
            image:'../images/Bedrooms/Pillows/p3.jpg',
            name: 'Product 4',
            price: '39999',
        },
        {
            id: '236',
            image: '../images/Bedrooms/Pillows/p4.jpg',
            name: 'Product 5',
            price: '39999',
        },
        {
            id: '237',
            image: '../images/Bedrooms/Pillows/p5.jpg',
            name: 'Product 6',
            price: '39999',
        },
        {
            id: '238',
            image:'../images/Bedrooms/Pillows/p6.jpg',
            name: 'Product 3',
            price: '39999',
        },
        {
            id: '239',
            image: '../images/Bedrooms/Pillows/p7.jpg',
            name: 'Product 8',
            price: '39999',
        },
        {
            id: '240',
            image: '../images/Bedrooms/Pillows/p8.jpg',
            name: 'Product 9',
            price: '39999',
        },
        {
            id: '241',
            image: '../images/Bedrooms/Pillows/p9.jpg',
            name: 'Product 10',
            price: '39999',
        },
        {
            id: '242',
            image: '../images/Bedrooms/Pillows/p10.jpg',
            name: 'Product 11',
            price: '39999',
        },
        {
            id: '243',
            image: '../images/Bedrooms/Pillows/p11.jpg',
            name: 'Product 12',
            price: '39999',
        },
        {
            id: '244',
            image: '../images/Bedrooms/Pillows/p12.jpg',
            name: 'Product 7',
            price: '39999',
        },
    ];

    const handleWishlistToggle = (product) => {
        if (isInWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
        setIsInWishlist(!isInWishlist);
    };

    return (
        <div className="mattress-container">
            <section className="products">
                {products.map((product) => (
                    <div className="product-card4" key={product.id}>
                        {product.isNew && <span className="new-label">SALE ON</span>}
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.name} className="product-image" />
                        </Link>
                        <div className="product-info">
                            <h2 className="product-name">{product.name}</h2>
                            <p className="product-description">
                                This fabric sofa offers firm seating and comfortable back rest. Order this high-quality sofa today!
                            </p>
                            <div className="product-buttons2">
                                <p className="product-price">₹ {product.price}</p>
                                <del className='del'>MRP 60,000</del>
                                <p className="product-percentage">(20% Off)</p>
                            </div>
                            <div className="av-wishlist-wrapper">
                            <Link to={`/product/${product.id}`}>

                                <button className="av1">Available</button>
                                </Link>
                                <button 
                                    className="product-wish2"
                                    onClick={() => handleWishlistToggle(product)}
                                    style={{ color: isInWishlist ? 'red' : 'black' }}
                                >
                                    {isInWishlist ? <IoMdHeart /> : <IoMdHeartEmpty />}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Pillows;