import logo from "./logo.svg";
import logo1 from "./logo1.svg";
import "./App.css";
import CounterFn from "./components/CounterFn";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo1} className="App-logo1" alt="logo" />
        <CounterFn />
      </header>
    </div>
  );
}

export default App;
