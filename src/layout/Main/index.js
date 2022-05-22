import React from "react";
import "./styles.css";

const Main = (props) => {
  return (
    <main className="main">
      <section className="main__section main__section--primary">
        {props.lowPriceProducts}
      </section>
      <section className="main__section  main__section--secondary">
        {props.highPriceProducts}
      </section>
    </main>
  );
};

export default Main;
