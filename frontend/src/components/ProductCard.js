import React from "react";
import QualityAssurance from "./QualityAssurance";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <QualityAssurance isEcoFriendly={product.isEcoFriendly} />
      <button> Add to Cart</button>
    </div>
  );
};

export default ProductCard;
 