import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "./constants";

const useRestaurantMenu = (resID) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(FETCH_MENU_URL + resID);
      const jsonData = await data.json();
      setRestaurant(jsonData);
    } catch (error) {
      console.log("error-->", error);
    }
  };

  return restaurant;
};

export default useRestaurantMenu;
