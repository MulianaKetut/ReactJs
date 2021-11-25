// import { createStore } from "redux";

const { createStore } = require("redux");

const initialStore = {
  counter: 0,
};

// Reducer
const counter = (state = initialStore, action) => {
  console.log("Action => ", action);
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

// Create store here
const store = createStore(counter);

// Get state from store
// store.subscribe(() => {
//   console.log("Get State  => ", store.getState());
// });

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "SET_COUNTER", payload: 69 });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "INCREMENT" });
