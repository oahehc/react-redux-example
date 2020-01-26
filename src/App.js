import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./reduxModule";
import logo from "./logo.svg";
import "./App.css";

function App({ counter, increment, decrement }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <span>{counter}</span>
          <div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
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
const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(App);
