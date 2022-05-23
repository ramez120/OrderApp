import { useContext } from "react";
import ModalContext from "../../store/modal-context";
import useInput from "../../hooks/use-input";
import { isInputNotEmpty } from "../../utils/validations";
import classes from "./Checkout.module.css";
import FormInput from "../UI/FormInput";

const Checkout = (props) => {
  const modalCtx = useContext(ModalContext);

  const {
    enteredInput: enteredName,
    isValid: isNameValid,
    inputHasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isInputNotEmpty);
  const {
    enteredInput: enteredStreet,
    isValid: isStreetValid,
    inputHasError: streetHasError,
    inputChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreet,
  } = useInput(isInputNotEmpty);
  const {
    enteredInput: enteredPostal,
    isValid: isPortalValid,
    inputHasError: portalHasError,
    inputChangeHandler: portalChangeHandler,
    inputBlurHandler: portalBlurHandler,
    reset: resetPortal,
  } = useInput(isInputNotEmpty);
  const {
    enteredInput: enteredCity,
    isValid: isCityValid,
    inputHasError: cityHasError,
    inputChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput(isInputNotEmpty);

  const confirmHandler = (event) => {
    event.preventDefault();
    const isFormValid =
      isNameValid && isStreetValid && isPortalValid && isCityValid;
    if (!isFormValid) return;
    const enteredUserData = {
      name: enteredName,
      steet: enteredStreet,
      postalCode: enteredPostal,
      city: enteredCity,
    };
    props.onConfirm(enteredUserData);
    resetName();
    resetStreet();
    resetPortal();
    resetCity();
  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <FormInput
        id="name"
        type="text"
        label="Name"
        hasError={nameHasError}
        inputChangeHandler={nameChangeHandler}
        inputBlurHandler={nameBlurHandler}
        value={enteredName}
      />
      <FormInput
        id="street"
        type="text"
        label="Street"
        hasError={streetHasError}
        inputChangeHandler={streetChangeHandler}
        inputBlurHandler={streetBlurHandler}
        value={enteredStreet}
      />
      <FormInput
        id="portal"
        type="text"
        label="Portal"
        hasError={portalHasError}
        inputChangeHandler={portalChangeHandler}
        inputBlurHandler={portalBlurHandler}
        value={enteredPostal}
      />
      <FormInput
        id="city"
        type="text"
        label="city"
        hasError={cityHasError}
        inputChangeHandler={cityChangeHandler}
        inputBlurHandler={cityBlurHandler}
        value={enteredCity}
      />

      <div className={classes.actions}>
        <button type="button" onClick={modalCtx.hideModal}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
