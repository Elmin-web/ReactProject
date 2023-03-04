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
  }
  const removeAllItem=()=>{
    dispatch({
      type: "REMOVE-ALL-ITEM",
      payload: id 
    });
  }
   const addButton=()=>{
    dispatch({
      type:"ADD_ONE_GOOD",
      payload: { title, price, id },
    })
   }
  
  return (
    <div className="cart-item">
      <p className="cart-item__title">{title}</p>
      <button onClick={addButton}>+</button>
      <button onClick={removeItem}>-</button>
      <p className="cart-item__price">{price}.00$</p>
      <h1>{amount}</h1>
      <button onClick={removeItem}>Remove</button>
      <button onClick={removeAllItem}>Remove All</button>
    </div>
  );
};

export default CartItem;
