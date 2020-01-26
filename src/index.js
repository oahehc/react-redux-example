import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Provider from "./Provider";
import Comp from "./Comp";

ReactDOM.render(
  <App>
    <Provider>
      <Comp />
    </Provider>
  </App>,
  document.getElementById("root")
);
