import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantList.map((item) => (
          <RestaurantCard data={item} key={item.info.resId} />
        ))}
      </div>
    </div>
  );
};

export default Body;
