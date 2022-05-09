import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_CART_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    const existingItem = state.items[existingItemIndex];
    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_CART_ITEM") {
    const elementToBeRemovedIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    const elementTobeRemoved = state.items[elementToBeRemovedIndex];
    const updatedTotalAmount = state.totalAmount - elementTobeRemoved.price;
    let updatedItems;
    if (elementTobeRemoved.amount === 1) {
      updatedItems = state.items.filter((item) => {
        return item.id !== action.id;
      });
    } else {
      updatedItems = [...state.items];
      updatedItems[elementToBeRemovedIndex] = {
        ...elementTobeRemoved,
        amount: elementTobeRemoved.amount - 1,
      };
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartSate, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD_CART_ITEM",
      item: item,
    });
  };
  const removeitemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_CART_ITEM",
      id: id,
    });
  };
  const cartContext = {
    items: cartSate.items,
    totalAmount: cartSate.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeitemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
