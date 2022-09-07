import React from "react";
import ReactDOM, { createPortal } from "react-dom";

import classes from "./Modal.module.css";

import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header>
        <h2>^^ Ajout de smile ^^</h2>
      </header>
      <form>
        <p>Formulaire temp</p>
        <input type="text" />
      </form>
      <Button>Confirmer</Button>
    </Card>
  );
};

const portalElement = document.querySelector("#overlays");

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(<ModalOverlay />, portalElement)}
    </>
  );
};

export default Modal;
