import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = (props) => {
  return (
    <div className="sweet-loading">
      <MoonLoader
        color={props.spinnerColor}
        loading={props.isLoading}
        css={override}
        size={40}
      />
    </div>
  );
};

export default Spinner;
