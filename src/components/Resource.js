import React from 'react';
import ResourceTable from "./ResourceTable";
class Resource extends React.Component {
  render() {
    return (
      <div className="home">
        <div class="container">
          <h1 style={{color: "black", class: "font-weight-bold", display: "flex", justifyContent: "center", paddingTop: "60px"}}>Resources</h1>
          <div class="row align-items-center my-5">
            {/* <div class="col-lg-7" style={{height: "200px"}}>
            </div> */}
            <ResourceTable/>
          </div>
        </div>
      </div>
    );
  }
}
export default Resource;
