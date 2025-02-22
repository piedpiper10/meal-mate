import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {}}>
          Top Rated restaurants
        </button>
      </div>
      <div className="res-container">
        {resObj.map((restaurant) => (
          <RestaurantCard resInfo={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
