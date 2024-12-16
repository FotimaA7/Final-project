import React from 'react';
import { useCart } from './CartContext';

const ProductCard = ({ id, name, price, image }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = { id, name, price, image };
    addToCart(product); // Add product to cart
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
