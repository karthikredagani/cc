import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import Product from './Product'; 
import './Product.css';
import { useWishlist } from '../Wishlist/WishlistContext';
import { useCart } from '../Cart/CartContext';

const Bookcases = () => {
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [buttonText, setButtonText] = useState('Add to Cart');
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist } = useWishlist();
    const navigate = useNavigate();

    const products = [
        {
            id: '294',
            image: '../images/Office/Bookcases/1.jpg',
            name: 'Product 22',
            price: '29999',
        },
        {
            id: '295',
            image: '../images/Office/Bookcases/2.jpg',
            name: 'Product 2',
            price: '49999',
        },
        {
            id: '296',
            image: '../images/Office/Bookcases/3.jpg',
            name: 'Product 4',
            price: '39999',
        },
        {
            id: '297',
            image: '../images/Office/Bookcases/4.jpg',
            name: 'Product 5',
            price: '39999',
        },
        {
            id: '298',
            image: '../images/Office/Bookcases/5.jpg',
            name: 'Product 6',
            price: '39999',
        },
        {
            id: '299',
            image: '../images/Office/Bookcases/6.jpg',
            name: 'Product 3',
            price: '39999',
        },
        {
            id: '300',
            image: '../images/Office/Bookcases/7.jpg',
            name: 'Product 8',
            price: '39999',
        },
        {
            id: '301',
            image: '../images/Office/Bookcases/8.jpg',
            name: 'Product 9',
            price: '39999',
        },
        {
            id: '302',
            image: '../images/Office/Bookcases/9.jpg',
            name: 'Product 10',
            price: '39999',
        },
        {
            id: '303',
            image: '../images/Office/Bookcases/10.jpg',
            name: 'Product 11',
            price: '39999',
        },
        {
            id: '304',
            image: '../images/Office/Bookcases/11.jpg',
            name: 'Product 12',
            price: '39999',
        },
        {
            id: '305',
            image: '../images/Office/Bookcases/12.jpg',
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

export default Bookcases;