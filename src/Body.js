import "./App";
import RestrauntCard from "./components/Restrurantcard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurants) =>
    restaurants?.info?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    // calling an APIdd
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.9079413&lng=78.07660360000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if(!allRestaurants) return null;

  if(filteredRestaurants?.length ==0) return <center><h1>Oooppsi!! No Restraunt Found🙁</h1></center>

  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <> 
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search Food!"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            //We'll filter the data....
            const data = filterData(searchTxt, allRestaurants);
            //Update the state - restaurants variables
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
