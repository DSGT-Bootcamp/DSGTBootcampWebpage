import React from 'react';
import Fade from 'react-reveal/Fade';
class Contact extends React.Component {
  render() {
    return (
      <div className="home">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <Fade left><h1 class="font-weight-light">Contact Us</h1></Fade>
              <p>
              <Fade right>Put contact info for DSGT here</Fade>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;