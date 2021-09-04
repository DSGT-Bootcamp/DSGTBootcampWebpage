import React from 'react';
import Slide from 'react-reveal/Slide';
class Resource extends React.Component {
  render() {
    return (
      <div className="home">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
            </div>
            <div class="col-lg-5">
              <Slide down><h1 class="font-weight-light">Resources</h1></Slide>
              <p>
              <Slide down>Put helpful resources related to data science here. This page should regularly be updated!</Slide>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Resource;