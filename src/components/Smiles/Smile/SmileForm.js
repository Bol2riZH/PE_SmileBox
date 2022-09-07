import React from "react";

import classes from "./SmileForm.module.css";

import Button from "../../UI/Button";

const SmileForm = (props) => {
  return (
    <form className={classes.form}>
      <header>
        <h2>Ajout de smile</h2>
      </header>
      <section>
        <label htmlFor="avis">Azy, mets ton emoji sourire :</label>
        <input type="text" placeholder="😀 😁 🙂 😊 😉️ 😚 😵 ‍💫🤢 🤮 " />

        <label htmlFor="name">C'est quoi comme smile ?</label>
        <input type="text" placeholder="Grand, petit, plein de dents ???" />

        <label htmlFor="avis">Tu penses qu'il y a mieux ?</label>
        <input type="text" placeholder="Pourri, à vomir, etc..." />

        <Button>Confirmer</Button>
        <Button className={classes.button} onClick={props.onClose}>
          Annuler
        </Button>
      </section>
    </form>
  );
};

export default SmileForm;
