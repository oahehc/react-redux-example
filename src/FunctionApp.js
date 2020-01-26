import React, { useState, useEffect } from "react";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import { reducer, increment } from "./reduxModule";
import logo from "./logo.svg";
import "./App.css";

function logger(name, props, state) {
  const counter = (props && props.counter) || "";
  const comCounter = (state && state.comCounter) || "";

  console.log(`--- [React] ${name}`, {
    ReduxCounter: counter,
    ComponentCounter: comCounter
  });
}

function App(props) {
  const [comCounter, setComCounter] = useState(1);

  function handleClickIncrement() {
    logger("handleClickIncrement", props, { comCounter });
    setTimeout(() => {
      props.increment();
    }, 1000);
    setTimeout(() => {
      logger("setState", props, { comCounter });
      setComCounter(comCounter => comCounter + 1);
    }, 1000);
  }

  useEffect(() => {
    logger("mount effect", props, { comCounter });
  }, []);

  useEffect(() => {
    logger("update&mount effect", props, { comCounter });
  });

  const { counter } = props;
  logger("render", props, { comCounter });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <span>
            {counter} | {comCounter}
          </span>
          <div>
            <button onClick={handleClickIncrement}>➕</button>
          </div>
        </div>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};
const mapDispatchToProps = { increment };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
