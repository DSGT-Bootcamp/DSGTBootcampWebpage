import COLORS from "../../constants";
import Logo from "../../images/dsgtlogo (1).png";
import NavLinkButton from "./NavLinkButton";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <div style={styles.navBarPlaceholder}>
      <Navbar
        collapseOnSelect
        expand="sm"
        class="container-fluid"
        fixed="top"
        style={styles.navBar}
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              alt="dsgt logo"
              width="69"
              height="69"
              display="flex"
              lineheight="69"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={styles.container}>
            <Nav
              className="me-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Item className="ml-auto">
                <NavLinkButton url_extension="/">Home</NavLinkButton>
              </Nav.Item>
              <Nav.Item className="ml-auto">
                <NavLinkButton url_extension="/schedule">
                  Schedule
                </NavLinkButton>
              </Nav.Item>
              <Nav.Item className="ml-auto">
                <NavLinkButton url_extension="/mentors">Mentors</NavLinkButton>
              </Nav.Item>
              <Nav.Item className="ml-auto">
                <NavLinkButton url_extension="/resources">
                  Resources
                </NavLinkButton>
              </Nav.Item>
              <Nav.Item className="ml-auto">
                <NavLinkButton url_extension="/options">
                  Bootcamp Options
                </NavLinkButton>
              </Nav.Item>
              <Nav.Item className="ml-auto">
                <NavLinkButton url_extension="/about">About</NavLinkButton>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

const styles = {
  navBarPlaceholder: {
    height: "80px",
  },
  navBar: {
    background: COLORS["primary_blue"],
    width: "100%",
    height: "80px",
  },
  container: {
    lineHeight: "50px",
  },
};

export default Navigation;
