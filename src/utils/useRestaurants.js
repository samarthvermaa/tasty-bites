import { useEffect, useState } from "react";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("http://localhost:8080/restaurants");
      const restaurant = await data.json();
      setRestaurants(restaurant);
      setFilteredResList(restaurant);
    } catch (error) {
      console.log("error-->", error);
    }
  };

  return [restaurants, filteredResList, setFilteredResList];
};

export default useRestaurants;
