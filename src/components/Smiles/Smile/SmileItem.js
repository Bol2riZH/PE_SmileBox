import React from "react";

import classes from "./SmileItem.module.css";
import Button from "../../UI/Button";

const SmileItem = (props) => {
  return (
    <li className={classes.item}>
      <div>
        <h2>{props.name}</h2>
        <span>{props.emoji}</span>
        <p>{props.description}</p>
      </div>
      <div className={classes.delete}>
        <Button className={classes.round}>Supprimer le smile... 😭</Button>
      </div>
    </li>
  );
};

export default SmileItem;