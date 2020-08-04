import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

const target = document.querySelector(".compose-form__buttons");
if (!target) {
  console.error("cant fount target dom");
} else {
  const container = document.createElement("div");
  target.insertAdjacentElement("beforeend", container);
  ReactDOM.render(<App />, container);
}
