import RestaurantCard from "./RestaurantCard";
import Button from "./Button";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [search, setSearch] = useState("");
  const [filterButtonTitle, setFilterButtonTitle] = useState(
    "Filter Top Restaurants"
  );

  useEffect(() => {
    console.log("first");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("http://localhost:8080/restaurants");
      const apiResList = await data.json();
      initialRes = apiResList;
      setResList(apiResList);
      setFilteredResList(apiResList);
    } catch (error) {}
  };

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

  return (
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
  );
};

export default Body;
