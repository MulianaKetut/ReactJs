import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import styles from "./Counter.module.css";

const CounterFn = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("1");

  const incrementValue = Number(incrementAmount) || 0;

  const increment = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const decrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const customIncrement10 = () => {
    dispatch({
      type: "SET_COUNTER",
      payload: state.counter + 10,
    });
  };

  const customIncrement = (x) => {
    dispatch({
      type: "SET_COUNTER",
      payload: state.counter + x,
    });
  };

  const customDecrement = (x) => {
    dispatch({
      type: "SET_COUNTER",
      payload: state.counter - x,
    });
  };

  const resetCounter = () => {
    dispatch({
      type: "SET_COUNTER",
      payload: 0,
    });
  };

  return (
    <div className="demo">
      <hr />
      <h1>Functional Component Counter</h1>
      <h1 id="counter">{state.counter}</h1>
      <div className={styles.row}>
        <button className={styles.button} id="decrement" onClick={decrement}>
          -
        </button>
        &nbsp;&nbsp;
        <button className={styles.button} id="increment" onClick={increment}>
          +
        </button>
        &nbsp;&nbsp;
        <button
          className={styles.button}
          id="decrement"
          onClick={customIncrement10}
        >
          +10
        </button>
        &nbsp;&nbsp;
        <button
          className={styles.button}
          id="decrement"
          onClick={() => customIncrement(25)}
        >
          +25
        </button>
        &nbsp;&nbsp;
        <button className={styles.button} id="reset" onClick={resetCounter}>
          Reset
        </button>
      </div>
      <div className={styles.row}>
        <label>Input : </label>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        &nbsp;&nbsp;
        <button
          className={styles.button}
          id="decrement"
          onClick={() => customDecrement(incrementValue)}
        >
          - {incrementValue}
        </button>
        &nbsp;&nbsp;
        <button
          className={styles.button}
          id="increment"
          onClick={() => customIncrement(incrementValue)}
        >
          + {incrementValue}
        </button>
      </div>
    </div>
  );
};

export default CounterFn;
