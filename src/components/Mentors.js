import React from 'react';
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';
class Mentors extends React.Component {
    render() {
        return (
          <div className="home">
            <div class="container">
              <div class="row align-items-center my-5">
                <div class="col-lg-7">
                </div>
                <div class="col-lg-5">
                  <Flip right><h1 class="font-weight-light">Meet the Mentors</h1></Flip>
                  <p>
                    <LightSpeed left>DSGT Bootcamp Mentors (ie: Content Team members)
                    Each content team member should insert a picture of themselves along with a brief description of their background, hobbies, interests, etc</LightSpeed>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Mentors;