import React, { useReducer } from "react";
import { reducer, incrementActionCreator } from "./ReduxModule";

export const ReduxContext = React.createContext();
const initialState = 0;
function ReduxProvider({ children }) {
  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <ReduxContext.Provider
      value={{ counter, incrementAction: incrementActionCreator(dispatch) }}
    >
      {children}
    </ReduxContext.Provider>
  );
}

export default ReduxProvider;
