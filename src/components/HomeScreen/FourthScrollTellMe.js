import COLORS from "../../constants";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ItemToTeach from "./ItemToTeach";
import React from "react";
import Row from "react-bootstrap/Row";
import FirstBall from "../../images/homescreen_images/fourthScrollFirstBall.png";

const FourthScrollTellMe = (props) => {
  return (
    <div style={styles.mainContainer}>
      <img style={styles.ball} src={FirstBall} />
      <Col>
        <p style={styles.text}>
          <b>Data science</b> is a multifaceted approach of taking raw data and
          applying various analytical and machine learning techniques to extract
          patterns from the large quantities of datasets.
        </p>
        <hr style={styles.lineSpearator} />
      </Col>
    </div>
  );
};

export default FourthScrollTellMe;

// const navBarHeight = 80;
const scrollScreenHeight = () => {
  return 850;
  // return (1080 - navBarHeight).toString() + "px";
};

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ball: {
    height: "250px",
    width: "250px",
  },
  lineSpearator: {
    color: COLORS.primary_green,
    borderWidth: "3px",
    width: "50%",
    marginLeft: "0",
  },
  text: {
    fontSize: "2em",
    color: COLORS.primary_blue,
  },
};
