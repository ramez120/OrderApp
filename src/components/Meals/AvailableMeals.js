import React from "react";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import { DUMMY_MEALS } from "./DummyMeals";

import classes from "./AvailableMeals.module.css";
const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        name={meal.name}
        price={meal.price}
        description={meal.description}
        id={meal.id}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
