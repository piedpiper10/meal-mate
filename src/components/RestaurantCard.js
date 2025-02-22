import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  //props is the java script object if you want to use js in jsx put it in paranthises
  console.log(props);

  const { name, cuisines, costForTwo, avgRating, id } = props.resInfo.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + props.resInfo.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
