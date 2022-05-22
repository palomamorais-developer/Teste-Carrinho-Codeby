import React, { useState, useEffect } from "react";
import { formatPrice } from "./utils/formatPrice";
import Header from "./layout/Header";
import Main from "./layout/Main";
import LowPriceProducts from "./layout/Main/LowPriceProducts/index";
import HighPriceProducts from "./layout/Main/HighPriceProducts/index";
import Cart from "./layout/Header/Cart";
import Footer from "./layout/Footer";

function App() {
  let total = 0;
  const [freeShipping, setFreeShipping] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [addToCartLow, setLow] = useState(false);
  const [addToCartHigh, setHigh] = useState(false);
  const [lowPriceProducts, setLowPriceProducts] = useState({ items: [] });
  const [highPriceProducts, setHighPriceProducts] = useState({ items: [] });

  const formattedTotalPrice = (productsList) => {
    productsList.map((item) => (total += item.sellingPrice));
    return formatPrice(total);
  };

  useEffect(() => {
    function fetchData() {
      let urls = [
        {
          url: "./abaixo-10-reais.json",
          type: "low",
        },
        {
          url: "./acima-10-reais.json",
          type: "high",
        },
      ];

      let requests = urls.map((item) =>
        fetch(item.url).then((response) => response.json())
      );

      Promise.all(requests).then((datas) => {
        datas.forEach((data, i) => {
          const url = urls[i];
          if (url.type === "low") {
            setLowPriceProducts(data);
          }
          if (url.type === "high") {
            setHighPriceProducts(data);
          }
        });
      });
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (total > 10) {
      setFreeShipping(true);
    } else {
      setFreeShipping(false);
    }
  }, [total]);

  return (
    <div
      style={{
        display: "flex",
        background: "#d1d8e5",
        // height: "100vh",
        overflowX: "hidden",
        overflowY: "auto",
        flexDirection: "column",
      }}
    >
      <Header
        button={{
          onClick: () => {
            setOpenMenu(!openMenu);
            // setProdutos(!adicionarProdutos);
          },
        }}
        cart={
          <Cart
            addToCartLow={openMenu && addToCartLow}
            addToCartHigh={openMenu && addToCartHigh}
            showEmptyCart={openMenu}
            lowPriceProducts={{
              data: lowPriceProducts.items,
              totalPrice:
                addToCartLow && formattedTotalPrice(lowPriceProducts.items),
            }}
            highPriceProducts={{
              data: highPriceProducts.items,
              freeShipping: freeShipping,
              totalPrice:
                addToCartHigh && formattedTotalPrice(highPriceProducts.items),
            }}
          />
        }
      />
      <Main
        lowPriceProducts={
          <LowPriceProducts
            data={lowPriceProducts.items}
            button={{
              onClick: () => {
                setLow(true);
                setHigh(false);

                setOpenMenu(true);
              },
            }}
          />
        }
        highPriceProducts={
          <HighPriceProducts
            data={highPriceProducts.items}
            button={{
              onClick: () => {
                setLow(false);
                setHigh(true);

                setOpenMenu(true);
              },
            }}
          />
        }
      />
      <Footer />
    </div>
  );
}

export default App;
