import React from "react";

const ModalContext = React.createContext({
  isVisible: false,
  showModal: () => {},
  hideModal: () => {},
});

export default ModalContext;
