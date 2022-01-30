import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import ethnicity from '../../demographicPhotos/ethnicity.png';
import gender from '../../demographicPhotos/gender.png';
import location from '../../demographicPhotos/location.png';
import major from '../../demographicPhotos/major.png';
import year from '../../demographicPhotos/year.png';

const DemographicsSlideshow = () => {
    return (
      <div style={{marginBottom: "50px", marginTop: "50px"}}>
        <Slide easing="ease">
          <div className="each-slide" style={{display: "flex", justifyContent: "center"}}>
            <img src={ethnicity} alt="Fall 2021 Bootcamp Ethnicity Demographics" />
            <span>Slide 1</span>
          </div> 
          <div className="each-slide" style={{display: "flex", justifyContent: "center"}}>
            <img src={gender} alt="Fall 2021 Bootcamp Gender Demographics" />
            <span>Slide 2</span>
          </div> 
          <div className="each-slide" style={{display: "flex", justifyContent: "center"}}>
            <img src={location} alt="Fall 2021 Bootcamp Location Demographics" />
            <span>Slide 3</span>
          </div> 
          <div className="each-slide" style={{display: "flex", justifyContent: "center"}}>
            <img src={major} alt="Fall 2021 Bootcamp Major Demographics" />
            <span>Slide 4</span>
          </div> 
          <div className="each-slide" style={{display: "flex", justifyContent: "center"}}>
            <img src={year} alt="Fall 2021 Bootcamp Year of Study Demographics" />
            <span>Slide 5</span>
          </div> 
        </Slide>
      </div>
    )
};

export default DemographicsSlideshow;