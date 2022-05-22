import React from "react";
import "./styles.css";

const EmptyCart = () => {
  return (
    <div className="cart">
      <div className="cart__container">
        <h1 className="cart__title">Meu carrinho</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
            fontWeight: "400",
            background: "#eee",
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
        >
          <h4>carrinho vazio. </h4>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
