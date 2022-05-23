import React, { useState } from "react";
import ModalContext from "./modal-context";
const ModalContextProvider = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const showModal = () => {
    setIsVisible(true);
  };
  const hideModal = () => {
    setIsVisible(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isVisible: isVisible,
        showModal: showModal,
        hideModal: hideModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
