import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

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
      // json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      setListOfRestaurants(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
      setFilteredRestaurants(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (e) {
      console.log("check error", e);
    }
  }

  const onLineStatus = useOnlineStatus();

  if (onLineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );

  //conditional rendering
  // if (listOfRestaurants.length === 0) return <Shimmer />;

  console.log("body rendered");
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={inputValue}
            onChange={(e) => {
              console.log(e.target.value);
              setInputValue(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setFilteredRestaurants(
                listOfRestaurants.filter((restaurant) => {
                  console.log(restaurant.info.name);
                  return restaurant.info.name
                    .toLowerCase()
                    .includes(inputValue.toLowerCase());
                })
              );
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <div onClick={() => navigate("restaurantMenu/" + restaurant.info.id)}>
            <RestaurantCard resInfo={restaurant} key={restaurant.info.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
