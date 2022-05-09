import React from "react";
import ReactDom from "react-dom";
import Backdrop from "./ModalItems/Backdrop";
import ModalOverlay from "./ModalItems/ModalOverlay";
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
