import { useEffect, useState } from "react";
import { FETCH_RESTAURANTS_URL } from "./constants";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(FETCH_RESTAURANTS_URL);
      const jsonData = await data.json();
      const restaurantListData =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log("restaurantListData--->", restaurantListData);
      setRestaurants(restaurantListData);
      setFilteredResList(restaurantListData);
    } catch (error) {
      console.log("error-->", error);
    }
  };

  return [restaurants, filteredResList, setFilteredResList];
};

export default useRestaurants;
