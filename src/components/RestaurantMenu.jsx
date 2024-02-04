import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory.jsx";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const { resID } = useParams();
  const restaurantData = useRestaurantMenu(resID);
  const restaurant = restaurantData?.data?.cards[0]?.card?.card?.info;
  const itemCategories =
    restaurantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories--->", itemCategories);
  return (
    <>
      <div className="flex justify-center p-4">
        <div className="p-4 flex flex-col rounded-xl border-solid border-1 shadow-lg w-11/12 border-black bg-slate-200">
          <div className="flex flex-col items-center">
            <img
              className="rounded-xl border-solid object-cover h-96 w-full"
              src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
              alt="pizza-hut"
            />
          </div>
          <div>
            <div className="flex flex-col justify-center">
              <p className="text-bold text-xl py-2">{restaurant?.name}</p>
              <p className="text-sm text-gray-400">
                {restaurant?.cuisines.join(", ")}
              </p>
              <p className="text-sm text-gray-400">
                <span>{restaurant?.areaName}</span>
                <span className="ml-2">
                  {restaurant?.sla?.lastMileTravelString}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4">
        {itemCategories?.map((item, index) => (
          <RestaurantCategory
            data={item}
            index={index}
            key={item.card.card.title}
            isExpanded={index == expandedIndex}
            onSectionExpand={setExpandedIndex}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
