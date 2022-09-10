import COLORS from "../../constants";
import Ethinicities from "./Ethinicities";
import Major from "./Major";
import React from "react";
import Year from "./Year";

const ThreePieCharts = () => {
  const colors = [
    COLORS.primary_blue,
    COLORS.primary_green,
    COLORS.primary_blue_70,
    COLORS.cyan,
    COLORS.white,
  ];

  return (
    <div style={styles.mainContainer}>
      <Ethinicities style={styles.pieChartStyles} colors={colors} />
      <Major style={styles.pieChartStyles} colors={colors} />
      <Year style={styles.pieChartStyles} colors={colors} />
    </div>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  pieChartStyles: {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "30%",
    },
    title: { color: COLORS.primary_blue },
  },
};

export default ThreePieCharts;
