import React from 'react';
import ResourceTable from "./ResourceTable";
class Resource extends React.Component {
  render() {
    return (
      <div className="home">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
            </div>
            <ResourceTable/>
          </div>
        </div>
      </div>
    );
  }
}
export default Resource;
