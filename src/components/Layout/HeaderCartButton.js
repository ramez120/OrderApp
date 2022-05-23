import React, { useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import ModalContext from "../../store/modal-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const modalCtx = useContext(ModalContext);

  const { items } = cartCtx;
  const [btnIsHighLighted, setBtnIsHighlighted] = useState(false);
  const numberOfCartItems = items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);
  const btnClasses = `${classes.button}  ${
    btnIsHighLighted ? classes.bump : ""
  } `;
  useEffect(() => {
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={modalCtx.showModal}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
