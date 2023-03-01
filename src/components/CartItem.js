import React from "react";
import { useDispatch } from "react-redux";
import "../styles.css";
const CartItem = ({ title, price,amount ,id, index }) => {
  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch({
      type: "REMOVE-ITEM",
      payload: { index, id },
    });
  };
  return (
    <div className="cart-item">
      <p className="cart-item__title">{title}</p>
      <p className="cart-item__price">{price}.00$</p>
      <h1>{amount}</h1>
      <button onClick={removeItem}>Remove</button>
    </div>
  );
};

export default CartItem;
