import COLORS from "../../constants";
import React from "react";
import SecondScrollScreenBackground from "../../images/homescreen_images/second_screen_background.png";

class SecondScrollScreen extends React.Component {
  render() {
    return (
      <div style={styles.mainContainer}>
        <div style={styles.wordsContainer}>
          <h2 style={styles.title}>Welcome</h2>
          <div style={styles.subtitle}>
            <p>
              Our club is a diverse community of data science students who are
              passionate about sharing our vision—data science with a focus on
              the community.
            </p>
            <br/>
            <p>
              We fully believe that we can make <b>impactful</b> strides in
              improving our society through real-world projects and workshops
              here at DSGT.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondScrollScreen;

// const navBarHeight = 80;
const firstScrollScreenHeight = () => {
  return 850;
  // return (1080 - navBarHeight).toString() + "px";
};

const styles = {
  mainContainer: {
    backgroundImage: `url(${SecondScrollScreenBackground}`,
    backgroundSize: "cover",
    height: firstScrollScreenHeight(),
    color: COLORS["primary_blue"],
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  wordsContainer: {
    paddingTop: "-50px",
    height: "430px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "6em",
    textAlign: "center",
    color: COLORS["primary_blue"],
  },
  subtitle: {
    fontSize: "1.5em",
    textAlign: "center",
    display: "block",
    color: COLORS["primary_blue"],
    width: "50%",
  },
};
