import React from "react";
import { Button, NotificationLabel } from "../../../components";
import CartLayout from "./layout";
import CartListItem from "./CartListItem";
import EmptyCart from "./layout/EmptyCart";

const Cart = (props) => {
  return (
    <>
      {props.addToCartLow ? (
        <CartLayout
          elements={{
            items: props.lowPriceProducts.data.map((item) => (
              <CartListItem key={`${item.id}`} {...item} />
            )),
            precoTotal: props.lowPriceProducts.totalPrice,
            botao: <Button> Finalizar Compra</Button>,
          }}
        />
      ) : props.addToCartHigh ? (
        <CartLayout
          elements={{
            items: props.highPriceProducts.data.map((item) => (
              <CartListItem key={`${item.id}`} {...item} />
            )),
            notificacaoFreteGratis: (
              <NotificationLabel>
                Parabéns, sua compra tem frete grátis!
              </NotificationLabel>
            ),
            precoTotal: props.highPriceProducts.totalPrice,
            botao: <Button> Finalizar Compra</Button>,
          }}
        />
      ) : (
        props.showEmptyCart && <EmptyCart />
      )}
    </>
  );
};

export default Cart;
