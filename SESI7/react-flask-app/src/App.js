import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Profile from "./components/Profile";
import Profiles from "./components/Profiles";

function App() {
  const [placeholder, setPlaceholder] = useState("Hi");
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => {
        setPlaceholder(data.result);
      });
  }, []);

  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  const changePlaceholder = () => {
    const x = "Hello React!";
    setPlaceholder(x);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Flask says {placeholder}</p>
        <p>The current time is {currentTime}</p>
        <button onClick={changePlaceholder}>Change Hello</button>
        <Profile></Profile>
        <br />
        <Profiles></Profiles>
      </header>
    </div>
  );
}

export default App;
