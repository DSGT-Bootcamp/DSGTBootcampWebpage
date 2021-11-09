import React from 'react';
import ScheduleTable from './ScheduleTable';
class Schedule extends React.Component {
    render() {
        return (
          <div className="home">
            <div class="container">
              <div class="row align-items-center my-5">
                <div class="col-lg-7">
                </div>
                <div class="col-lg-5">
                  <h1 class="font-weight-bold">Schedule</h1>
                  <p class="font-weight-light">
                    Schedule for DSGT Bootcamp workshops.
                  </p>
                </div>
              </div>
            </div>
            <ScheduleTable />
          </div>
        );
    }
}

export default Schedule;