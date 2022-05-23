import { useReducer } from "react";
const inputReducer = (state, action) => {
  if (action.type === "INPUT_CHANGE") {
    return {
      enteredInput: action.payload,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      enteredInput: state.enteredInput,
      isTouched: true,
    };
  }
  if (action.type === "INPUT_RESET") {
    return {
      enteredInput: "",
      isTouched: false,
    };
  }

  return {
    enteredInput: "",
    isTouched: false,
  };
};
const useInput = (validateInputHandler) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    enteredInput: "",
    isTouched: false,
  });
  const isValid = validateInputHandler(inputState.enteredInput);
  const inputHasError = !isValid && inputState.isTouched;
  const inputChangeHandler = (event) => {
    dispatch({ type: "INPUT_CHANGE", payload: event.target.value });
  };
  const inputBlurHandler = (event) => {
    dispatch({ type: "INPUT_BLUR" });
  };
  const reset = () => {
    dispatch({ type: "INPUT_RESET" });
  };

  return {
    enteredInput: inputState.enteredInput,
    isValid,
    inputHasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
