import React from 'react';
import PhotoGallery from "./PhotoGallery";
class Mentors extends React.Component {
    render() {
        return (
          <div className="home">
            <div class="container">
              <div class="row align-items-center my-5">
                <div class="col-lg-7">
                </div>
                <div class="col-lg-5">
                  <h1 class="font-weight-light">Meet the Mentors</h1>
                </div>
              </div>
            </div>
          <PhotoGallery/>
          </div>
        );
    }
}
export default Mentors;
