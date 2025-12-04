import React from "react";
import { Link, useParams } from "react-router-dom";
import categories from "../services";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import "./CategoryPage.css";

const CategoryPage = ({ cartItems, addToCart, removeFromCart, clearCart }) => {
  console.log("CategoryPage addToCart prop:", addToCart); // ← buraya əlavə et

  const { id } = useParams();
  const category = categories.find(cat => cat.id === id);

  if (!category) return <p>Category not found</p>;

  return (
    <div className="category-page">
      <div className="products-section">
        <div className="category-banner">
          <img src={category.image} alt={category.name} />
          <h1>{category.name}</h1>
          <Link to="/" className="back-link">
            <img
              src="https://img.icons8.com/?size=100&id=63794&format=png&color=000000"
              alt="Back"
            />
          </Link>
        </div>

        <div className="products-grid">
          {category.products.map((prod, index) => (
            <ProductCard key={index} product={prod} addToCart={addToCart} />
          ))}
        </div>
      </div>

      <div className="cart-section">
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
