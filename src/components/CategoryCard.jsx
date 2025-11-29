import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  return (
    <div
      className="category-card"
      style={{ backgroundImage: `url(${category.image})` }}
      onClick={() => navigate(`/category/${category.id}`)}
    >
      <div className="overlay">
        <h2>{category.name}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
