const INCREMENT = "redux/increment";
const DECREMENT = "redux/decrement";

const initial = {
  counter: 1
};

export const reducer = (state = initial, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

export const increment = () => {
  return {
    type: INCREMENT
  };
};
export const decrement = () => {
  return {
    type: DECREMENT
  };
};
