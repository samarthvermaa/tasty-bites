import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  console.log(data);
  return (
    <div
      data-testid="resCard"
      className="flex flex-col rounded-xl border-solid border-1 shadow-lg border-black h-96 w-96 m-4 hover:scale-110 transition duration-500 cursor-pointer bg-slate-200"
    >
      <div>
        {data?.info?.cloudinaryImageId && (
          <img
            className="rounded-xl border-solid h-72 w-96 object-cover"
            src={IMG_CDN_URL + data?.info?.cloudinaryImageId}
            alt="pizza-hut"
          />
        )}
      </div>
      <div className="flex justify-between px-2">
        <p>
          <strong>{data?.info?.name}</strong>
        </p>
        <p>{data?.info?.avgRatingString}</p>
      </div>
      <div className="flex justify-between px-2">
        <p>{data?.info?.cuisines.join(", ")}</p>
        <p>{data?.info?.costForTwo}</p>
      </div>
      <div className="flex justify-between px-2">
        <p>{data?.info?.sla?.slaString}</p>
      </div>
    </div>
  );
};

export const withPromotedRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black rounded-lg text-white z-50 shadow-md m-1 p-1">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
