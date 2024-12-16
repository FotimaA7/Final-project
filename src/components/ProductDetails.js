import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext); // Access the addToCart function

  return (
    <div className="product-detail" style={{ padding: "1rem" }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
