import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem/CartItem";
import Checkout from "./Checkout";
import Spinner from "../UI/Spinner";

import CartContext from "../../store/cart-context";
import ModalContext from "../../store/modal-context";
import useHttp from "../../hooks/use-http";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const [isOrdering, setIsOrdering] = useState(false);
  const cartCtx = useContext(CartContext);
  const modalCtx = useContext(ModalContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const { fetchData, isLoading, error } = useHttp();

  const removeItemhandler = (id) => {
    cartCtx.removeItem(id);

    setIsOrdering(false);
  };
  const addItemsHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const orderHandler = () => {
    setIsOrdering(true);
  };
  const orderTakenHandler = (data) => {
    cartCtx.clear();
    modalCtx.hideModal();
  };
  const submitOrderHandler = (userData) => {
    fetchData(
      {
        url: "https://orderapp-bb52d-default-rtdb.firebaseio.com/orders.json",
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      },
      orderTakenHandler
    );
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
  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={modalCtx.hideModal}>
        close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );
  return (
    <Modal onClose={modalCtx.hideModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isOrdering && cartCtx.totalAmount > 0 && (
        <Checkout onConfirm={submitOrderHandler} />
      )}
      {!isOrdering && modalActions}
      {isLoading && <Spinner />}
    </Modal>
  );
};

export default Cart;
