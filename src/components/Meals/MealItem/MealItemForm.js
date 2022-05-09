import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const inputAmountRef = useRef();
  const [isFormValid, setisFormValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setisFormValid(false);
      return;
    }
    setisFormValid(true);
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputAmountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!isFormValid && (
        <p className={classes.alert}>please enter a valid amount (1-5) !</p>
      )}
    </form>
  );
};

export default MealItemForm;
