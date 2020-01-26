const INCREMENT = "redux/increment";

const initial = {
  counter: 1
};

export const reducer = (state = initial, action) => {
  console.log("----- [Redux]", action, state);
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1
      };
    default:
      return state;
  }
};

export const increment = () => {
  console.log("----- [Redux] dispatch action");
  return {
    type: INCREMENT
  };
};
