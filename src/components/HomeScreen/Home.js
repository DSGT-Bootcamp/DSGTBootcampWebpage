import FirstScrollScreen from "./FirstScrollScreen";
import FourthScrollScreen from "./FourthScrollScreen";
import React from "react";
import SecondScrollScreen from "./SecondScrollScreen";
import ThirdScrollScreen from "./ThirdScrollScreen";

class Home extends React.Component {
  render() {
    return (
      <div id="homeScreenMainDiv">
        <FirstScrollScreen />
        <SecondScrollScreen />
        <ThirdScrollScreen />
        <FourthScrollScreen />
      </div>
    );
  }
}

export default Home;

const styles = {};
