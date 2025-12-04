import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  // Məbləği hesablayırıq
  const totalPrice = cartItems.reduce(
  (sum, item) => sum + Number(item.price),
  0
);

  return (
    <div className="cart">
      <h2>Sizin Sifarişləriniz</h2>
      {cartItems.length === 0 ? (
        <p>hələki boşdur</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <span>{item.name} - {item.price} ₼</span>
              <button 
                style={{ backgroundColor: "white", color: "#001f3f", fontSize: "1.1rem" }} 
                onClick={() => removeFromCart(index)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}

      {cartItems.length > 0 && (
        <div className="cart-footer">
          <div style={{ fontWeight: "bold", fontSize: "1.2rem", marginBottom: "8px" }}>
            Cəm: {totalPrice} ₼
          </div>
          <button onClick={clearCart} className="clear-cart">
            Sifarişi Təmizlə
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
