import React from "react";
import { useSelector } from "react-redux";
import "../styles.css";
import CartItem from "./CartItem";

const Cart = () => {
  const cartGoods = useSelector((store) => store.basketReducer.cartGoods);

  const getTotal = () => {
    return cartGoods.reduce((acc, item) => acc + item.price * item.amount, 0);
  };
  return (
    <div className="cart">
      <h2 className="cart__title">Shopping Cart</h2>
      {cartGoods.length ? (
        <ul className="cart__list" key={cartGoods.title}>
          {cartGoods.map((item, idx) => (
            <li className="cart__list-item" key={idx}>
              <CartItem {...item} index={idx} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="cart__note">Nothing in the cart now</p>
      )}

      <p className="cart__total">Total: {getTotal()}.00$</p>
    </div>
  );
};

export default Cart;
