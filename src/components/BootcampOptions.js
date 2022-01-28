import React from 'react';
import OptionTable from './OptionTable';
class BootcampOptions extends React.Component {
    render() {
        return (
          <div className="body">
                  <h1 style={{class: "font-weight-bold", color:"black", marginTop: "50px", display: "flex", justifyContent: "center"}}>Bootcamp Options</h1>
          <OptionTable/>
          </div>
        );
    }
}

export default BootcampOptions;