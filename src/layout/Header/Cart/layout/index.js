import React from "react";
import "./styles.css";

const CartLayout = ({ elements }) => {
  return (
    <div className="cart">
      <div className="cart__container">
        <h1 className="cart__title">Meu cart</h1>
        <hr />
        <ul className="cart__list">{elements.items}</ul>
        <hr />
        <div className="cart__total-container">
          <span className="cart__total">Total</span>
          <span className="cart__total">{elements.precoTotal}</span>
        </div>
        {elements.notificacaoFreteGratis}
        <hr />
        <div className="cart__button">{elements.botao}</div>
      </div>
    </div>
  );
};

export default CartLayout;
