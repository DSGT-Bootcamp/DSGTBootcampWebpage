import React from "react";
import COLORS from "../../constants";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Locations",
    },
  },
};

const locationData = {
  "In-state": 36,
  "Out-of-state": 30.7,
  International: 33.3,
};

const labels = Object.keys(locationData);

const data = {
  labels,
  datasets: [
    {
      label: "Location of Participants (%)",
      data: locationData,
      backgroundColor: COLORS.primary_blue,
    },
  ],
};

const Locations = () => {
  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.title}>Locations</h3>
      <Bar options={options} data={data} />
    </div>
  );
};

const styles = {
  mainContainer: {
    maxWidth: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: COLORS.primary_blue,
    marginBlock: "40px",
  },
};

export default Locations;
