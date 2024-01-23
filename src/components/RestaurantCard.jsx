const RestaurantCard = ({ data }) => {
  return (
    <div className="res-card">
      <div className="res-img-container">
        {data?.info?.image?.url && (
          <img
            className="res-img"
            src={data?.info?.image?.url}
            alt="pizza-hut"
          />
        )}
      </div>
      <div className="food-info">
        <p>
          <strong>{data?.info?.name}</strong>
        </p>
        <p>{data?.info?.rating?.aggregate_rating}</p>
      </div>
      <div className="food-cost">
        <p>{data?.info?.cuisine[0]?.name}</p>
        <p>{data?.info?.costText?.text}</p>
      </div>
      <div className="time-to-deliver">
        <p>{data?.order?.deliveryTime}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
