import React from "react";
import { Link } from "react-router-dom";
import icon from '../assets/img66.png';
import imgb1 from '../assets/imgb1.jpg';
import imgh1 from '../assets/imgh1.jpg';
import imgh2 from '../assets/imgh2.jpg';
import imgh3 from '../assets/imgh3.jpg';
import imgh5 from '../assets/imgh5.jpg';
import imgh6 from '../assets/imgh6.jpeg';
import imgh7 from '../assets/imgh7.jpg';
import sam1 from '../assets/sam1.jpg';
import sam1A from '../assets/sam1A.png';



export default function Home() {
  return (
    
    <div className="home-container">
      

       <div className="home2">
        <img   src={imgh6}  alt="" />

        <div className="home3">
          <img src={imgh7} alt=""/>

        </div>

        <div className="home4">
          <h3>Explore our exquisite Bag Collection now!</h3>
          <div id="button1"><button type="button" class="btn ">Shop Now</button></div>
       
        </div>

       </div>

      <div className="p5">
        
        <div class="container row">
          <h2 className="t1">Most Popular</h2>

        <div class="card col-3">
           <img src={imgh2} alt="" className="imgh1" />
        <h5 class="mt-1">Work & Office</h5>
        <h6 class="text-dark">Timeless Classic Collection</h6>
        <h6>$129.00</h6>
        </div>

        <div class="card col-3">
           <img src={imgh3} alt="" className="imgh1" />
        <h5 class="mt-1">Casual</h5>
        <h6 class="text-dark">Bohemian Rhapsody Attire</h6>
        <h6 >$145.50</h6>
        </div>

        <div class="card col-3">
           <img src={imgh5} alt="" className="imgh1" />
        <h5 class="mt-1">Party Wear</h5>
        <h6 class="text-dark">Midnight Gala Maxi Dress</h6>
        <h6>$250.00</h6>
       </div>

        <div class="card col-3 ">
           <img src={imgh1} alt="" className="imgh1" />
        <h5 class="mt-1">Casual</h5>
        <h6 class="text-dark">Power Suit Ensemble</h6>
        <h6>$125.00</h6>
        </div>
       
       </div>
       <br />
        </div>

     <header className="home-header">
        <title>Fashion-Hub</title>
        <h1>Welcome to Fashion-Hub</h1>
        <p>Your one-stop e-commerce destination</p>
       <div>
          <Link to="/login" className="home-link1">Login</Link> 
          <Link to="/signup" className="home-link2">Signup</Link>
          <Link to="/" className="home-link3">Home</Link>
          <Link to="/AboutUs" className="home-link4">AboutUs</Link>
          <img className="img1" src={icon} alt="" />
          <img  className="img2"src={icon} alt="" />
        </div>
      </header>
      <div className="imgb1">
        <img src={imgb1} alt="" id="imgb2"/>
        <h1 className="p1">Shop Smarter <br /> Live Better</h1>
        <h4 className="p2">Effortlessly blend comfort <br /> & style!</h4>
        <div className="button"><button type="button" class="btn ">Shop Now</button></div>
       </div><br />
       {/* <div>
        <p className="p3">Categories</p>
        <ul className="p4">
          <li> <Link to="/" class="text-decoration-none text-dark">Casual</Link> </li>
          <li> <Link to="/"class="text-decoration-none text-dark">Work & Office</Link> </li>
          <li> <Link to="/"class="text-decoration-none text-dark">Activewear</Link> </li>
          <li> <Link to="/"class="text-decoration-none text-dark">Evening Dresses</Link> </li>
        </ul>
       </div> */}
      {/* <footer className="home-footer">
        <p>&copy; 2025 ShopHub. All rights reserved.</p>
      </footer> */}
        <div className="img8">
          <img src={sam1} alt="" />
          <img src={sam1A} alt="" className="img11A"/>
          <h1>Samantha's Favourite Shop</h1>
          <h3>”Fashion-Hub is my fashion sanctuary! The curated collection effortlessly blends chic trends with timeless elegance, making every purchase a delightful discovery. The quality of their pieces is unmatched, and I appreciate the brand's commitment to sustainable fashion. What truly sets FemmeWardrobe apart is their customer-centric approach”</h3>
        </div>
        <div className="e1">

        </div>

        </div>
  );
}
