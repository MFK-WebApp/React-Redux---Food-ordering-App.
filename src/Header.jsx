//rafce
import React, { useState } from "react";
import "./App.css";
//Header Component
const HeaderComponent = () => {
  const [searchTxt, setSearchTxt] = useState("");

  const[textChange, setTextChange] = useState("false")

  return (
    <>
    <div className="header">
      <a href="/">
        <img
          src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-food-delivery-logo-design-png-image_5392526.jpg"
          alt="logo"
        />
      </a>
      <div className="search-container">
        <input
          type="text"
          className="search-input"  
          placeholder="Search Food!"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value)
          }}
        />
        
        <button className="searchButton" onClick={()=>{
          setTextChange("true")
        }}>
          Search <h1>{textChange}</h1>
        </button>
      </div>
      <ul>
        <li>Home</li>
        <li>Contant</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </div>
    </>
  );
};
export default HeaderComponent;
