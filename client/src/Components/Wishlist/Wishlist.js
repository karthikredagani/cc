 import React from 'react';
import { useWishlist } from './WishlistContext';
import { useCart } from '../Cart/CartContext'; // Import CartContext
import './Wishlist.css';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, updateWishlistQuantity } = useWishlist();
  const { addToCart } = useCart(); // Get addToCart function

  const handleQuantityChange = (product, newQuantity) => {
    if (newQuantity > 0) {
      updateWishlistQuantity(product.name, newQuantity);
    }
  };

  // Handle moving product to cart
  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart
    removeFromWishlist(product.name); // Remove product from wishlist
  };

  return (
    <div className="wishlist-container">
      <h1 className='h1'>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className='p'>Your wishlist is empty.</p>
      ) : (
        wishlist.map((product) => (
          <div key={product.name} className="wishlist-item">
            <img src={product.image} alt={product.name} className="wishlist-image" />
            <div className="wishlist-info">
              <h2 className="wishlist-name">{product.name}</h2>
              <p className="wishlist-price">₹ {product.price}</p>
              {/* <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(product, product.quantity - 1)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => handleQuantityChange(product, product.quantity + 1)}>+</button>
              </div> */}
              <div className='but'>
              <button className='wbutton' onClick={() => handleAddToCart(product)}>Move to Cart</button> {/* Add to Cart button */}

              <button className='remove' onClick={() => removeFromWishlist(product.name)}>Remove</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;