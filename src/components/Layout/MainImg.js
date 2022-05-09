import React from "react";
import classes from "./MainImg.module.css";

import mealsImg from "../../assets/meals.jpg";

const MainImg = (props) => {
  return (
    <div className={classes["main-image"]}>
      <img src={mealsImg} alt="Meals" />
    </div>
  );
};

export default MainImg;
