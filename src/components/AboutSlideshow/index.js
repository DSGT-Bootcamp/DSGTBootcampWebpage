import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import disease from '../../SlideshowPhotos/disease.png';

import nn from '../../SlideshowPhotos/nn.png';
import income from '../../SlideshowPhotos/income.png';

import health from '../../SlideshowPhotos/health.png';
import map from '../../SlideshowPhotos/map.png';

const AboutSlideshow = () => {
    return (
      <div style={{marginBottom: "50px", marginTop: "50px"}}>
        <Slide easing="ease">
          <div className="each-slide" style={{display: "flex", justifyContent: "center"}}>
            <img src={disease} alt="disease occurrence across cities" />
            <span>Slide 1</span>
          </div> 
          <div className="each-slide" style={{display: "flex", justifyContent: "center"}}>
            <img src={health} alt="code for cancer costs analysis" />
            <span>Slide 2</span>
          </div> 
          <div className="each-slide" style={{display: "flex", justifyContent: "center"}}>
            <img src={income} alt="segregation data" />
            <span>Slide 3</span>
          </div> 
          <div className="each-slide" style={{display: "flex", justifyContent: "center"}}>
            <img src={map} alt="liver disease by state" />
            <span>Slide 4</span>
          </div> 
          <div className="each-slide" style={{display: "flex", justifyContent: "center"}}>
            <img src={nn} alt="neural network performance" />
            <span>Slide 5</span>
          </div> 
        </Slide>
      </div>
    )
};

export default AboutSlideshow;