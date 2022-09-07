import React from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return <Card className={classes.modal}>{props.children}</Card>;
};

const portalElement = document.querySelector("#overlays");

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
