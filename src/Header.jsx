import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

//Header Component
const HeaderComponent = () => {
    return (
    <>
      <div className="header">
        <a href="/">
          <img
            src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-food-delivery-logo-design-png-image_5392526.jpg"
            alt="logo"
          />
        </a>
        <ul>
          <Link to="/">
          <li>Home</li>
          </Link>
          <Link to="/contact">
          <li>Contact</li>
          </Link>
          <Link to="/About"> 
          <li>About</li>
          </Link>
          <Link to="cart">
          <li>Cart</li>
          </Link>
        </ul>
      </div>
    </>
  );
};
export default HeaderComponent;
