import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"; // ✅ Correct path
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} MyShop. All rights reserved.</p>
        
      </footer>
    </div>
  );
}

export default App;
