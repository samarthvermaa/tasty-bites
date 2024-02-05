import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleatCart } from "../utils/cartSlice";
import Button from "./Button";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const onClearCart = () => {
    dispatch(cleatCart());
  };
  return (
    <div>
      <Button title="Clear Cart" onClick={onClearCart} />
      {cartItems?.map((item) => (
        <FoodItem key={item?.card?.info?.id} data={item} />
      ))}
    </div>
  );
};

export default Cart;
