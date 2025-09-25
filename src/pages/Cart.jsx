import React, { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(localCart);
  }, []);

  const placeOrder = async () => {
    try {
      const orderData = {
        items: cart.map((item) => ({
          product: item.id,
          quantity: item.quantity,
        })),
        // add more fields if required by your OrderCreateSerializer
      };

      const res = await axios.post(
        "http://127.0.0.1:8000/api/orders/create/",
        orderData
      );

      alert("Order placed successfully!");
      localStorage.removeItem("cart");
      setCart([]);
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.error(error);
      alert("Error placing order");
    }
  };

  return (
    <div className="product-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, i) => (
            <div key={i} className="product-card">
              <h2>{item.name}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
          <button onClick={placeOrder}>Place Order</button>
        </>
      )}
    </div>
  );
}

export default Cart;
