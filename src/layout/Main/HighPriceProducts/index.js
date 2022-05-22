import React from "react";
import { Button, Svg } from "./../../../components";
import { formatPrice } from "../../../utils/formatPrice";
import AddCart from "./../../../assets/icons/addCart-negative.svg";
import "./../HighPriceProducts/styles.css";

const HighPriceProducts = (props) => {
  return (
    <>
      <div className="main__section--custom">
        {props.data.map((item) => (
          <div className="product-item padding" key={`´${item.id}`}>
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
        <h2 className="section__title">Trufas Tradicionais</h2>
        <Button color="#fff" background="#0090ff" {...props.button}>
          <div className="section__button">
            <Svg src={AddCart} />
            <span> Adicionar ao carrinho</span>
          </div>
        </Button>
      </div>
    </>
  );
};

export default HighPriceProducts;
