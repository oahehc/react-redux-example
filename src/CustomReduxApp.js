import React, { useState, useReducer, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";

const ReduxContext = React.createContext();

function logger(name, props, state) {
  const counter = (props && props.counter) || "";
  const comCounter = (state && state.comCounter) || "";

  console.log(`--- [React] ${name}`, {
    ReduxCounter: counter,
    ComponentCounter: comCounter
  });
}

function App() {
  const { counter, increment } = useContext(ReduxContext);
  const [comCounter, setComCounter] = useState(1);

  function handleClickIncrement() {
    logger("handleClickIncrement", { counter }, { comCounter });
    increment();
    setTimeout(() => {
      logger("setState", { counter }, { comCounter });
      setComCounter(comCounter => comCounter + 1);
    }, 1000);
  }

  logger("render", { counter }, { comCounter });
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
    <App />
  </ReduxProvider>
);
