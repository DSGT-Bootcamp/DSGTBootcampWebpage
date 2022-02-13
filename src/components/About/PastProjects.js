import "react-slideshow-image/dist/styles.css";
import React from "react";
import disease from "../../images/past_projects_images/disease.png";
import health from "../../images/past_projects_images/health.png";
import income from "../../images/past_projects_images/income.png";
import nn from "../../images/past_projects_images/nn.png";
import { Slide } from "react-slideshow-image";
import COLORS from "../../constants";

const PastProjects = () => {
  return (
    <Slide easing="ease" indicators style={styles.past_project_slides}>
      {past_project_slides.map((project) => {
        return (
          <div className="each-slide" style={styles.eachSlide}>
            <p style={styles.slideTitle}>{project.title}</p>
            <img src={project.img} alt={project.title} />
          </div>
        );
      })}
    </Slide>
  );
};

const styles = {
  past_project_slides: {
    justifyContent: "center",
    width: "70%",
    marginBlock: "20px",
  },
  eachSlide: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontStyle: "italic",
    color: COLORS.primary_blue,
  },
  slideTitle: {
  },
};

const past_project_slides = [
  {
    img: disease,
    title: "Disease occurrence across cities",
  },
  {
    img: health,
    title: "Code for cancer costs analysis",
  },
  {
    img: income,
    title: "Segregation data",
  },
  {
    img: nn,
    title: "Neural network performance",
  },
];

export default PastProjects;
