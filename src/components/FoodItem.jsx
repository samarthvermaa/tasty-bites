import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../utils/constants";
import Button from "./Button";

const FoodItem = ({ data }) => {
  const dispatch = useDispatch();
  const OnAddItemButtonClick = (e, item) => {
    console.log("item--->", item);
    dispatch(addItem(item));
  };
  return (
    <div className="flex mb-4 px-6 justify-center items-center">
      <div className="flex flex-col flex-1 py-3 px-4 w-9/12">
        <p className="text-bold text-sm">{data?.card?.info?.name}</p>
        <p className="text-bold text-sm mb-4">
          {`₹${
            (data?.card?.info?.defaultPrice || data?.card?.info?.price) / 100
          }`}
        </p>
        <p className="text-sm text-gray-400">{data?.card?.info?.description}</p>
      </div>
      <div className="w-3/12 h-24 flex justify-center items-center">
        <Button title="Add+" onClick={(e) => OnAddItemButtonClick(e, data)} />
        <img
          className="rounded-xl border-solid object-fit h-24 w-48"
          src={IMG_CDN_URL + data?.card?.info?.imageId}
        />
      </div>
    </div>
  );
};

export default FoodItem;
