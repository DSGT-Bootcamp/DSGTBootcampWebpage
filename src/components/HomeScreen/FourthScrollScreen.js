import COLORS from "../../constants";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ItemToTeach from "./ItemToTeach";
import React from "react";
import Row from "react-bootstrap/Row";
import FourthScrollTellMe from "./FourthScrollTellMe";

const FourthScrollScreen = (props) => {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.allContent}>
        <h2 style={styles.title}>Tell Me, DSGT</h2>
        <Row fluid>
          <Col md="auto" style={styles.pickColumn} onClick={() => {}}>
            What is Data Science?
          </Col>
          <Col md="auto" style={styles.pickColumn}>
            Significance
          </Col>
          <Col md="auto" style={styles.pickColumn}>
            Resources
          </Col>
        </Row>
        <FourthScrollTellMe/>
      </div>
    </div>
  );
};

export default FourthScrollScreen;

// const navBarHeight = 80;
const scrollScreenHeight = () => {
  return 850;
  // return (1080 - navBarHeight).toString() + "px";
};

const styles = {
  mainContainer: {
    backgroundColor: COLORS.home_background_fourth_scroll,
    backgroundSize: "cover",
    height: scrollScreenHeight(),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  allContent: {
    height: "80%",
    color: COLORS["primary_blue"],
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "3.5em",
    fontWeight: "700",
    color: COLORS.primary_blue,
  },
  pickColumn: {
    backgroundColor: COLORS.pickColumnNonSelected,
    height: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700",
    fontSize: "1.5em",
  },
  rowPick: {
    width: "100%",
  },
};
