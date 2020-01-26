import React from "react";
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

class Comp extends React.Component {
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
    this.setState(({ comCounter }) => ({
      comCounter: comCounter + 1
    }));
  };

  render() {
    const { counter } = this.props;
    const { comCounter } = this.state;
    logger("render", this.props, this.state);
    return (
      <div>
        <h2>Class Component</h2>
        <span>
          {counter} | {comCounter}
        </span>
        <div>
          <button onClick={this.handleClickIncrement}>
            <span role="img" aria-label="increment">
              ➕
            </span>
          </button>
        </div>
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
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Comp);
const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
