import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const removeItemhandler = (id) => {
    cartCtx.removeItem(id);
  };
  const addItemsHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={addItemsHandler.bind(null, item)}
            onRemove={removeItemhandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={props.onClose}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
