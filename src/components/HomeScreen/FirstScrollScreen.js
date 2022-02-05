import Button from "react-bootstrap/Button";
import COLORS from "../../constants";
import FirstScrollScreenBackground from "../../images/homescreen_images/transparent_workshop.png";
import HalfLogo from "../../images/homescreen_images/dsgt-logo-half.png";
import React from "react";
import Row from "react-bootstrap/Row";

class FirstScrollScreen extends React.Component {
  render() {
    return (
      <div style={styles.mainContainer}>
        <div style={styles.wordsContainer}>
          {/* <Row style={styles.upperPadding}></Row> */}
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
            <p style={styles.subtitle}>
              Making data science accessible for all
            </p>
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

        <img style={styles.halfLogo} src={HalfLogo} />
      </div>
    );
  }
}

export default FirstScrollScreen;

// const navBarHeight = 80;
const firstScrollScreenHeight = () => {
  return 850;
  // return (1080 - navBarHeight).toString() + "px";
};

const styles = {
  wordsContainer: {
    marginTop: "-40px",
  },
  halfLogo: {
    float: "right",
  },
  upperPadding: {
    paddingTop: "100px",
  },
  bigTitle: {
    fontSize: "8em",
    textAlign: "left",
    display: "block",
    color: COLORS["black"],
    marginLeft: "100px",
    marginTop: "-20px",
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
  mainContainer: {
    backgroundImage: `url(${FirstScrollScreenBackground}`,
    backgroundSize: "cover",
    height: firstScrollScreenHeight(),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
