import React from "react";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>React Meals</h1>
      <HeaderCartButton />
    </header>
  );
};

export default Header;
