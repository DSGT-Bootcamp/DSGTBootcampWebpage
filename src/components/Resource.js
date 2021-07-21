import React from 'react';
import Slide from 'react-reveal/Slide';
class Resource extends React.Component {
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
              <Slide down><h1 class="font-weight-light">Resources</h1></Slide>
              <p>
              <Slide down>Put helpful resources related to data science here.</Slide>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Resource;