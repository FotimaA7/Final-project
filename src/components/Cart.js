import React from 'react';
import { useCart } from '../components/CartContext'; // Ensure correct path
import '../styles/Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart(); // Get cart items and remove function

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <p>Price: ${item.price}</p>
                  <button
                    className="remove-from-cart-btn"
                    onClick={() => removeFromCart(item.id)} // Remove item from cart
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
