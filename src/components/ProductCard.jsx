import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <h5>
          {Array.isArray(product.ingredients)
            ? product.ingredients.join(", ")
            : product.ingredients || ""}
        </h5>
        <p>{product.price} ₼</p>
<button
  style={{
    width:"150px",
    position: "relative",
    zIndex: 10,
    padding: "10px 20px",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#fff",
    background: "linear-gradient(135deg, #ff6a00, #ff3d00)",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(255, 69, 0, 0.4)",
    transition: "all 0.3s ease",
    outline: "none",
  }}
  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
  onMouseDown={e => e.currentTarget.style.transform = "scale(0.95)"}
  onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
  onClick={() => {
    console.log("Clicked product:", product);
    console.log("addToCart function:", addToCart);
    addToCart?.(product);
  }}
>
  Add to Cart
</button>

      </div>
    </div>
  );
};

export default ProductCard;
