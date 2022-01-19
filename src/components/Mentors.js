import React from 'react';
import PhotoGallery from "./PhotoGallery";
class Mentors extends React.Component {
    render() {
        return (
          <div className="home" style={{alignContent: "center"}}>
            <div class="container">
              {/* <div class="row align-items-center my-5">
                <div class="col-lg-7">
                </div>
                <div class="col-lg-5"> */}
                  <h1 style={{class: "font-weight-bold", display: "flex", justifyContent: "center", color: "black", paddingTop: "50px"}}>Meet the Mentors!</h1>
                {/* </div>
              </div> */}
            {/* </div> */}
          </div>
          <PhotoGallery/>
          </div>
        );
    }
}
export default Mentors;
