import logo from "./logo.png";
import "./App.css";
// import BootstrapCss from "./components/BootstrapCss";
import "bootstrap/dist/css/bootstrap.min.css";
import ControlledCarousel from "./components/reactBootstrap/ControlledCarousel";
import Navbar from "./components/reactBootstrap/Navbar";

function App() {
  return (
    <>
      {/* <div className="container">
        <BootstrapCss></BootstrapCss>
      </div> */}
      <div>
        <Navbar></Navbar>
        <ControlledCarousel></ControlledCarousel>
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </>
  );
}

export default App;
