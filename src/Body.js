import "./App";
import RestrauntCard from "./components/Restrurantcard";
import { restaurantList } from "./components/constant";

const Body = () => { 
    return( 
    <div className="restaurant-list">
        {restaurantList.map((restaurant)=>{
          return <RestrauntCard {...restaurant.info} key={restaurant.info.id} />;
        })}
    </div>
    )
  };

  export default Body



  