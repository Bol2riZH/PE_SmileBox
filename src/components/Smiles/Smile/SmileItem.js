import React from 'react';

import classes from './SmileItem.module.css';
import Button from '../../UI/Button';

const SmileItem = props => {
  const deleteHandler = () => {
    console.log(props.onDeleteConfirmation(props.id));
  };

  return (
    <li className={classes.item}>
      <div className={classes.smile}>
        <h2>{props.name}</h2>
        <span>{props.emoji}</span>
        <p>{props.description}</p>
      </div>
      <div className={classes.delete}>
        <Button className={classes.button} onClick={deleteHandler}>
          Supprimer le smile... 😭
        </Button>
      </div>
    </li>
  );
};

export default SmileItem;
