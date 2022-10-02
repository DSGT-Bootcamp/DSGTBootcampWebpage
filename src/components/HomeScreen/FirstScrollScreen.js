import Button from "react-bootstrap/Button";
import COLORS from "../../constants";
import FirstScrollScreenBackground from "../../images/homescreen_images/transparent_workshop.png";
import HalfLogo from "../../images/homescreen_images/dsgt-logo-half.png";
import React from "react";
import Row from "react-bootstrap/Row";

const FirstScrollScreen = () => {
  const [hovering, setHovering] = React.useState(false);

  if (hovering) {
    styles.applyNowBtn = styles.applyNowBtnHovering;
  } else {
    styles.applyNowBtn = styles.applyNowBtnNonHovering;
  }

  return (
    <div style={styles.mainContainer}>
      <div style={styles.wordsContainer}>
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
            window.open("https://docs.google.com/forms/d/e/1FAIpQLSdBHCZKidtq1GndKfnJjQEuXQYp0IrrpJZbqueGWq249Vy4vw/viewform");
          }}
          onMouseEnter={() => {
            setHovering(true);
          }}
          onMouseLeave={() => {
            setHovering(false);
          }}
        >
          Apply
        </Button>
      </div>

      <img style={styles.halfLogo} alt="DSGT logo" src={HalfLogo} />
    </div>
  );
};

export default FirstScrollScreen;

// const navBarHeight = 80;
const scrollScreenHeight = () => {
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
    height: scrollScreenHeight(),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  applyNowBtn: {},
  applyNowBtnNonHovering: {
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
  applyNowBtnHovering: {
    marginLeft: "100px",
    background: COLORS["primary_blue"],
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
