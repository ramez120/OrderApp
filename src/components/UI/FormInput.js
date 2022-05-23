import classes from "./FormInput.module.css";
const FormInput = (props) => {
  return (
    <div
      className={`${classes.control} ${props.hasError ? classes.invalid : ""}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        onChange={props.inputChangeHandler}
        onBlur={props.inputBlurHandler}
        value={props.value}
      />
    </div>
  );
};

export default FormInput;
