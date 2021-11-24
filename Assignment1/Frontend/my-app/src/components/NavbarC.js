import { Container, Navbar } from "react-bootstrap";

export default function NavbarC() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://placeimg.com/100/100/tech"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React - Assignment 1
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
