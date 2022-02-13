import FirstScrollScreen from "./FirstScrollScreen";
import FourthScrollScreen from "./FourthScrollScreen";
import React from "react";
import SecondScrollScreen from "./SecondScrollScreen";
import ThirdScrollScreen from "./ThirdScrollScreen";
import WelcomeToNewMsg from "./WelcomeToNewMsg";

const Home = () => {
  const [clicked, setClicked] = React.useState(false);

  return (
    <div id="homeScreenMainDiv">
      {/* {clicked ? undefined : <WelcomeToNewMsg />} */}
      <FirstScrollScreen />
      <SecondScrollScreen />
      <ThirdScrollScreen />
      <FourthScrollScreen />
    </div>
  );
};

export default Home;
