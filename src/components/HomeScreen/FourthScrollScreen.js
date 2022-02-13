import COLORS from "../../constants";
import Col from "react-bootstrap/Col";
import FourthScrollTellMe12 from "./FourthScrollTellMe12";
import FourthScrollTellMe3 from "./FourthScrollTellMe3";
import React from "react";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";

import FirstBall from "../../images/homescreen_images/fourthScrollFirstBall.png";
import SecondBall from "../../images/homescreen_images/fourthScrollSecondBall.png";

const FourthScrollScreen = (props) => {
  const [chosen, setChosen] = React.useState(0);
  let content = null;

  if (chosen === 0) {
    content = (
      <FourthScrollTellMe12
        image={tellMeItems.what_is_ds.image}
        text={tellMeItems.what_is_ds.text}
      />
    );
  } else if (chosen === 1) {
    content = (
      <FourthScrollTellMe12
        image={tellMeItems.significance.image}
        text={tellMeItems.significance.text}
      />
    );
  } else {
    content = <FourthScrollTellMe3 />;
  }

  return (
    <div style={styles.mainContainer}>
      <div style={styles.allContent}>
        <h2 style={styles.title}>Tell Me, DSGT</h2>
        <Row fluid>
          <Col
            md="auto"
            style={styles.pickColumn}
            onClick={() => {
              setChosen(0);
            }}
          >
            <PickButton index={0} chosen={chosen} />
          </Col>
          <Col
            md="auto"
            style={styles.pickColumn}
            onClick={() => {
              setChosen(1);
            }}
          >
            <PickButton index={1} chosen={chosen} />
          </Col>
          <Col
            md="auto"
            style={styles.pickColumn}
            onClick={() => {
              setChosen(2);
            }}
          >
            <PickButton index={2} chosen={chosen} />
          </Col>
        </Row>
        {content}
      </div>
    </div>
  );
};

const PickButton = (props) => {
  const [hovering, setHovering] = React.useState(false);
  const buttonText = ["What is Data Science?", "Significance", "Resources"];
  let currentStyle;

  if (hovering) {
    currentStyle = styles.pickButtonHovering;
  } else if (!hovering && props.chosen === props.index) {
    currentStyle = styles.pickButtonSelected;
  } else {
    currentStyle = styles.pickButtonNonHovering;
  }

  return (
    <Button
      style={currentStyle}
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      {buttonText[props.index]}
    </Button>
  );
};

export default FourthScrollScreen;

const tellMeItems = {
  what_is_ds: {
    image: FirstBall,
    text: (
      <p>
        <b>Data science</b> is a multifaceted approach of taking raw data and
        applying various analytical and machine learning techniques to extract
        patterns from the large quantities of datasets.
      </p>
    ),
  },
  significance: {
    image: SecondBall,
    text: (
      <p>
        <b>Data science</b> brings together areas of computer programming,
        statistics, and intelligence to uncover helpful insights for
        organizations. The value of data is increasing because these hidden
        observations remove the risk factor for companies by detaching
        uncertainties.
      </p>
    ),
  },
};

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
    paddingBottom: "0",
  },
  allContent: {
    height: "80%",
    color: COLORS["primary_blue"],
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontSize: "3.5em",
    fontWeight: "700",
    color: COLORS.primary_blue,
  },
  pickColumn: {
    backgroundColor: COLORS.pickColumnNonSelected,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700",
    fontSize: "2em",
    padding: "0",
  },
  rowPick: {
    width: "100%",
  },
  pickButtonNonHovering: {
    width: "100%",
    height: "100%",
    fontWeight: "700",
    fontSize: "1em",
    color: COLORS.black,
    borderWidth: "0",
    paddingInline: "20px",
    backgroundColor: COLORS.pickColumnNonHovering,
  },
  pickButtonHovering: {
    width: "100%",
    height: "100%",
    fontWeight: "700",
    fontSize: "1em",
    color: COLORS.black,
    borderWidth: "0",
    paddingInline: "20px",
    backgroundColor: COLORS.pickColumnHovering,
  },
  pickButtonSelected: {
    width: "100%",
    height: "100%",
    fontWeight: "700",
    fontSize: "1em",
    color: COLORS.black,
    borderWidth: "0",
    paddingInline: "20px",
    backgroundColor: COLORS.pickColumnSelected,
  },
};
