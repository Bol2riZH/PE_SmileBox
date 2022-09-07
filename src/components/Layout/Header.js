import React from "react";

import classes from "./Header.module.css";

import Button from "../UI/Button";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>Programme d'entrainement</h1>
      <Button>Voir le panier de 😁</Button>
    </header>
  );
};

export default Header;
