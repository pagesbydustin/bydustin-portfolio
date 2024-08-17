import { useState } from "react";
import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";

export default function NavigationComponent() {
  const [activeEventKeyName, setActiveEventKeyName] = useState("home");

  function registerLinkClicked(input) {
    setActiveEventKeyName(input);
  }

  console.info(activeEventKeyName);
  return (
    <Navbar fixed="top" expand={"sm"} variant="dark" className="bg-dark mb-3">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="/logo.png" height={"50"} className="rounded-circle" />
          <span>{" - "}</span>By Dustin -{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              Main Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              activeKey={activeEventKeyName}
              className="justify-content-end flex-grow-1 pe-3"
            >
              <Nav.Link
                href="#home"
                eventKey={"home"}
                onClick={() => registerLinkClicked("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                eventKey={"about"}
                onClick={() => registerLinkClicked("about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#skills"
                eventKey={"skills"}
                onClick={() => registerLinkClicked("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link href="#experiance" key={"experiance"}>
                Experiance
              </Nav.Link>
              <Nav.Link
                href="#contact"
                eventKey={"contact"}
                onClick={() => registerLinkClicked("contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
