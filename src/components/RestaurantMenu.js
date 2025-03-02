import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestrauantMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {
  const params = useParams();
  console.log("yo yo params", params);
  const restaurantInfo = useRestrauantMenu(params.id);

  const { name, costForTwoMessage, cuisines } =
    restaurantInfo?.data?.cards?.[2].card?.card?.info || {};
  console.log("check for the info", name);

  const itemCards =
    restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards;

  console.log(
    "check item cards",
    restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards
  );

  return restaurantInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>Menu</h3>
      {itemCards?.map((card) => (
        <li>{card?.card?.info?.name}</li>
      ))}
    </div>
  );
};

export default RestaurantMenu;
