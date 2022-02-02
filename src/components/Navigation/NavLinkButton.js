import COLORS from "../../constants";
import { Nav } from "react-bootstrap";
import { useState } from "react";

const NavLinkButton = (props) => {
  const [hovering, setHovering] = useState(false);

  // src: https://stackoverflow.com/a/33000431/11031425
  if (hovering) {
    styles.navBar_link_current = styles.navBar_link_hover;
  } else {
    styles.navBar_link_current = styles.navBar_link_normal;
  }

  return (
    <Nav.Link
      href={props.url_extension}
      style={styles.navBar_link_current}
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      {props.children}
    </Nav.Link>
  );
};

const styles = {
  navBar_link_current: {
    // default is navBar_link_normal
  },
  navBar_link_normal: {
    fontSize: 30,
    color: "white",
  },
  navBar_link_hover: {
    fontSize: 30,
    color: COLORS["gray_font_transparent"],
  },
};

export default NavLinkButton;
