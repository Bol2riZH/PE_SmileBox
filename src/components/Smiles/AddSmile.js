import React from "react";

import classes from "./AddSmile.module.css";
import Button from "../UI/Button";

const AddSmile = (props) => {
  return <Button className={classes.add}>Ajouter un 😁 !</Button>;
};

export default AddSmile;