import React from 'react';
import OptionTable from './OptionTable';
class BootcampOptions extends React.Component {
    render() {
        return (
          <div className="home">
            {/* <div class="container">
              <div class="row align-items-center my-5">
                <div class="col-lg-7">
                </div>
                <div class="col-lg-5"> */}
                  <h1 style={{class: "font-weight-bold", color:"black", marginTop: "50px", display: "flex", justifyContent: "center"}}>Bootcamp Options</h1>
                  {/* <p class="font-weight-light" style={{color:"black", display: "flex", justifyContent: "center"}}>
                    Schedule for DSGT Bootcamp workshops.
                  </p> */}
                {/* </div>
              </div>
            </div> */}
          <OptionTable/>
          </div>
        );
    }
}

export default BootcampOptions;