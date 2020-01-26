import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import Container from "./Container";
import { reducer } from "./reduxModule";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Container />
    </App>
  </Provider>,
  document.getElementById("root")
);
