// import logo from './logo.svg';
import "./App.css";
import logo from './logo.png'
import Clock from "./components/statefull/Clock";
// import FetchData from "./components/statefull/FetchData";
import Clock1 from "./components/stateless/Clock";
// import FetchData1 from "./components/stateless/FetchData";
// import FetchDataAxios from "./components/stateless/FetchDataAxios";

function App() {
  return (
    <div className="App App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <hr />
      <Clock></Clock>
      <Clock1></Clock1>
      <hr />
      {/* <FetchData></FetchData> */}
      {/* <hr /> */}
      {/* <FetchData1></FetchData1> */}
      {/* <hr /> */}
      {/* <FetchDataAxios></FetchDataAxios> */}
    </div>
  );
}

export default App;
