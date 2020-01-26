const INCREMENT = "redux/increment";

export function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.amount;
    default:
      return state;
  }
}

export function incrementActionCreator(dispatch) {
  return amount => {
    dispatch({
      type: INCREMENT,
      amount
    });
  };
}
