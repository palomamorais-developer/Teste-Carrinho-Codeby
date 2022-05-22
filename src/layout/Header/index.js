import React from "react";
import "./styles.css";
import Cart from "./../../assets/icons/cart.svg";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__logo">CodeBy Market</li>
          <li className="header__button" {...props.button}>
            <img
              src={Cart}
              alt="cart svg icon"
              className="header__button-image"
            />
            <div className="header__button-trigger">{props.cart}</div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
