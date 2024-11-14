import React, { useState } from 'react';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';
import { useWishlist } from '../Wishlist/WishlistContext';
import './Product.css';

const Product = ({ image, name, price, description, detailsLink, id }) => {
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [buttonText, setButtonText] = useState('Add to Cart');
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist } = useWishlist();
    const navigate = useNavigate();

    // Handle Add to Cart logic
    const handleCartClick = () => {
        if (buttonText === 'Add to Cart') {
            addToCart({ id, image, name, price, description });
            setButtonText('Go to Cart');
        } else {
            navigate('/cart'); // Redirect to cart page
        }
    };

    // Handle Wishlist toggle logic
    const handleWishlistToggle = () => {
        if (isInWishlist) {
            removeFromWishlist(name);
        } else {
            addToWishlist({ id, image, name, price, description });
        }
        setIsInWishlist(!isInWishlist);
    };

    return (
        <div className="product-card4">
            <img src={image} alt={name} className="product-image" />
            <div className="product-info">
                <h2 className="product-name">{name}</h2>
                <p className="product-description">This fabric sofa offers firm seating and comfortable back rest. Order this high-quality sofa today!</p>
                <div className="product-buttons2">
                    <p className="product-price">₹ {price}</p><del className='del'>MRP 60,000</del>
                    <p className="product-percentage">(20% Off)</p>
                </div>
                {/* Wrapper for Available and Wishlist buttons */}
                <div className="av-wishlist-wrapper">
                    <button className="av1">Available</button>
                    <button 
                        className="product-wish2"
                        onClick={handleWishlistToggle}
                        style={{ color: isInWishlist ? 'red' : 'black' }}
                    >
                        {isInWishlist ? <IoMdHeart /> : <IoMdHeartEmpty />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;