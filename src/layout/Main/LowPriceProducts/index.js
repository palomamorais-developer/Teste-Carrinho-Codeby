import React from "react";
import "./../LowPriceProducts/styles.css";
import { formatPrice } from "../../../utils/formatPrice";
import { Button, Svg } from "../../../components";
import AddCart from "./../../../assets/icons/addCart-negative.svg";

const LowPriceProducts = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {props.data.map((item) => (
          <div className="product-item" key={`´${item.id}`}>
            <div className="product-item__image-container">
              <img src={item.imageUrl} alt="" className="product-item__image" />
            </div>
            <h2 className="product-item__title">{item.name}</h2>
            <div className="product-item__description-container">
              <span className="product-item__description">
                {formatPrice(item.sellingPrice)}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="section__container">
        <h2 className="title">Trufas em promoção</h2>
        <Button color="#fff" background="#ef9d09" {...props.button}>
          <div className="section__button">
            <Svg src={AddCart} />
            <span> Adicionar ao carrinho</span>
          </div>
        </Button>
      </div>
    </>
  );
};
export default LowPriceProducts;
