import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const restaurant = useRestaurantMenu(resID);
  return (
    <div className="res-menu-container">
      <div className="res-menu-img-container">
        <img
          className="res-menu-img"
          src={restaurant?.info?.image?.url}
          alt="pizza-hut"
        />
      </div>
      <div className="res-menu-body-container">
        <div className="res-menu-body-name">
          <h2>{restaurant?.info?.name}</h2>
          <h4>{restaurant?.info?.costText?.text}</h4>
          <p>{restaurant?.info?.locality?.address}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
