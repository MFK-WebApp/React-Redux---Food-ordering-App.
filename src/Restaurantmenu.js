import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./components/constant";
import Shimmer from "./Shimmer";
import { addItem } from "./cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState({});
  const [resmenu, setResMenu] = useState(null);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.9079413&lng=78.07660360000001&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    setResMenu(json);
  }

  return !resmenu ? (
    <Shimmer />
  ) : (
    <div className="menu bg-white py-8 px-4 md:px-12 lg:px-24 flex  ">
      <div className="menuCard bg-purple-600 text-white p-4 rounded-lg mb-8 w-full md:w-1/3 ">
        <h2 className="text-2xl font-bold mb-4 ">{restaurant.name}</h2>
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          className="w-full mb-4"
          alt="Restaurant"
        />
        <h3 className="text-lg mb-2">{restaurant.area}</h3>
        <h3 className="text-lg mb-2">{restaurant.city}</h3>
        <h3 className="text-lg mb-2">{restaurant.avgRating}</h3>
        <h3 className="text-lg">{restaurant.costForTwoMsg}</h3>
      </div>
      <div className="list-style ml-10 p-2 pl-5 bg-purple-300 rounded-lg w-3/4">
        <h1 className="text-2xl font-bold mb-4 text-purple-600 ">Menu</h1>

        <ul>
          {resmenu?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(
            (itemCard) => (
              <li
                key={itemCard?.card?.info?.id}
                className="flex justify-between items-center text-lg mb-2"
              >
                <span>{itemCard?.card?.info?.name}</span>
                <button
                  className="p-1 bg-green-100 rounded-md"
                  onClick={() => addFoodItem(itemCard?.card?.info)}
                >
                  Add to cart
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
