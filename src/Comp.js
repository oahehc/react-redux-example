import React, { useContext } from "react";
import { ReduxContext } from "./Provider";

export default function Comp() {
  const { counter, incrementAction } = useContext(ReduxContext);

  function handleIncreaseOne() {
    incrementAction(1);
  }
  function handleIncreaseTen() {
    incrementAction(10);
  }
  return (
    <div>
      <span>{counter}</span>
      <div>
        <button onClick={handleIncreaseOne}>+1</button>
        <button onClick={handleIncreaseTen}>+10</button>
      </div>
    </div>
  );
}
