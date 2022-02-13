import "react-slideshow-image/dist/styles.css";
import React from "react";
import disease from "../../images/past_projects_images/disease.png";
import health from "../../images/past_projects_images/health.png";
import income from "../../images/past_projects_images/income.png";
import nn from "../../images/past_projects_images/nn.png";
import { Slide } from "react-slideshow-image";

const PastProjects = () => {
  return (
    <Slide easing="ease" indicators style={styles.past_project_slides}>
      {past_project_slides.map((project) => {
        return (
          <div className="each-slide" style={styles.eachSlide}>
            <img src={project.img} alt={project.alt} />
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
};

const past_project_slides = [
  {
    img: disease,
    alt: "Disease occurrence across cities",
  },
  {
    img: health,
    alt: "Code for cancer costs analysis",
  },
  {
    img: income,
    alt: "Segregation data",
  },
  {
    img: nn,
    alt: "Neural network performance",
  },
];

export default PastProjects;
