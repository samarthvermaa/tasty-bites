import RestaurantCard, { withPromotedRestaurantCard } from "./RestaurantCard";
import Button from "./Button";
import { useState } from "react";
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
  console.log("resList-->", resList);

  const onlineStatus = useOnlineStatus();

  const PromotedRestaurantCard = withPromotedRestaurantCard(RestaurantCard);

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
          return item.info?.avgRating >= 4.3;
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
    <div className="rounded-xl border-solid border-1 border-black p-4">
      <div className="flex justify-center p-2">
        <input
          type="text"
          data-testid="searchInput"
          className="border-solid border-2 rounded-md border-black mx-4"
          value={search}
          placeholder="Search Restaurants"
          onChange={onSearchChange}
        />
        <Button title="Reset" onClick={onResetClick} />
      </div>
      <div className="flex justify-center p-2">
        <Button
          title={filterButtonTitle}
          onClick={onFilterTopRestaurantButtonClick}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {resList && resList.length > 0 ? (
          filteredResList.map((item) => (
            <Link key={item.info.id} to={`restaurants/${item.info.id}`}>
              {item.isPromoted ? (
                <PromotedRestaurantCard data={item} />
              ) : (
                <RestaurantCard data={item} />
              )}
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
