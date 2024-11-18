import React, { useState } from 'react';
import { useCart } from './CartContext'; // Assuming you have a CartContext
import { useWishlist } from '../Wishlist/WishlistContext'; // Assuming you have a WishlistContext
import './Cart.css';
import axios from 'axios';

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Get cart and remove function
  const { addToWishlist } = useWishlist(); // Get addToWishlist function
  const [quantities, setQuantities] = useState(cart.map(() => 1)); // Manage quantity per item
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0); // Discount amount
  const [loading, setLoading] = useState(false);

  // Calculate subtotal
  const calculateSubTotal = () => {
    return cart.reduce((total, product, index) => {
      return total + product.price * quantities[index];
    }, 0);
  };
// Calculate Total Items
const calculateTotalItems = () => { return quantities.reduce((total, quantity) => total + quantity, 0); };
  // Calculate total amount
  const calculateTotal = () => {
    const subTotal = calculateSubTotal();
    const total = subTotal - subTotal * discount;
    return total;
  };

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

  // Handle coupon application
  const handleCouponApply = () => {
    if (couponCode === 'DISCOUNT10') {
      setDiscount(0.1); // 10% discount
      alert('Coupon applied: 10% off');
    } else {
      setDiscount(0);
      alert('Invalid coupon code');
    }
  };

  // Remove an item from the cart
  const handleRemoveItem = (index) => {
    const productToRemove = cart[index];
    removeFromCart(productToRemove);
    const newQuantities = quantities.filter((_, i) => i !== index);
    setQuantities(newQuantities);
  };

  // Add item to wishlist and remove from cart
  const handleAddToWishlist = (index) => {
    const productToAdd = cart[index];
    addToWishlist(productToAdd);
    handleRemoveItem(index);
  };

  // Razorpay payment integration
  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    setLoading(true);
    try {
      const totalAmount = calculateTotal() * 1; // Convert to paise for Razorpay
      const { data: order } = await axios.post(
        'http://localhost:5000/api/create-razorpay-order',
        { amount: totalAmount }
      );

      const options = {
        key: 'rzp_test_MAk7r0iPLigO8e', // Replace with your Razorpay Key ID
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: 'Your Store Name',
        description: 'Complete your payment',
        handler: async (response) => {
          try {
            const verification = await axios.post(
              'http://localhost:5000/api/verify-razorpay-payment',
              {
                razorpayOrderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature,
                orderItems: cart,
                totalPrice: calculateTotal(),
              }
            );

            if (verification.data.success) {
              alert('Payment successful and verified!');
            } else {
              alert('Payment verification failed!');
            }
          } catch (err) {
            console.error('Error verifying payment:', err);
            alert('Error verifying payment.');
          }
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
    } catch (error) {
      console.error('Error initiating Razorpay payment:', error);
      alert('Failed to initiate payment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-content">
          <ul className="cart-items">
            {cart.map((product, index) => (
              <li key={index} className="cart-item">
                <img src={product.image} alt={product.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{product.name}</h3>
                  <p>₹ {product.price}</p>
                  <label>
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
          <div className="cart-summary">
            <h3>Pricing Details</h3>
            <p>Total Items: {calculateTotalItems()}</p>
            <p>Subtotal: ₹{calculateSubTotal().toFixed(2)}</p>
            <p>Discount: -{(discount * 100).toFixed(0)}%</p>
            <p>Total: ₹{calculateTotal().toFixed(2)}</p>
            <button onClick={handleCheckout} disabled={loading}>
              {loading ? 'Processing...' : 'Checkout'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
