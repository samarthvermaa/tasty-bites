const User = ({ image, name, location, age, position, rating }) => {
  return (
    <div className="res-card">
      <div className="res-img-container">
        {image && <img className="res-img" src={image} alt="pizza-hut" />}
      </div>
      <div className="food-info">
        <p>
          <strong>{name}</strong>
        </p>
        <p>{location}</p>
      </div>
      <div className="food-cost">
        <p>{age}</p>
        <p>{position}</p>
      </div>
      <div className="time-to-deliver">
        <p>{rating}</p>
      </div>
    </div>
  );
};

export default User;
