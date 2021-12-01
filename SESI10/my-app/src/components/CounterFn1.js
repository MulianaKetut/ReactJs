import { useSelector, useDispatch } from "react-redux";
import styles from "./Counter.module.css";
import { decrement, fetchData, increment, setCounter } from "../store/actions";

const CounterFn1 = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const incrementCounter = () => dispatch(increment());
  const decrementCounter = () => dispatch(decrement());
  const customCounter = (value=10) => dispatch(setCounter(10));
  const getData = () => dispatch(fetchData());

  return (
    <div className="demo">
      <hr />
      <h1>Functional Component Counter</h1>
      <h1 id="counter">{state.counter}</h1>
      <div className={styles.row}>
        <button
          className={styles.button}
          id="decrement"
          onClick={decrementCounter}
        >
          -
        </button>
        &nbsp;&nbsp;
        <button
          className={styles.button}
          id="increment"
          onClick={incrementCounter}
        >
          +
        </button>
        &nbsp;&nbsp;
        <button
          className={styles.button}
          id="decrement"
          onClick={customCounter}
        >
          +10
        </button>
        &nbsp;&nbsp;
        <button
          className={styles.button}
          id="decrement"
          onClick={() => customCounter(25)}
        >
          +25
        </button>
        &nbsp;&nbsp;
        <button className={styles.button} id="decrement" onClick={getData}>
          GET DATA
        </button>
      </div>
    </div>
  );
};

export default CounterFn1;
