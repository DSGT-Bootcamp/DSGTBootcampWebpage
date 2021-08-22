import React from 'react';
import Roll from "react-reveal/Roll";
import Zoom from "react-reveal/Zoom";
import ResourceTable from "./ResourceTable";
class Resource extends React.Component {
  render() {
    return (
        <div className="home">
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-10">
                        <Roll right><h1 className="font-weight-light">Resources</h1></Roll>
                        <p>
                            <Zoom left>Below are some free resources for you to explore various topics within/relating to Data Science. </Zoom>
                        </p>
                    </div>
                </div>
            </div>
            <ResourceTable/>
        </div>
    );
  }
}
export default Resource;
