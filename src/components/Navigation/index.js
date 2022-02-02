import COLORS from "../../constants";
import Logo from "../../images/dsgtlogo (1).png";
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

const styles = {
  navBarPlaceholder: {
    height: "80px",
  },
  navBar: {
    background: COLORS["primary_blue"],
    width: "100%",
    height: "80px",
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
