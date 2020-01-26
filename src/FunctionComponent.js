import React, { useState, useEffect } from "react";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import { reducer, increment } from "./reduxModule";

function logger(name, props, state) {
  const counter = (props && props.counter) || "";
  const comCounter = (state && state.comCounter) || "";

  console.log(`--- [React] ${name}`, {
    ReduxCounter: counter,
    ComponentCounter: comCounter
  });
}

function Comp(props) {
  const [comCounter, setComCounter] = useState(1);

  function handleClickIncrement() {
    logger("handleClickIncrement", props, { comCounter });
    props.increment();
    setComCounter(comCounter => comCounter + 1);
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
    <div>
      <h2>Function Component</h2>
      <span>
        {counter} | {comCounter}
      </span>
      <div>
        <button onClick={handleClickIncrement}>
          <span role="img" aria-label="increment">
            ➕
          </span>
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};
const mapDispatchToProps = { increment };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Comp);
const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
