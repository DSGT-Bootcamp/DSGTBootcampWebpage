import COLORS from "../../constants";
import Logo from "../../images/dsgtlogo (1).png";
import NavLinkButton from "./NavLinkButton";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <div style={styles.navBar}>
      <Navbar
        collapseOnSelect
        expand="sm"
        variant="dark"
        class="container-fluid"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={styles.container}>
            <Nav>
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
