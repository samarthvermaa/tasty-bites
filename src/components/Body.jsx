import RestaurantCard from "./RestaurantCard";
import Button from "./Button";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [search, setSearch] = useState("");
  const [filterButtonTitle, setFilterButtonTitle] = useState(
    "Filter Top Restaurants"
  );
  const [resList, filteredResList, setFilteredResList] = useRestaurants();

  const onlineStatus = useOnlineStatus();

  const onSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    setFilteredResList(() => {
      if (value) {
        const list = resList.filter((item) => {
          return item.info.name.toLowerCase().includes(value.toLowerCase());
        });
        console.log("list-->", list);
        return list;
      } else {
        return resList;
      }
    });
  };

  const onFilterTopRestaurantButtonClick = () => {
    setFilterButtonTitle((prev) =>
      prev === "Filter Top Restaurants"
        ? "See All Restaurants"
        : "Filter Top Restaurants"
    );
    setFilteredResList((prevList) => {
      if (prevList.length == resList.length) {
        return resList.filter((item) => {
          return item.info.rating.aggregate_rating >= 4;
        });
      } else {
        return resList;
      }
    });
  };

  const onResetClick = () => {
    setSearch("");
    setFilteredResList(resList);
    setFilterButtonTitle("Filter Top Restaurants");
  };

  return onlineStatus ? (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="input"
          value={search}
          placeholder="Search Restaurants"
          onChange={onSearchChange}
        />
        <Button title="Reset" onClick={onResetClick} />
      </div>
      <div className="top-rated-btn-container">
        <Button
          title={filterButtonTitle}
          onClick={onFilterTopRestaurantButtonClick}
        />
      </div>
      <div className="res-container">
        {resList.length > 0 ? (
          filteredResList.map((item) => (
            <Link key={item.info.resId} to={`restaurants/${item.info.resId}`}>
              <RestaurantCard data={item} />
            </Link>
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  ) : (
    <h1>Seems your are offline</h1>
  );
};

export default Body;
