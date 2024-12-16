import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate(); // Hook for navigation

  const handleBuyNow = () => {
    if (cartItems.length > 0) {
      navigate('/payment'); // Navigate to Payment page
    } else {
      alert("Your cart is empty. Add items before proceeding to payment.");
    }
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} style={{ width: '50px' }} />
                {item.name} - {item.price}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          {/* Buy Button */}
          <button onClick={handleBuyNow} className="buy-now-btn">
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
