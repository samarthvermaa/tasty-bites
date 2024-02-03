const User = ({ image, name, location, age, position, rating }) => {
  return (
    <div className="flex flex-col rounded-xl border-solid border-1 shadow-lg border-black h-96 w-80 m-4 hover:scale-110 transition duration-500 cursor-pointer">
      <div>
        {image && (
          <img
            className="rounded-xl border-solid h-72 w-80 object-fit"
            src={image}
            alt="pizza-hut"
          />
        )}
      </div>
      <div className="flex justify-between px-2">
        <p>
          <strong>{name}</strong>
        </p>
        <p>{location}</p>
      </div>
      <div className="flex justify-between px-2">
        <p>{age}</p>
        <p>{position}</p>
      </div>
      <div className="flex justify-between px-2">
        <p>{rating}</p>
      </div>
    </div>
  );
};

export default User;
