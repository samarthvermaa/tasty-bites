import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./../utils/mockData";
import Button from "./Button";
import { useState } from "react";

const Body = () => {
  const [resList, setResList] = useState(restaurantList);
  const onFilterTopRestaurantButtonClick = () => {
    setResList((prevList) => {
      if (prevList.length == restaurantList.length) {
        return prevList.filter((item) => {
          return item.info.rating.aggregate_rating >= 4;
        });
      } else {
        return restaurantList;
      }
    });
  };

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="top-rated-btn-container">
        <Button
          title={"Filter Top Restaurant"}
          onClick={onFilterTopRestaurantButtonClick}
        />
      </div>
      <div className="res-container">
        {resList.map((item) => (
          <RestaurantCard data={item} key={item.info.resId} />
        ))}
      </div>
    </div>
  );
};

export default Body;
