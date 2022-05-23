import React, { useContext } from "react";
import Header from "./components/Layout/Header";
import MainImg from "./components/Layout/MainImg";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import ModalContext from "./store/modal-context";

const App = () => {
  const modalCtx = useContext(ModalContext);
  return (
    <CartProvider>
      {modalCtx.isVisible && <Cart />}
      <Header />
      <MainImg />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
