import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { Container, Navbar } from "react-bootstrap";
import PageQueue from "./pages/PageQueue";

function App() {
  return (
    <>
      <Navbar bg="info" variant="light" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <h3>React - Assignment 2 - 011</h3>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <PageQueue />
      </Container>
    </>
  );
}

export default App;
