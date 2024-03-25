import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";

//Header Component
const HeaderComponent = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      <div className="flex h-16 justify-between bg-purple-600 shadow-2xl">
        <a href="/">
          <img
            className="h-12 rounded-xl mx-3 mt-2"
            src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-food-delivery-logo-design-png-image_5392526.jpg"
            alt="logo"
          />
        </a>
        <ul className="flex pr-10 align-middle text-white my-4  font-medium ">
          <Link to="/">
            <li className="px-5 mt-1">Home</li>
          </Link>
          <Link to="/contact">
            <li className="px-5 mt-1">Contact</li>
          </Link>
          <Link to="/About">
            <li className="px-5 mt-1">About</li>
          </Link>
          <Link to="/cart">
            <li className="rounded-lg border-white border-2 bg-fuchsia-800 -my-1 px-3 py-2">
              Cart | {cartItems.length} items{" "}
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};
export default HeaderComponent;
