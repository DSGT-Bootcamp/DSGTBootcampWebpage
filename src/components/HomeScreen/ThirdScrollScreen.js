import COLORS from "../../constants";
import Container from "react-bootstrap/Container";
import ItemToTeach from "./ItemToTeach";
import React from "react";
import Row from "react-bootstrap/Row";
import ThirdScrollScreenBackground from "../../images/homescreen_images/third_screen_background.png";

import MLLogo from "../../images/homescreen_images/brain.png";
import NumpyLogo from "../../images/homescreen_images/numpy.png";
import PandasLogo from "../../images/homescreen_images/pandas.svg";
import PythonLogo from "../../images/homescreen_images/python.png";

const ThirdScrollScreen = () => {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.allContent}>
        <h2 style={styles.title}>We Teach</h2>
        <Container fluid style={styles.mainContent}>
          <Row>
            <ItemToTeach
              logo={itemsToTeach.python.logo}
              title={itemsToTeach.python.title}
              text={itemsToTeach.python.text}
            />
            <ItemToTeach
              logo={itemsToTeach.pandas.logo}
              title={itemsToTeach.pandas.title}
              text={itemsToTeach.pandas.text}
            />
          </Row>
          <Row>
            <ItemToTeach
              logo={itemsToTeach.numpy.logo}
              title={itemsToTeach.numpy.title}
              text={itemsToTeach.numpy.text}
            />
            <ItemToTeach
              logo={itemsToTeach.ml.logo}
              title={itemsToTeach.ml.title}
              text={itemsToTeach.ml.text}
            />
          </Row>
        </Container>
        <p style={styles.ending}>and more data science tools...</p>
      </div>
    </div>
  );
};

export default ThirdScrollScreen;

// const navBarHeight = 80;
const scrollScreenHeight = () => {
  return 850;
  // return (1080 - navBarHeight).toString() + "px";
};



const itemsToTeach = {
  python: {
    logo: PythonLogo,
    title: "Python",
    text: "The simple yet powerful programming language with many appplications in data science and analysis. Gentle for beginners with infinite     functions thanks to libraries contibuted by developers over the decades.",
  },
  pandas: {
    logo: PandasLogo,
    title: "Pandas",
    text: "Pandas is a tool that helps to explore large datasets with the help of a structure called a DataFrame. Simple, yet powerful and widely used in the data science community.",
  },
  numpy: {
    logo: NumpyLogo,
    title: "NumPy",
    text: "A library for the Python, adding support for large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions to operate on these arrays.",
  },
  ml: {
    logo: MLLogo,
    title: "Machine Learning",
    text: "A part of artificial intelligence (AI), it is the study of computer algorithms that can improve automatically through experience and by the use of data. ML builds on training data to make predictions without being programmed to.",
  },
};

const styles = {
  mainContainer: {
    backgroundImage: `url(${ThirdScrollScreenBackground})`,
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
  mainContent: {
    height: "55%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ending: {
    fontSize: "2em",
    fontWeight: "700",
    color: COLORS.primary_blue,
  },
};
