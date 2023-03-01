import React from "react";
import "../styles.css";
import { useSelector } from "react-redux";
import GoodsItem from "./GoodsItem";
const Goods = () => {
  const goods = useSelector((store) => store.basketReducer.goods);
  return (
    <div className="goods">
      <h2 className="goods__title">Video Games</h2>
      {goods.map((item) => (
        <ul className="goods__list" key={item.id}>
          <li className="goods__list-item">
            <GoodsItem {...item} />
          </li>
        </ul>
      ))}
    </div>
  );
};
export default Goods;
