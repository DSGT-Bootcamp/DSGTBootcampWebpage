import React from "react";
import COLORS from "../../constants";

const Locations = () => {
  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.title}>Gender</h3>
    </div>
  );
};

const styles = {
  mainContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: COLORS.primary_blue,
    marginBlock: "20px",
  },
};

export default Locations;
