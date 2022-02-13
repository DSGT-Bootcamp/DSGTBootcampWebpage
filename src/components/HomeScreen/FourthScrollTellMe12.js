import COLORS from "../../constants";
import Col from "react-bootstrap/Col";
import React from "react";

const FourthScrollTellMe12 = (props) => {
  return (
    <div style={styles.mainContainer}>
      <img
        style={styles.ball}
        alt="Decorative data science"
        src={props.image}
      />
      <Col style={styles.details}>
        <div style={styles.text}>{props.text}</div>
        <hr style={styles.lineSpearator} />
      </Col>
    </div>
  );
};

export default FourthScrollTellMe12;

const styles = {
  mainContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    marginLeft: "50px",
  },
  ball: {
    height: "350px",
    width: "350px",
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
