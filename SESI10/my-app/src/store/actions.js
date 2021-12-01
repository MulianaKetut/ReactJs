export function increment() {
  return async (dispatch) => {
    dispatch({ type: "INCREMENT" });
  };
}

export function decrement() {
  return { type: "DECREMENT" };
}

export function setCounter(value) {
  return { type: "SET_COUNTER", data: value };
}

export function fetchData() {
  return async (dispatch) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();

    console.log(json);
    dispatch({ type: "FETCH_DATA" });
  };
}
