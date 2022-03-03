import COLORS from "../../constants";
import Logo from "../../images/logos/dsgt-logo-light.png";
import NavLinkButton from "./NavLinkButton";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <div style={styles.navBarPlaceholder}>
      <Navbar
        collapseOnSelect
        expand="lg"
        class="container-fluid"
        fixed="top"
        variant="dark"
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
            <Nav navbarScroll>
              <Nav.Item style={styles.navBarItem}>
                <NavLinkButton url_extension="/">Home</NavLinkButton>
              </Nav.Item>
              <Nav.Item style={styles.navBarItem}>
                <NavLinkButton url_extension="/schedule">
                  Schedule
                </NavLinkButton>
              </Nav.Item>
              <Nav.Item style={styles.navBarItem}>
                <NavLinkButton url_extension="/mentors">Mentors</NavLinkButton>
              </Nav.Item>
              <Nav.Item style={styles.navBarItem}>
                <NavLinkButton url_extension="/resources">
                  Resources
                </NavLinkButton>
              </Nav.Item>
              <Nav.Item style={styles.navBarItem}>
                <NavLinkButton url_extension="/options">
                  Bootcamp Options
                </NavLinkButton>
              </Nav.Item>
              <Nav.Item style={styles.navBarItem}>
                <NavLinkButton url_extension="/about">About</NavLinkButton>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

const navBarHeight = "80px";

const styles = {
  navBarPlaceholder: {
    height: navBarHeight,
  },
  navBar: {
    background: COLORS["primary_blue"],
    height: navBarHeight,
  },
  navBarItem: {
    marginInline: "25px",
    background: COLORS["primary_blue"],
  },
  container: {
    lineHeight: "50px",
  },
};

export default Navigation;
