import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => setCartItems([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          }
        />
        <Route
          path="/category/:id"
          element={
            <CategoryPage
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
