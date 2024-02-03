const RestaurantCard = ({ data }) => {
  return (
    <div className="flex flex-col rounded-xl border-solid border-1 shadow-lg border-black h-96 w-96 m-4 hover:scale-110 transition duration-500 cursor-pointer">
      <div>
        {data?.info?.image?.url && (
          <img
            className="rounded-xl border-solid h-72 w-96 object-cover"
            src={data?.info?.image?.url}
            alt="pizza-hut"
          />
        )}
      </div>
      <div className="flex justify-between px-2">
        <p>
          <strong>{data?.info?.name}</strong>
        </p>
        <p>{data?.info?.rating?.aggregate_rating}</p>
      </div>
      <div className="flex justify-between px-2">
        <p>{data?.info?.cuisine[0]?.name}</p>
        <p>{data?.info?.costText?.text}</p>
      </div>
      <div className="flex justify-between px-2">
        <p>{data?.order?.deliveryTime}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
