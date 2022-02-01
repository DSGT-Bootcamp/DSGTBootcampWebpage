import React from 'react';
import { Container } from 'react-bootstrap';
import AboutSlideshow from './AboutSlideshow/index.js';
import DemographicsSlideshow from './DemographicsSlideshow/index.js';

class About extends React.Component {
    render() {
        return (
          <div style={{height: "1200px", marginBottom: "500px"}}>
            <Container>
                {/* <div class="col-lg-7">
                </div>
                <div class="col-lg-5" style={{height: "500px"}}> */}
                <h1 style={{class: "font-weight-bold", paddingTop: "50px", textAlign: "center", color: "black"}}>About DSGT Bootcamp</h1>
                  <p style={{alignContent: "center", color: "black"}} className="font-weight-100" >
                    DSGT bootcamp is an immersive 11-week experience where you'll
                    learn a variety of data science skills and work in teams to answer 
                    significant questions by analyzing data. Our mentors will host 
                    workshops and guide you through your projects. We work in iterative
                    milestones and provide feedback on your work. DSGT Bootcamp is the ideal place to 
                    jumpstart your data science career!
                  </p>
                  <a href="/options" style={{color: "blue"}}>Click here to view your options for participating in DSGT Bootcamp</a>
                <h2 style={{height: "50px", paddingTop: "50px", paddingBottom: "25px", textAlign: "center", color: "black"}}>
                  Here are some sample projects from previous bootcamps!
                </h2>
                <AboutSlideshow/>
                <h3 style={{textAlign: "center", color: "black"}}>
                  Here are demographic data from the most recent Fall 2021 Bootcamp!
                </h3>
                <DemographicsSlideshow/>
            </Container>
          </div>
        );
    }
}

export default About;
