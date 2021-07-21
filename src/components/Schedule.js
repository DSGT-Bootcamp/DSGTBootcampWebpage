import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
class Schedule extends React.Component {
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
                  <Roll right><h1 class="font-weight-light">Schedule</h1></Roll>
                  <p>
                    <Zoom left>Schedule for DSGT Bootcamp workshops. Put link to Google Colab notebook here. Schedule should be a table!</Zoom>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Schedule;