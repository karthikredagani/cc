import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import Product from './Product'; 
import './Product.css';
import { useWishlist } from '../Wishlist/WishlistContext';
import { useCart } from '../Cart/CartContext';

const LivingSets = () => {
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [buttonText, setButtonText] = useState('Add to Cart');
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist } = useWishlist();
    const navigate = useNavigate();

    const products = [
        {
            id: '41',
            image: '../images/Combos/Livingsets/ss1.jpg',
            name: 'Product 22',
            price: '29999',
        },
        {
            id: '42',
            image: '../images/Combos/Livingsets/ss2.jpg',
            name: 'Product 2',
            price: '49999',
        },
        {
            id: '43',
            image: '../images/Combos/Livingsets/ss3.jpg',
            name: 'Product 4',
            price: '39999',
        },
        {
            id: '44',
            image: '../images/Combos/Livingsets/ss4.jpg',
            name: 'Product 5',
            price: '39999',
        },
        {
            id: '45',
            image: '../images/Combos/Livingsets/ss5.jpg',
            name: 'Product 6',
            price: '39999',
        },
        {
            id: '46',
            image: '../images/Combos/Livingsets/ss6.jpg',
            name: 'Product 3',
            price: '39999',
        },
        {
            id: '47',
            image: '../images/Combos/Livingsets/ss7.jpg',
            name: 'Product 8',
            price: '39999',
        },
        {
            id: '48',
            image: '../images/Combos/Livingsets/ss8.jpg',
            name: 'Product 9',
            price: '39999',
        },
        {
            id: '49',
            image: '../images/Combos/Livingsets/ss9.jpg',
            name: 'Product 10',
            price: '39999',
        },
        {
            id: '50',
            image: '../images/Combos/Livingsets/ss10.jpg',
            name: 'Product 11',
            price: '39999',
        },
        {
            id: '51',
            image: '../images/Combos/Livingsets/ss11.jpg',
            name: 'Product 12',
            price: '39999',
        },
        {
            id: '52',
            image: '../images/Combos/Livingsets/ss12.jpg',
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

export default LivingSets;
