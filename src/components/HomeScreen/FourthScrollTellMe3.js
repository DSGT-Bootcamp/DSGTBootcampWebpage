import COLORS from "../../constants";
import KaggleLogo from "../../images/homescreen_images/kaggle.png";
import PythonLogo from "../../images/homescreen_images/python.png";
import React from "react";

const ResourceItem = (props) => {
  return (
    <div style={styles.resourceItem}>
      <img style={styles.image} src={props.image} />
      <hr style={styles.lineSpearator} />
      <p style={styles.text}>{props.text}</p>
    </div>
  );
};

const FourthScrollTellMe3 = (props) => {
  return (
    <div style={styles.mainContainer}>
      <ResourceItem
        image={resourceItems.kaggle.image}
        text={resourceItems.kaggle.text}
      />
      <div style={{ paddingLeft: "10%" }}></div>
      <ResourceItem
        image={resourceItems.python.image}
        text={resourceItems.python.text}
      />
    </div>
  );
};

export default FourthScrollTellMe3;

const resourceItems = {
  kaggle: {
    image: KaggleLogo,
    text: "Kaggle allows users to find and publish data sets, explore and build models in a web-based data-science environment, work with other data scientists and machine learning engineers, and enter competitions to solve data science challenges.",
  },
  python: {
    image: PythonLogo,
    text: "Python—the simple yet powerful programming language with many appplications in data science and analysis. Gentle for beginners with infinite functions thanks to libraries contibuted by developers over the decades.",
  },
};

const styles = {
  mainContainer: {
    width: "60%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: "20px",
  },
  image: {
    height: "100px",
  },
  lineSpearator: {
    color: COLORS.primary_green,
    borderWidth: "3px",
    width: "50%",
    marginLeft: "0",
  },
  text: {
    width: "100%",
    fontSize: "1.2em",
    color: COLORS.primary_blue_50,
  },
};
