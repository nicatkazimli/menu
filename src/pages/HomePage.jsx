import React from "react";
import categories from "../services";
import CategoryCard from "../components/CategoryCard";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="banner">
        <img src="https://i.pinimg.com/1200x/36/d3/d0/36d3d0cc7b49854797f53732f8d6c772.jpg" alt="Restaurant" />
        <div className="banner-text">
        </div>
      </div>

      <div className="info">
        <p>📍 Nizami küçəsi 48A, Bakı, Azərbaycan  
<br/>📞 050 123 45 67 </p>
        <p>📶 Wi-Fi: CoffeeClub | Password: 12345678</p>
      </div>

      <div className="categories-grid">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
