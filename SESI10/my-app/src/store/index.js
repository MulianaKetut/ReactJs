import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  counter: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COUNTER":
      return { counter: action.payload };
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const enhancer = applyMiddleware(thunk)

const store = createStore(counter, enhancer);

export default store;
