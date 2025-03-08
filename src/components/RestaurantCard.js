import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  //props is the java script object if you want to use js in jsx put it in paranthises
  console.log(props);

  const { name, cuisines, costForTwo, avgRating, id } = props.resInfo.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400">
      <img
        src={CDN_URL + props.resInfo.info.cloudinaryImageId}
        className="rounded-lg"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
