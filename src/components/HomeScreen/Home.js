import FirstScrollScreen from "./FirstScrollScreen";
import FourthScrollScreen from "./FourthScrollScreen";
import React from "react";
import SecondScrollScreen from "./SecondScrollScreen";
import ThirdScrollScreen from "./ThirdScrollScreen";
import WelcomeToNewMsg from "./WelcomeToNewMsg";

const Home = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="homeScreenMainDiv">
      <FirstScrollScreen />
      <SecondScrollScreen />
      <ThirdScrollScreen />
      <FourthScrollScreen />
      <WelcomeToNewMsg open={open} handleClose={handleClose} />
    </div>
  );
};

export default Home;
