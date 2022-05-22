import React from "react";
import "./styles.css";
import { formatPrice } from "../../../../utils/formatPrice";

const CartListItem = (item) => {
  return (
    <li className="list-item">
      <div className="list-item__container">
        <div
          style={{
            width: "100px",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "5px 0",
          }}
        >
          <img
            src={item.imageUrl}
            alt={item.imageSrc}
            className="list-item__image"
          />
        </div>
        <div>
          <h2 className="list-item__title">{item.name}</h2>
          <span className="list-item__description">
            {formatPrice(item.price)}
          </span>
          <p className="list-item__description-main">
            {formatPrice(item.sellingPrice)}
          </p>
        </div>
      </div>
    </li>
  );
};

export default CartListItem;
