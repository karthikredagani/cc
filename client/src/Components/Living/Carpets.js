import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import Product from './Product'; 
import './Product.css';
import { useWishlist } from '../Wishlist/WishlistContext';
import { useCart } from '../Cart/CartContext';

const Carpets = () => {
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [buttonText, setButtonText] = useState('Add to Cart');
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist } = useWishlist();
    const navigate = useNavigate();

    const products = [
        {
            id: '77',
            image: '../images/Living/Woodensofas/c1.jpg',
            name: 'Product 22',
            price: '29999',
        },
        {
            id: '78',
            image: '../images/Living/Woodensofas/c2.jpg',
            name: 'Product 2',
            price: '49999',
        },
        {
            id: '79',
            image: '../images/Living/Woodensofas/c3.jpg',
            name: 'Product 4',
            price: '39999',
        },
        {
            id: '80',
            image: '../images/Living/Woodensofas/c4.jpg',
            name: 'Product 5',
            price: '39999',
        },
        {
            id: '81',
            image: '../images/Living/Woodensofas/c5.jpg',
            name: 'Product 6',
            price: '39999',
        },
        {
            id: '82',
            image: '../images/Living/Woodensofas/c6.jpg',
            name: 'Product 3',
            price: '39999',
        },
        {
            id: '83',
            image: '../images/Living/Woodensofas/c7.jpg',
            name: 'Product 8',
            price: '39999',
        },
        {
            id: '84',
            image: '../images/Living/Woodensofas/c8.jpg',
            name: 'Product 9',
            price: '39999',
        },
        {
            id: '85',
            image: '../images/Living/Woodensofas/c9.jpg',
            name: 'Product 10',
            price: '39999',
        },
        {
            id: '86',
            image: '../images/Living/Woodensofas/c10.jpg',
            name: 'Product 11',
            price: '39999',
        },
        {
            id: '87',
            image: '../images/Living/Woodensofas/c11.jpg',
            name: 'Product 12',
            price: '39999',
        },
        {
            id: '88',
            image: '../images/Living/Woodensofas/c1.jpg',
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

export default Carpets;
