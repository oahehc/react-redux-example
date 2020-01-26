import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import CustomRedux from "./CustomRedux";
import "./index.css";

ReactDOM.render(
  <App>
    <ClassComponent />
    <FunctionComponent />
    <CustomRedux />
  </App>,
  document.getElementById("root")
);
