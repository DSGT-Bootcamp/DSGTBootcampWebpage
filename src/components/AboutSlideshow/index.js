import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import jpg44 from '../../SlideshowPhotos/jpg_44.jpg';
import disease from '../../SlideshowPhotos/disease.png';

import nn from '../../SlideshowPhotos/nn.png';
import income from '../../SlideshowPhotos/income.png';

import health from '../../SlideshowPhotos/health.png';
import map from '../../SlideshowPhotos/map.png';

const AboutSlideshow = () => {
    return (
      <div style={{marginBottom: "4000px", marginTop: "50px"}}>
        <Slide easing="ease">
          <div className="each-slide" style={{display: "flex", justifyContent: "center"}}>
            <img src={disease}/>
            <span>Slide 1</span>
          </div> 
          <div className="each-slide" style={{display: "flex", justifyContent: "center"}}>
            <img src={health}/>
            <span>Slide 2</span>
          </div> 
          <div className="each-slide" style={{display: "flex", justifyContent: "center"}}>
            <img src={income}/>
            <span>Slide 3</span>
          </div> 
          <div className="each-slide" style={{display: "flex", justifyContent: "center"}}>
            <img src={map}/>
            <span>Slide 4</span>
          </div> 
          <div className="each-slide" style={{display: "flex", justifyContent: "center"}}>
            <img src={nn}/>
            <span>Slide 5</span>
          </div> 
        </Slide>
      </div>
    )
};

export default AboutSlideshow;