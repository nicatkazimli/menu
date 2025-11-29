import React from "react";
import { Link, useParams } from "react-router-dom";
import categories from "../services";
import ProductCard from "../components/ProductCard";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { id } = useParams();
  const category = categories.find((cat) => cat.id === id);

  if (!category) return <p>Category not found</p>;

  return (
    <div className="category-page">
      {/* Category Banner */}
      <div className="category-banner">
        <img src={category.image} alt={category.name} />
        <h1>{category.name}</h1>
        <Link to='/' className="back-link"><img src="https://img.icons8.com/?size=100&id=63794&format=png&color=000000" /></Link>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {category.products.map((prod, index) => (
          <ProductCard key={index} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
