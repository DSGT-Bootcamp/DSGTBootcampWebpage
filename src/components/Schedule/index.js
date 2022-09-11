import COLORS from "../../constants";
import React from "react";
import ScheduleItem from "./ScheduleItem";

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
    date: "September 23, 2022",
    title: "Introduction and Environment Setup",
    meeting: "4:00 PM - 5:00 PM | Howey Physics L4 Classroom",
    deliverableDue: "October 06, 2022 | 11:59 PM",
    notebookLink: "https://deepnote.com/workspace/in-person-bootcamp-7db6b1b3-a17a-401b-a16d-0ae89fbd312c/project/Introduction-and-Environment-Setup-be4904a2-b77a-44ff-849a-8c0ca5910ec7/notebook/Workshop_1_Spring_2022-147fcf6afb584d7ca74f20272ba556f0",
    drillLink: "https://deepnote.com/workspace/in-person-bootcamp-7db6b1b3-a17a-401b-a16d-0ae89fbd312c/project/Introduction-and-Environment-Setup-be4904a2-b77a-44ff-849a-8c0ca5910ec7/notebook/Workshop%201%20Drill%20Spring%202021-14c2d02c5dff41d085ea2190817f662e",
    submitLink: "https://docs.google.com/document/d/1_8UR5j8Bt9msjY2qF772SFPwvHIavJs09FDNY2kAj-M/edit?usp=sharing",
    //recordingLink: "https://youtu.be/ARBB2XXeJZQ",
  },
  {
    date: "October 07, 2022",
    title: "Exploratory Data Analysis",
    meeting: "4:00 PM - 5:00 PM | Howey Physics L4 Classroom",
    deliverableDue: "October 20, 2022 | 11:59 pm",
    notebookLink: "https://deepnote.com/workspace/in-person-bootcamp-7db6b1b3-a17a-401b-a16d-0ae89fbd312c/project/Exploratory-Data-Analysis-282550a0-b371-4e1f-894f-81176ab33d44/notebook/Workshop%202%20Spring%202022-6971e6219bf44eefac27a37aa3dca63b",
    drillLink: "https://deepnote.com/workspace/in-person-bootcamp-7db6b1b3-a17a-401b-a16d-0ae89fbd312c/project/Exploratory-Data-Analysis-282550a0-b371-4e1f-894f-81176ab33d44/notebook/Workshop%202%20Drill%20Spring%202022-acacdeeadf7e4671981e62d0c03d0f4f",
    submitLink: "https://docs.google.com/document/d/13Hr1cba9Qvxk-Jh-xQu982RJMGmSEz5RTT3gzpUo2pE/edit?usp=sharing",
    //recordingLink: "",
  },
  {
    date: "October 21, 2022",
    title: "Introductory Data Preprocessing",
    meeting: "4:00 PM - 5:00 PM | Howey Physics L4 Classroom",
    deliverableDue: "November 03, 2022 | 11:59 pm",
    notebookLink: "https://deepnote.com/workspace/in-person-bootcamp-7db6b1b3-a17a-401b-a16d-0ae89fbd312c/project/Introductory-Data-Preprocessing-0a9292dd-6840-4230-bff5-455a9366cbe8/notebook/Workshop_3_Spring_2022-395c5f91db9d4034ad0a9c96b10fde20",
    drillLink: "https://deepnote.com/workspace/in-person-bootcamp-7db6b1b3-a17a-401b-a16d-0ae89fbd312c/project/Introductory-Data-Preprocessing-0a9292dd-6840-4230-bff5-455a9366cbe8/notebook/Workshop%203%20Drill%20Spring%202022-ebde2788418a40f49e17cd1b62fcd980",
    submitLink: "https://docs.google.com/document/d/1qsiPNhGjeIWLM0sg83oFk1CxLDZVBtMLCqHc4yE9Wyo/edit?usp=sharing",
    //recordingLink: "https://youtu.be/cfND95l2EoI",
  },
  {
    date: "November 04, 2022",
    title: "Introduction to Machine Learning",
    meeting: "4:00 PM - 5:00 PM | Howey Physics L4 Classroom",
    deliverableDue: "November 17, 2022 | 11:59 pm",
    notebookLink: "https://deepnote.com/workspace/in-person-bootcamp-7db6b1b3-a17a-401b-a16d-0ae89fbd312c/project/Introduction-to-Machine-Learning-0a3de591-578d-4c87-932a-8ff030c19cf7/notebook/Workshop%204%20Spring%202022-ef04a4ba91b342bcaecba51dbeb5667e",
    drillLink: "https://deepnote.com/workspace/in-person-bootcamp-7db6b1b3-a17a-401b-a16d-0ae89fbd312c/project/Introduction-to-Machine-Learning-0a3de591-578d-4c87-932a-8ff030c19cf7/notebook/Workshop%204%20Drill%20Spring%202022-faf234facf7748b28483542c3e7ee1f5",
    submitLink: "https://docs.google.com/document/d/1UgB0JUboeANtOXlfItvt82Dl88kqZHAUt7RifwJNF28/edit?usp=sharing",
    //recordingLink: "https://youtu.be/pfIcfe-gsM8",
  },
  {
    date: "November 18, 2022",
    title: "Introduction to Deep Learning",
    meeting: "4:00 PM - 5:00 PM | Howey Physics L4 Classroom",
    deliverableDue: "December 01, 2022 | 11:59 pm",
    notebookLink: "https://deepnote.com/workspace/in-person-bootcamp-7db6b1b3-a17a-401b-a16d-0ae89fbd312c/project/Introduction-to-Deep-Learning-8488eaf2-ff92-4a43-b350-fdb8e01ce644/notebook/Workshop%205%20Spring%202022-50176c5bddfa42609c02627b94d4e6a8",
    drillLink: "https://deepnote.com/workspace/in-person-bootcamp-7db6b1b3-a17a-401b-a16d-0ae89fbd312c/project/Introduction-to-Deep-Learning-8488eaf2-ff92-4a43-b350-fdb8e01ce644/notebook/Workshop%205%20Drill-d853a93e3911421692c2afc5b062ba42",
    submitLink: "https://docs.google.com/document/d/19zwX7J3b8LLwLT-0C6aKUn70luFVPsmpKlDKZ-nPiI8/edit?usp=sharing",
    //recordingLink: "https://youtu.be/YbAViujobzk",
  },
];
