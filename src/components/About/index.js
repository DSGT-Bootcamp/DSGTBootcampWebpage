import "react-slideshow-image/dist/styles.css";
import COLORS from "../../constants";
import PastProjects from "./PastProjects";
import React from "react";
import ThreePieCharts from "./ThreePieCharts";
import Gender from "./Gender";
import Locations from "./Locations";

const About = () => {
  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.title}>About</h1>
      <p style={styles.aboutText}>
        DSGT bootcamp is an immersive 11-week experience where you'll learn a
        variety of data science skills and work in teams to answer significant
        questions by analyzing data.
      </p>
      <hr style={styles.line} />
      <h2 style={styles.h2Titles}>
        Here are some sample projects from previous bootcamps!
      </h2>
      <PastProjects />
      <hr style={styles.line} />
      <p style={styles.aboutText}>
        Our mentors will host workshops and guide you through your projects.
      </p>
      <hr style={styles.line} />
      <p style={styles.aboutText}>
        We work in iterative milestones and provide feedback on your work. DSGT
        Bootcamp is the ideal place to jumpstart your data science career!
      </p>
      <hr style={styles.line} />
      <h2 style={styles.h2Titles}>
        Here are some demographics from Fall 2021's Bootcamp!
      </h2>
      <ThreePieCharts />
      <Gender />
      <Locations />
    </div>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "3em",
    color: COLORS.primary_blue,
  },
  h2Titles: {
    color: COLORS.primary_blue,
    fontSize: "2em",
    marginBlock: "20px",
  },
  aboutText: {
    color: COLORS.primary_blue,
    maxWidth: "70%",
    textAlign: "center",
    marginBlock: "20px",
  },
  line: {
    borderColor: COLORS.primary_green,
    borderWidth: "3px",
    margin: "0",
    width: "25%",
    marginBlock: "20px",
  },
};

export default About;
