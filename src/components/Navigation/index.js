import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../images/dsgtlogo (1).png";
import COLORS from "../../constants";
import NavLinkButton from "./NavLinkButton";

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
              <Nav.Item className="ml-auto">
                <img
                  src={Logo}
                  alt="dsgt logo"
                  width="69"
                  height="69"
                  display="flex"
                  lineheight="69"
                />
              </Nav.Item>
              <Nav.Item className="ml-auto">
                <NavLinkButton url_extension="/">Home</NavLinkButton>
              </Nav.Item>
              <Nav.Item className="ml-auto">
                <NavLinkButton url_extension="/about">About</NavLinkButton>
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
    position: "sticky",
  },
  container: {
    display: "flex",
    alignItems: "center",
    lineHeight: "50px",
  },
};

export default Navigation;
