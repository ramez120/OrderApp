import ReactDOM from "react-dom/client";
import ModalProvider from "./store/ModalProvider";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModalProvider>
    <App />
  </ModalProvider>
);
