import React from 'react';
import ScheduleTable from './ScheduleTable';
class Schedule extends React.Component {
    render() {
        return (
          <div className="home">
            {/* <div class="container">
              <div class="row align-items-center my-5">
                <div class="col-lg-7">
                </div>
                <div class="col-lg-5"> */}
                  <h1 style={{class: "font-weight-bold", color:"black", marginTop: "50px", display: "flex", justifyContent: "center"}}>Fall 2021 Bootcamp Schedule</h1>
                  {/* <p class="font-weight-light" style={{color:"black", display: "flex", justifyContent: "center"}}>
                    Schedule for DSGT Bootcamp workshops.
                  </p> */}
                {/* </div>
              </div>
            </div> */}
          <ScheduleTable/>
          </div>
        );
    }
}

export default Schedule;