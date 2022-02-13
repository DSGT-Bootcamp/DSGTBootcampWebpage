import React from "react";
import COLORS from "../../constants";

const Gender = () => {
  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.title}>Gender</h3>
      <div style={styles.genderData}>
        <div style={styles.males}>
          <p style={styles.label}>Males (76%)</p>
        </div>
        <div style={styles.females}>
          <p style={styles.label}>Females (24%)</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  males: {
    width: "76.0%",
    height: "100%",
    backgroundColor: COLORS.primary_blue,
  },
  females: {
    width: "24.0%",
    height: "100%",
    backgroundColor: COLORS.primary_blue_50,
  },
  title: {
    color: COLORS.primary_blue,
    marginBlock: "20px",
  },
  genderData: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    height: "50px",
    justifyContent: "center",
    lineHeight: "50px",
    textAlign: "center",
    width: "90%",
  },
  label: {
    fontStyle: "italic",
  },
};

export default Gender;
