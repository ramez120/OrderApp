import React, { useState } from "react";
import Header from "./components/Layout/Header";
import MainImg from "./components/Layout/MainImg";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
const App = () => {
  const [isCartShown, setIsCartShown] = useState(false);
  const showCartHandler = () => {
    setIsCartShown(true);
  };
  const hideCartHandler = () => {
    setIsCartShown(false);
  };
  return (
    <CartProvider>
      {isCartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <MainImg />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
