// import logo from './logo.svg';
import "./App.css";
import Clock from "./components/statefull/Clock";
import FetchData from "./components/statefull/FetchData";
import Clock1 from "./components/stateless/Clock";
import FetchData1 from "./components/stateless/FetchData";

function App() {
  return (
    <div className="App">
      <Clock></Clock>
      <Clock1></Clock1>
      <hr />
      <FetchData></FetchData>
      <hr />
      <FetchData1></FetchData1>
    </div>
  );
}

export default App;
