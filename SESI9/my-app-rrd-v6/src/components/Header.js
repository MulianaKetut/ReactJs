import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavbarCom() {
  return (
    <>
      <Navbar bg="info">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="./logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
