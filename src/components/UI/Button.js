import React from 'react';

import classes from './Button.module.css';

/*TODO: MAKE A CONFIRM / CANCEL BTN */

const Button = props => {
  return (
    <button
      type={props.type}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
