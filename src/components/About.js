import React from 'react';
import AboutSlideshow from './AboutSlideshow/index.js';
class About extends React.Component {
    render() {
        return (
          <div style={{height: "600px", marginBottom: "500px"}}>
            <div class="container">
              <div className="home">
                {/* <div class="col-lg-7">
                </div>
                <div class="col-lg-5" style={{height: "500px"}}> */}
                <h1 style={{class: "font-weight-bold", paddingTop: "50px", textAlign: "center", color: "black"}}>About DSGT Bootcamp</h1>
                  <p style={{alignContent: "center", color: "black"}} class="font-weight-100" >
                    DSGT bootcamp is an immersive 11-week experience where you’ll
                    learn a variety of data science skills and work in teams to answer 
                    significant questions by analyzing data. Our mentors will host 
                    workshops and guide you through your projects. We work in iterative
                    milestones and provide feedback on your work. DSGT Bootcamp is the ideal place to 
                    jumpstart your data science career!
                  </p>
              </div>
            </div>
            <AboutSlideshow/>
          </div>
        );
    }
}

export default About;
