import logo from "./logo.svg";
import logo1 from "./logo1.svg";
import "./App.css";
import CounterFn from "./components/CounterFn";
import { decrement, increment, setCounter } from "./store/actions";
import { useDispatch } from "react-redux";
import CounterFn1 from "./components/CounterFn1";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo1} className="App-logo1" alt="logo" />
        <CounterFn />
        <CounterFn1 />
      </header>
    </div>
  );
}

export default App;
