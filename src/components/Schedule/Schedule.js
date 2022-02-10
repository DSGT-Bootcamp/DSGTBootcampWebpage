import React from "react";
import ScheduleItem from "./ScheduleItem";
import COLORS from "../../constants";
import { Row, Col } from "react-bootstrap";

const Schedule = () => {
  let scheduleItemsComps = [];
  scheduleItems.forEach((element) => {
    scheduleItemsComps.push(<ScheduleItem scheduleItem={element} />);
  });

  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.title}>Schedule</h1>
      {scheduleItemsComps}
    </div>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "3em",
    color: COLORS.primary_blue,
  },
};

export default Schedule;

const scheduleItems = [
  {
    date: "Feb 07, 2022",
    title: "Introduction to Bootcamp",
    meeting: "6:30 pm | Ford ES&T L1175",
    deliverableDue: "Feb 21, 2022 | 11:59 pm",
    notebookLink: "https://www.google.com/",
    recordingLink: "https://www.google.com/",
    drillLink: "https://www.google.com/",
    submitLink: "https://www.google.com/",
  },
  {
    date: "Feb 21, 2022",
    title: "Exploratory Data Analysis",
    meeting: "6:30 pm | College of Computing 017",
    deliverableDue: "Mar 07, 2022 | 11:59 pm",
    notebookLink: "https://www.google.com/",
    recordingLink: "https://www.google.com/",
    drillLink: "https://www.google.com/",
    submitLink: "https://www.google.com/",
  },
  {
    date: "Mar 07, 2022",
    title: "Introductory Data Preprocessing",
    meeting: "6:30 pm | College of Computing 017",
    deliverableDue: "Mar 28, 2022 | 11:59 pm",
    notebookLink: "https://www.google.com/",
    recordingLink: "https://www.google.com/",
    drillLink: "https://www.google.com/",
    submitLink: "https://www.google.com/",
  },
  {
    date: "Mar 28, 2022",
    title: "Modeling with Machine Learning",
    meeting: "6:30 pm | College of Computing 017",
    deliverableDue: "Apr 11, 2022 | 11:59 pm",
    notebookLink: "https://www.google.com/",
    recordingLink: "https://www.google.com/",
    drillLink: "https://www.google.com/",
    submitLink: "https://www.google.com/",
  },
  {
    date: "Apr 11, 2022",
    title: "Introduction to Deep Learning",
    meeting: "6:30 pm | College of Computing 017",
    deliverableDue: "Apr 25, 2022 | 11:59 pm",
    notebookLink: "https://www.google.com/",
    recordingLink: "https://www.google.com/",
    drillLink: "https://www.google.com/",
    submitLink: "https://www.google.com/",
  },
];
