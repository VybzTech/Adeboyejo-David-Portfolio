import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

window.addEventListener("DOMContentLoaded", function (e) {
  ReactDOM.createRoot(document?.getElementById("root")).render(
    <React.Fragment>
      <App />
    </React.Fragment>
  );
});
