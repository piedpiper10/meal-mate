import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      console.log("check the data find", data);
      const json = await data.json();
      console.log(
        "check for the json",
        json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      setListOfRestaurants(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (e) {
      console.log("check error", e);
    }
  }

  //conditional rendering
  if (listOfRestaurants.length === 0) return <Shimmer />;

  console.log("body rendered");
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4.5
              )
            );
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resInfo={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
