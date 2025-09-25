import React, { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/products/") // your ProductViewSet
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      // Only send the necessary info to cart
      cart.push({
        id: product.id,
        name: product.name,
        price: parseFloat(product.price),
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="product-page">
      <h1>Products</h1>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map((p) => (
          <div key={p.id} className="product-card">
            <h2>{p.name}</h2>
            <p>{p.description}</p>
            <p>Category: {p.category?.name || "N/A"}</p>
            <p>Price: ${p.price}</p>
            <p>Stock: {p.stock}</p>
            <button
              onClick={() => addToCart(p)}
              disabled={p.stock === 0}
            >
              {p.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Products;
