const Button = ({ title, onClick, className }) => {
  return (
    <div className={className}>
      <button
        className="border-solid border-1 shadow-md rounded-sm px-2 py-1 border-black bg-orange-300 hover:bg-orange-400 active:bg-orange-300"
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
