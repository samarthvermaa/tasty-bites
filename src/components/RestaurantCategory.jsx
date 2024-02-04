import FoodItem from "./FoodItem";

const RestaurantCategory = ({ data, onSectionExpand, isExpanded, index }) => {
  const { itemCards, title } = data?.card?.card;
  const onArrowClick = () => {
    onSectionExpand((prev) => (prev == index ? -1 : index));
  };
  return (
    <div className="rounded-xl border-solid border-1 shadow-lg w-11/12 border-black bg-slate-200 p-4 my-4">
      <div
        onClick={onArrowClick}
        className="flex justify-between cursor-pointer"
      >
        <span className="cursor-pointer">
          {title} ({itemCards.length})
        </span>
        <span>{isExpanded ? "⬆️" : "⬇️"}</span>
      </div>
      {isExpanded && (
        <div>
          {itemCards?.map((item) => (
            <FoodItem key={item?.card?.info?.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
