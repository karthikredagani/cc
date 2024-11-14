import React from 'react'; 
import './Product.css'; 
import './New.css'; 
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sale = () => {
    const products = [
        {
            id: '1',
            image: '/images/pro5.jpg',
            name: 'Product 2',
            description: 'This product is even better with extra features.',
            price: '49,999',
            isNew: true
        },
        {
            id: '2',
            image: '/images/pro6.jpg',
            name: 'Product 3',
            description: 'An affordable product that meets all your needs.',
            price: '29,999',
            isNew: true
        },
        {
            id: '3',
            image: '/images/pro7.jpg',
            name: 'Product 4',
            description: 'An affordable product that meets all your needs.',
            price: '52,999',
            isNew: true
        },
        {
            id: '4',
            image: '/images/pro8.jpg',
            name: 'Product 7',
            description: 'This is a great product with amazing features.',
            price: '39,999',
            isNew: true
        },
        {
            id: '5',
            image: '/images/pro9.jpg',
            name: 'Product 1',
            description: 'An affordable product that meets all your needs.',
            price: '52,999',
            isNew: true
        },
        {
            id: '6',
            image: '/images/pro10.jpg',
            name: 'Product 4',
            description: 'This is a great product with amazing features.',
            price: '39,999',
            isNew: true
        },
        {
            id: '7',
            image: '/images/pro11.jpg',
            name: 'Product 5',
            description: 'This product is even better with extra features.',
            price: '49,999',
            isNew: true
        },
        {
            id: '8',
            image: '/images/pro12.jpg',
            name: 'Product 6',
            description: 'This is a great product with amazing features.',
            price: '39,999',
            isNew: true
        }
    ];

    return (
        <div>
            <h1>Top Sales Products</h1>
            <section className="products">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        {product.isNew && <span className="new-label">SALE ON</span>}
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.name} className="product-image" />
                        </Link>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">₹{product.price}<del>₹70,000</del></p>
                        
                        <div className="product-actions">
                            <button className="wishlist-btn"><FaRegHeart/></button>
                            <button className="add-to-cart-btn">Add to Cart</button>
                            <button className="buy-now-btn">Buy Now</button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Sale;
