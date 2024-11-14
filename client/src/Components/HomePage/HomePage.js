// HomePage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SliderComponent from './Slider';
import Images from './Images';

import './Product.css';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useCart } from '../Cart/CartContext';
import { useWishlist } from '../Wishlist/WishlistContext';
import FurnitureCarousel from './FurnitureCarousel';

const HomePage = () => {
    const navigate  = useNavigate();
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist } = useWishlist();

    // Common product data for various sections
    const homeProducts = [
        { id: '1', image: '/images/base1.jpg', name: 'Fabric Sofa',  price: '39,900', isNew: true, discount: '50% OFF' },
        { id: '2', image: '/images/base2.jpg', name: 'Queen Size Bed',  price: '49,999', isNew: true, discount: '50% OFF' },
        { id: '3', image: '/images/base3.jpg', name: 'Dining Set',  price: '29,999', isNew: true, discount: '50% OFF' },
        { id: '4', image: '/images/base4.jpg', name: 'Leather Recliner',  price: '52,999', isNew: true, discount: '50% OFF' },
        { id: '1', image: '/images/base1.jpg', name: 'Fabric Sofa',  price: '39,900', isNew: true, discount: '50% OFF' },

    ];

    // New arrivals product data
    const newProducts = [
        { id: '5', name: 'Wooden Dining Set', image: '/images/base5.jpg',  price: '59,999', isNew: true },
        { id: '6', name: 'Recliner Sofa Chair', image: '/images/base6.jpg',  price: '59,999', isNew: true },
        { id: '7', name: 'Corner Sofa', image: '/images/base7.jpg',  price: '59,999', isNew: true },
        { id: '8', name: 'Leather Sofa', image: '/images/base8.jpg',  price: '59,999', isNew: true },
        { id: '5', name: 'Wooden Dining Set', image: '/images/base5.jpg',  price: '59,999', isNew: true },

    ];

    // Discount1 product data
    const discount1Products = [
        { id: '9', image: '/images/base9.jpg', name: 'Dressing Unit',  price: '49,999', isNew: true, discount: '20% OFF' },
        { id: '10', image: '/images/base10.jpg', name: 'Leather Corner Sofa',  price: '29,999', isNew: true, discount: '20% OFF' },
        { id: '11', image: '/images/base11.jpg', name: 'King Size Bed',  price: '52,999', isNew: true, discount: '20% OFF' },
        { id: '12', image: '/images/base12.jpg', name: 'Office Chair', price: '39,999', isNew: true, discount: '20% OFF' },
        { id: '9', image: '/images/base9.jpg', name: 'Dressing Unit',  price: '49,999', isNew: true, discount: '20% OFF' },

    ];

    // Discount2 product data
    const discount2Products = [
        { id: '13', image: '/images/base13.jpg', name: 'Single Sofa Chair',  price: '52,999', isNew: true, discount: '30% OFF' },
        { id: '14', image: '/images/base14.jpg', name: 'Leather Sofa Chair',  price: '39,999', isNew: true, discount: '30% OFF' },
        { id: '15', image: '/images/base15.jpg', name: 'King Size Bed',  price: '49,999', isNew: true, discount: '30% OFF' },
        { id: '16', image: '/images/base16.jpg', name: 'Vintage Dining Set', price: '39,999', isNew: true, discount: '30% OFF' },
        { id: '13', image: '/images/base13.jpg', name: 'Single Sofa Chair',  price: '52,999', isNew: true, discount: '30% OFF' },

    ];

    const discount3Products = [
        { id: '13', image: '/images/living/recliner/r1.jpg', name: 'Fabric Recliner',  price: '52,999'},
        { id: '14', image: '/images/living/recliner/r7.jpg', name: 'Leather Recliner',  price: '39,999'},
        { id: '15', image: '/images/living/recliner/r3.jpg', name: 'Black Recliner Set',  price: '49,999' },
        { id: '16', image: '/images/living/recliner/r4.jpg', name: 'Vintage Model', price: '39,999' },
        { id: '13', image: '/images/living/recliner/r6.jpg', name: 'White Recliners',  price: '52,999' },

    ];

    const discount4Products = [
        { id: '13', image: '/images/bedrooms/Dressingunits/dt1.jpg', name: 'Dressing Unit',  price: '52,999'},
        { id: '14', image: '/images/bedrooms/Dressingunits/dt2.jpg', name: 'Smoke Dressing Unit',  price: '39,999'},
        { id: '15', image: '/images/bedrooms/Dressingunits/dt11.jpg', name: 'Wooden Unit',  price: '49,999' },
        { id: '16', image: '/images/bedrooms/Dressingunits/dt12.jpg', name: 'Dressing Unit', price: '39,999' },
        { id: '13', image: '/images/bedrooms/Dressingunits/dt10.jpg', name: 'Portable Dressing Unit',  price: '52,999' },

    ];

    // Function to handle cart addition
    const handleAddToCart = (product) => {
        addToCart(product);
    };

    // Function to handle wishlist toggle
    const handleWishlistToggle = (product, isInWishlist, setIsInWishlist) => {
        if (isInWishlist) {
            removeFromWishlist(product.name);
        } else {
            addToWishlist(product);
        }
        setIsInWishlist(!isInWishlist);
    };

    // Reusable function to render products
    const renderProductGrid = (products, label) => (
        <section className="products">
            {products.map(product => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    label={label || product.discount}
                    handleAddToCart={handleAddToCart}
                    handleWishlistToggle={handleWishlistToggle}
                />
            ))}
        </section>
    );

    return (
        <div id='HomePage'>
            <SliderComponent />

            <h1 className='head'>New Arrivals</h1>
            {renderProductGrid(newProducts, "New")}

            <h1 className='head'>Enjoy upto 50% off* across categories</h1>
            {renderProductGrid(homeProducts)}
            {renderProductGrid(discount1Products)}
            {renderProductGrid(discount2Products)}
            <Images/>
            <h1 className='head'>Explore Popular Brands</h1>
            {renderProductGrid(discount3Products)}
            {renderProductGrid(discount4Products)}
            <FurnitureCarousel/>
        </div>
    );
};

// Individual product card component
const ProductCard = ({ product, label, handleAddToCart, handleWishlistToggle }) => {
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [buttonText, setButtonText] = useState('Add to Cart');
    const navigate = useNavigate(); // Use navigate hook

    const handleCartClick = () => {
        if (buttonText === 'Add to Cart') {
            handleAddToCart(product);
            setButtonText('Go to Cart');
        } else {
            navigate('/cart'); // Redirect to cart page
        }
    };

    return (
        <div className="product-card1">
            {product.isNew && <span className="new-label">{label}</span>}
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} className="product-image" />
            </Link>
            <h3 className="product-name5">{product.name}</h3>
          
        </div>
    );
};

export default HomePage;
