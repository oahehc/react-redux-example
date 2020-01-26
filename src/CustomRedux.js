import React, { useState, useReducer, useContext } from "react";

const ReduxContext = React.createContext();

function logger(name, props, state) {
  const counter = (props && props.counter) || "";
  const comCounter = (state && state.comCounter) || "";

  console.log(`--- [React] ${name}`, {
    ReduxCounter: counter,
    ComponentCounter: comCounter
  });
}

function Comp() {
  const { counter, increment } = useContext(ReduxContext);
  const [comCounter, setComCounter] = useState(1);

  function handleClickIncrement() {
    logger("handleClickIncrement", { counter }, { comCounter });
    increment();
    setComCounter(comCounter => comCounter + 1);
  }

  logger("render", { counter }, { comCounter });
  return (
    <div>
      <h2>Redux by Hooks</h2>
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

const INCREMENT = "redux/increment";
const initialState = 1;
function reducer(state, action) {
  console.log("----- [Redux]", action, state);
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      throw new Error();
  }
}
function ReduxProvider({ children }) {
  const [counter, dispatch] = useReducer(reducer, initialState);

  function increment() {
    dispatch({
      type: INCREMENT
    });
  }

  return (
    <ReduxContext.Provider value={{ counter, increment }}>
      {children}
    </ReduxContext.Provider>
  );
}

export default () => (
  <ReduxProvider>
    <Comp />
  </ReduxProvider>
);
