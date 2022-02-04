import React from "react";
import FirstScrollScreenBackground from "../../images/workshop_and_logo_2.png";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import COLORS from "../../constants";
import Button from "react-bootstrap/Button";

class FirstScrollScreen extends React.Component {
  render() {
    return (
      <div style={styles.mainStyle}>
        <Row style={styles.upperPadding}></Row>
        <Row>
          <h1 style={styles.bigTitle}>Data Science</h1>
        </Row>
        <Row>
          <h1 style={styles.bigTitle}>At Georgia Tech</h1>
        </Row>
        <Row>
          <h1 style={styles.bigTitle}>Bootcamp</h1>
        </Row>
        <Row>
          <p style={styles.subtitle}>Making data science accessible for all</p>
        </Row>
        <Button
          style={styles.applyNowBtn}
          onClick={() => {
            window.open("http://apply.datasciencegt.org/");
          }}
        >
          Apply
        </Button>
      </div>
    );
  }
}

export default FirstScrollScreen;

const navBarHeight = 80;
const firstScrollScreenHeight = () => {
  return (1080 - navBarHeight).toString() + "px";
};

const styles = {
  upperPadding: {
    paddingTop: "100px",
  },
  bigTitle: {
    fontSize: "8em",
    textAlign: "left",
    display: "block",
    color: COLORS["black"],
    marginLeft: "100px",
    marginTop: "-20px"
  },
  subtitle: {
    fontSize: "2em",
    textAlign: "left",
    display: "block",
    color: COLORS["primary_blue_50"],
    marginLeft: "110px",
    marginTop: "0px",
    fontWeight: "650",
    fontStyle: "italic",
  },
  mainStyle: {
    backgroundImage: `url(${FirstScrollScreenBackground}`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: firstScrollScreenHeight(),
    alignItems: "center",
  },
  applyNowBtn: {
    marginLeft: "100px",
    background: COLORS["primary_blue_70"],
    color: COLORS["white"],
    fontSize: "1.7em",
    borderRadius: "50px",
    border: "0px",
    marginTop: "10px",
    width: "250px",
    height: "60px",
    fontWeight: "500",
  },
};
