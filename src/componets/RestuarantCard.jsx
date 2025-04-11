import { RES } from "../utils/constant";

const RestaurantCard = (props) => {
    const resData = props.resData;
    const {name, cuisines,avgRating, deliveryTime, cloudinaryImageId} = resData.data;
  
    return (
      <div className="restaurant-card">
        <div className="restaurant-info"></div>
        <img
          className="cardImage"
          src={RES+
            cloudinaryImageId
          }
          alt="LogoImage"
        />
        <h2>{name}</h2>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{avgRating}</h4>
        <h4>Delivery Time: {deliveryTime}</h4>
      </div>
    );
  };
  export default RestaurantCard;