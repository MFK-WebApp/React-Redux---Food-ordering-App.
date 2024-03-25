import "./App";
import RestrauntCard from "./components/Restrurantcard";
import { Suspense, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
      //AfterNoon
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      //Morning
      // json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    {
      console.log(json);
    }
  }

  if (!allRestaurants) return null;

  // if(filteredRestaurants?.length == 0) return <center><h1>Oooppsi!! No Restraunt Found🙁</h1></center>

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container absolute top-2 left-1/3">
        <input
          type="text"
          className="search-input p-3 px-32 rounded-lg"
          placeholder="S e a r c h   F o o d !"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />

        <button
          className="search-btn text-white mx-1 border-2 p-2.5 rounded-lg font-bold"
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
      <div className="restaurant-list flex flex-wrap mt-2 ml-2">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurantmenu/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestrauntCard {...restaurant.info} key={restaurant.info.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
