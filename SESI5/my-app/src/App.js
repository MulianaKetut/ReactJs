// import logo from "./logo.svg";
import "./App.css";
import { Counter, Example, Example1 } from "./components/Counter";

function App() {
  return (
    <>
      <div className="container">
        <Header></Header>
        <hr />
        <Content></Content>
        <hr />
        <Footer></Footer>
      </div>
      <div>
        <Counter></Counter>
      </div>
      <div>
        <Example initialCount={0}></Example>
      </div>
      <div>
        <Example1></Example1>
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <header className="header">
        <h1>My first React App</h1>
      </header>
    </>
  );
}
function Content() {
  return (
    <>
      <div className="content">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos odio
          illo similique ad, enim soluta quod illum quidem ea consectetur saepe
          sint deserunt. Sed autem totam, eligendi veniam esse ut.
        </p>
      </div>
    </>
  );
}
function Footer() {
  return (
    <div className="footer">
      <p>&copy; My App - 2021</p>
    </div>
  );
}

export default App;
