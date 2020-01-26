import React from "react";
import { connect } from "react-redux";
import { increment } from "./reduxModule";
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comCounter: 1
    };
    logger("constructor", props, this.state);
  }

  static getDerivedStateFromProps(props, state) {
    logger("getDerivedStateFromProps", props, state);
    return {};
  }

  componentDidMount() {
    logger("componentDidMount", this.props, this.state);
  }

  shouldComponentUpdate(nextProps, nextState) {
    logger("shouldComponentUpdate-this", this.props, this.state);
    logger("shouldComponentUpdate-next", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    logger("getSnapshotBeforeUpdate-prev", prevProps, prevState);
    logger("getSnapshotBeforeUpdate-this", this.props, this.state);
    return {};
  }

  componentDidUpdate(prevProps, prevState) {
    logger("componentDidUpdate-prev", prevProps, prevState);
    logger("componentDidUpdate-this", this.props, this.state);
  }

  handleClickIncrement = () => {
    logger("handleClickIncrement", this.props, this.state);
    this.props.increment();
    setTimeout(() => {
      logger("setState", this.props, this.state);
      this.setState(({ comCounter }) => ({
        comCounter: comCounter + 1
      }));
    }, 1000);
  };

  render() {
    const { counter } = this.props;
    const { comCounter } = this.state;
    logger("render", this.props, this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <span>
              {counter} | {comCounter}
            </span>
            <div>
              <button onClick={this.handleClickIncrement}>increment</button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};
const mapDispatchToProps = { increment };

export default connect(mapStateToProps, mapDispatchToProps)(App);
