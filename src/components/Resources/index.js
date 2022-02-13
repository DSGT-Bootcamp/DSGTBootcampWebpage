import COLORS from "../../constants";
import React from "react";
import ResourceItem from "./ResourceItem";

const Resources = () => {
  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.title}>Resources</h1>
      {resourceItems.map((resourceItem) => {
        return (
          <ResourceItem key={resourceItem.name} resourceItem={resourceItem} />
        );
      })}
    </div>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    paddingBlock: "20px",
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

const resourceItems = [
  {
    name: "Mathematics for Machine Learning",
    prereq: "None",
    link: "https://mml-book.github.io/book/mml-book.pdf",
  },
  {
    name: "Python for Data Science (Beginner)",
    prereq: "None",
    link: "https://www.youtube.com/watch?v=LHBE6Q9XlzI",
  },
  {
    name: "Advanced Python",
    prereq: "Beginner knowledge of Python",
    link: "https://www.youtube.com/watch?v=HGOBQPFzWKo&list=RDCMUC8butISFwT-Wl7EV0hUK0BQ&index=6",
  },
  {
    name: "Fundamentals of Machine Learning",
    prereq: "None",
    link: "https://towardsdatascience.com/machine-learning-basics-part-1-a36d38c7916",
  },
  {
    name: "Neural Networks and Deep Learning",
    prereq: "	Familiarity with Linear Algebra, Calculus, and Python",
    link: "https://neuralnetworksanddeeplearning.com/index.html",
  },
  {
    name: "Linear Algebra 3 Blue 1 Brown",
    prereq: "None",
    link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
  },
];

export default Resources;
