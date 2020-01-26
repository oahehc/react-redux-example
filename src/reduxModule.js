const INCREMENT = "redux/increment";

const initial = {
  counter: 1
};

export const reducer = (state = initial, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + action.amount
      };
    default:
      return state;
  }
};

export const incrementAction = amount => {
  return {
    type: INCREMENT,
    amount
  };
};
