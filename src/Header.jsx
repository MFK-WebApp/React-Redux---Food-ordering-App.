import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

//Header Component
const HeaderComponent = () => {
    return (
    <>
      <div className="flex h-16 justify-between bg-purple-600 shadow-2xl">
        <a href="/">
          <img className="h-12 rounded-xl mx-3 mt-2"
            src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-food-delivery-logo-design-png-image_5392526.jpg"
            alt="logo"
          />
        </a>
        <ul className="flex pr-10 align-middle text-white my-4 text-xl font-medium ">
          <Link to="/">
          <li className="px-5 ">Home</li>
          </Link>
          <Link to="/contact">
          <li className="px-5">Contact</li>
          </Link>
          <Link to="/About"> 
          <li className="px-5">About</li>
          </Link>
          <Link to="cart">
          <li className="px-5">Cart</li>
          </Link>
        </ul>
      </div>
    </>
  );
};
export default HeaderComponent;
