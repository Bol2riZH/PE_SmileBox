import React from 'react';

import classes from './Smiledelete.module.css';
import Card from '../../UI/Card';
import Button from '../../UI/Button';

const SmileDelete = props => {
  return (
    <Card className={classes.delete}>
      <header>
        <h2>Suppression de smile</h2>
      </header>
      <p>Vraiment ??? 🤨</p>
      <div className={classes.buttons}>
        <Button onClick={props.onDeleteSmile}>Confirmer</Button>
        <Button className={classes.button} onClick={props.onClose}>
          Annuler
        </Button>
      </div>
    </Card>
  );
};

export default SmileDelete;
