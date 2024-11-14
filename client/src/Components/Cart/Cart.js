import React, { useState } from 'react';
import { useCart } from './CartContext'; // Assuming you have a CartContext to manage cart state
import { useWishlist } from '../Wishlist/WishlistContext'; // Assuming you have a WishlistContext for wishlist management
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Get cart and remove function
  const { addToWishlist } = useWishlist(); // Get addToWishlist function
  const [quantities, setQuantities] = useState(cart.map(() => 1)); // Manage quantity per item
  const [couponCode, setCouponCode] = useState(''); // Coupon Code
  const [discount, setDiscount] = useState(0); // Discount amount

  // Handle quantity change
  const handleQuantityChange = (index, event) => {
    const newQuantity = parseInt(event.target.value);
    const newQuantities = [...quantities];

    if (newQuantity === 0) {
      handleRemoveItem(index);
    } else {
      newQuantities[index] = newQuantity;
      setQuantities(newQuantities);
    }
  };

  // Handle coupon code input change
  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  // Handle applying coupon
  const handleCouponApply = () => {
    if (couponCode === 'DISCOUNT10') {
      setDiscount(0.1); // 10% discount
      alert('Coupon applied: 10% off');
    } else {
      setDiscount(0);
      alert('Invalid coupon code');
    }
  };

  // Calculate subtotal
  const calculateSubTotal = () => {
    return cart.reduce((total, product, index) => {
      return total + product.price * quantities[index];
    }, 0);
  };

  // Calculate total amount
  const calculateTotal = () => {
    const subTotal = calculateSubTotal();
    const shippingCost = 0; // Set shipping cost
    const total = subTotal + shippingCost;

    return total - total * discount;
  };

  // Calculate number of items in the cart
  const calculateItemCount = () => {
    return quantities.reduce((total, quantity) => total + parseInt(quantity), 0);
  };

  // Handle removing an item from the cart
  const handleRemoveItem = (index) => {
    const productToRemove = cart[index];
    removeFromCart(productToRemove);
    const newQuantities = quantities.filter((_, i) => i !== index);
    setQuantities(newQuantities);
  };

  // Handle adding item to wishlist
  const handleAddToWishlist = (index) => {
    const productToAdd = cart[index];
    addToWishlist(productToAdd);
    handleRemoveItem(index);
  };

  // Handle Razorpay Payment
  const handleRazorpayPayment = () => {
    if (typeof window.Razorpay === 'undefined') {
      alert('Razorpay SDK not loaded. Please check your connection or try again later.');
      return;
    }

    const totalAmount = calculateTotal() * 100; // Razorpay accepts amount in paise
    const options = {
      key: 'pay_G3P9vcIhRs3NV4', // Replace with your Razorpay API Key ID
      amount: totalAmount,
      currency: 'INR',
      name: 'Your Store Name',
      description: 'Purchase description',
      image: 'https://your-logo-url.com/logo.png', // Optional: Replace with your logo URL
      handler: function (response) {
        alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
        // Handle success (send response to your server for verification)
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items-container">
            <ul className="cart-items">
              {cart.map((product, index) => (
                <li key={index} className="cart-item">
                  <img src={product.image} alt={product.name} className="cart-item-image" />
                  <div className="cart-item-info">
                    <h3 className='name'>{product.name}</h3>
                    <p className='price'>₹ {product.price}</p>
                    <label className='label'>
                      Quantity:
                      <select
                        value={quantities[index]}
                        onChange={(e) => handleQuantityChange(index, e)}
                      >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </label>
                    <div className='but'>
                    <button className="remove-btn1" onClick={() => handleRemoveItem(index)}>
                      Remove
                    </button>
                    <button className="add-wish-btn1" onClick={() => handleAddToWishlist(index)}>
                      Wishlist
                    </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Coupon, Pricing, and Checkout */}
          <div className="cart-summary-container">
            <div className="coupon-section">
              <h3 className='name'>Have a Coupon Code?</h3>
              <input
                type="text"
                value={couponCode}
                onChange={handleCouponChange}
                placeholder="Enter Coupon Code"
              />
              <button className="apply-btn" onClick={handleCouponApply}>
                Apply
              </button>
            </div>

            <div className="pricing-details">
              <h3 className='name'>Pricing Details</h3>
              <p className='p'>Items in Cart: {calculateItemCount()}</p>
              <p className='p'>Sub Total (without shipping): ₹{calculateSubTotal().toFixed(2)}</p>
              <p className='p'>Shipping & Handling: ₹0</p>
              <p className='p'>Discount Applied: -{(discount * 100).toFixed(0)}%</p>
              <h3 className="name">Total (with shipping): ₹{calculateTotal().toFixed(2)}</h3>
            </div>

            <div className="checkout-section">
              <button className="checkout-btn" onClick={handleRazorpayPayment}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
