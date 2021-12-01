import { Container, Navbar } from "react-bootstrap";

export default function NavbarC() {
  return (
    <>
      <Navbar className="shadow p-3 mb-5 bg-body rounded">
        <Container>
          <center>
            <Navbar.Brand href="/">React - Final Project - 011</Navbar.Brand>
          </center>
        </Container>
      </Navbar>
    </>
  );
}
