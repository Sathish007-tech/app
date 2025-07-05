import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <title>ShopHub</title>
        <h1>Welcome to ShopHub</h1>
        <p>Your one-stop e-commerce destination</p>
       <div>
          <Link to="/login" className="home-link1">Login</Link> 
          <Link to="/signup" className="home-link2">Signup</Link>
          <img className="img1" src="img66.png" alt="" />
      <img  className="img2"src="img66.png" alt="" />
        </div>
      </header>
      <div className="imgb1">
        <img src="imgb.jpg" alt="" id="imgb2"/>
        <h1 className="p1">“Shop Smarter , Live Better”</h1>
        <h2 className="p2">Thousands of  products <br /> at your door</h2>
       </div><br />
       <div>
        <p className="p3">Categories / Products</p>
        <ul className="p4">
          <li>Electronics</li>
          <li>Groceries</li>
          <li>Home Essentials</li>
          <li>Groceries</li>
        </ul>
       </div>
      <footer className="home-footer">
        <p>&copy; 2025 ShopHub. All rights reserved.</p>
      </footer>
    </div>
  );
}
