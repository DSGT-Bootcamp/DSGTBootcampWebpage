import COLORS from "../../constants";
import Mentor from "./Mentor";
import React from "react";
import { mentors } from "./allMentors";

const allMentors = [];
mentors.forEach((element) => {
  allMentors.push(
    <Mentor
      name={element.name}
      img={element.img}
      headline={element.headline}
      fun_fact={element.fun_fact}
    />
  );
});



const Mentors = () => {
  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.title}>Mentors</h1>
      {allMentors}
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
};

export default Mentors;
