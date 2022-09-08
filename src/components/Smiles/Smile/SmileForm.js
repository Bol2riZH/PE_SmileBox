import React, { useRef } from 'react';

import classes from './SmileForm.module.css';

import Button from '../../UI/Button';

const SmileForm = props => {
  const emojiInputRef = useRef();
  const nameInputRef = useRef();
  const opinionInputRef = useRef();

  const addNewSmileHandler = e => {
    e.preventDefault();
    const enteredEmoji = emojiInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredOpinion = opinionInputRef.current.value;

    props.onAddSmile(enteredEmoji, enteredName, enteredOpinion);
  };

  /*///////////////////////////////*/
  /*TODO: MAKE AN INPUT COMPONENTS*/
  /*//////////////////////////////*/

  return (
    <form className={classes.form} onSubmit={addNewSmileHandler}>
      <header>
        <h2>Ajout de smile</h2>
      </header>
      <section>
        <label htmlFor="emoji">Azy, mets ton emoji sourire :</label>
        <input
          id="emoji"
          type="text"
          placeholder="😀 😁 🙂 😊 😉️ 😚 😵 ‍💫 🤢 🤮 "
          ref={emojiInputRef}
        />

        <label htmlFor="name">C'est quoi le nom de ton smile ?</label>
        <input
          id="name"
          type="text"
          placeholder="Grand, petit, plein de dents ???"
          ref={nameInputRef}
        />

        <label htmlFor="description">Une petite description ? </label>
        <input
          id="description"
          type="text"
          placeholder="Pourri, à vomir, etc..."
          ref={opinionInputRef}
        />

        <Button type="submit">Confirmer</Button>
        <Button className={classes.button} onClick={props.onClose}>
          Annuler
        </Button>
      </section>
    </form>
  );
};

export default SmileForm;
