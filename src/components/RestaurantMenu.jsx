import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const restaurant = useRestaurantMenu(resID);
  return (
    <div className="flex justify-center p-4">
      <div className="p-4 flex flex-col rounded-xl border-solid border-1 shadow-lg w-3/5 border-black">
        <div className="flex flex-col items-center">
          <img
            className="rounded-xl border-solid object-cover h-96 w-full"
            src={restaurant?.info?.image?.url}
            alt="pizza-hut"
          />
        </div>
        <div className="res-menu-body-container">
          <div className="flex flex-col justify-center">
            <h2>{restaurant?.info?.name}</h2>
            <h4>{restaurant?.info?.costText?.text}</h4>
            <p>{restaurant?.info?.locality?.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
