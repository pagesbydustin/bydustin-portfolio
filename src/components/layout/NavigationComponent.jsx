import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";

export default function NavigationComponent() {
  return (
    <Navbar
      fixed="top"
      key={"sm"}
      expand={"sm"}
      variant="dark"
      className="bg-dark mb-3"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="/logo.png" height={"50"} className="rounded-circle" />
          <span>{" - "}</span>By Dustin -{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
        >
          <Offcanvas.Header className="" closeButton>
            <Offcanvas.Title className="" id={`offcanvasNavbarLabel-expand-sm`}>
              Main Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="justify-content-end flex-grow-1 pe-3"
              defaultActiveKey={"home"}
            >
              <Nav.Link href="#home" key={"home"}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" key={"about"}>
                About
              </Nav.Link>
              <Nav.Link href="#skills" key={"skills"}>
                Skills
              </Nav.Link>
              <Nav.Link href="#experiance" key={"experiance"}>
                Experiance
              </Nav.Link>
              <Nav.Link href="#contact" key={"contact"}>
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
