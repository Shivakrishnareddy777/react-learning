import { useState } from "react";
import restaurantList from "../utils/mockdata";
import RestaurantCard from "./RestuarantCard";
const Body = () => {
    const [ListofRestaurants, setRestaurants] = useState(restaurantList)
        

      
    return (
      <div className="body">
        <div className="filter">
            <button onClick={()=>{
                const filteredlist=ListofRestaurants.filter((res)=>res.data.avgRating > 4.0);
                setRestaurants(filteredlist);

            }}>
                Top rated retsurants

            </button>

        </div>
        <div className="restaurant-container">
          {ListofRestaurants.map((item) => {
            return <RestaurantCard key={item.data.id}   resData={item} />;
          })}
        </div>
      </div>
    );
  };
   export default Body;