import { useEffect, useState } from "react";

const useRestaurantMenu = (resID) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("http://localhost:8080/restaurants/" + resID);
      const restaurant = await data.json();
      setRestaurant(restaurant);
    } catch (error) {
      console.log("error-->", error);
    }
  };

  return restaurant;
};

export default useRestaurantMenu;
