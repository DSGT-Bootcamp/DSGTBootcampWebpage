import React from 'react';
class About extends React.Component {
    render() {
        return (
          <div className="home">
            <div class="container">
              <div class="row align-items-center my-5">
                <div class="col-lg-7">
                </div>
                <div class="col-lg-5">
                <h1 class="font-weight-light" style={{textAlign: "center"}}>About DSGT Bootcamp</h1>
                  <p>
                    DSGT bootcamp is an immersive 11-week experience where you’ll
                    learn a variety of data science skills and work in teams to answer 
                    significant questions by analyzing data. Our mentors will host 
                    workshops and guide you through your projects. We work in iterative
                    milestones and provide feedback on your work. DSGT Bootcamp is the ideal place to 
                    jumpstart your data science career!
            
                  </p>
                </div>
              </div>
              {/* <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://www.crn.com/resources/025e-0fb69052958d-257fbfe990c4-1000/ai-artificial-intelligence-mind.jpg"
                height="450"
                width="400"
                alt=""
              /> */}
            </div>
          </div>
        );
    }
}

export default About;
