import React, { useEffect, useState } from "react";

import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import useHttp from "../../hooks/use-http";
import Spinner from "../UI/Spinner";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
  const { fetchData, isLoading, error } = useHttp();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMealsHandler = (meals) => {
      let updatedMeals = [];
      // firebase object to array conversion
      for (let meal in meals) {
        updatedMeals.push({
          id: meal,
          ...meals[meal],
        });
      }
      setMeals(updatedMeals);
    };
    fetchData(
      {
        url: "https://orderapp-bb52d-default-rtdb.firebaseio.com/meals.json",
        method: "GET",
      },
      fetchMealsHandler
    );
  }, [fetchData]);

  let renderedMeals = <p>Sorry, No meals currently</p>;

  if (isLoading && !error) {
    renderedMeals = <Spinner spinnerColor="#8a2b06" isLoading="true" />;
  }
  if (error) {
    renderedMeals = <p>Sorry, something went wrong !</p>;
  }
  if (!error && meals.length > 0) {
    renderedMeals = meals.map((meal) => {
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
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{renderedMeals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
