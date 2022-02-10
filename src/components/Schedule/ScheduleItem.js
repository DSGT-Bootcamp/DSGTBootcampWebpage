import Button from "react-bootstrap/Button";
import COLORS from "../../constants";
import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const ScheduleItem = (props) => {
  const [
    date,
    title,
    meeting,
    deliverableDue,
    notebookLink,
    recordingLink,
    drillLink,
    submitLink,
  ] = [
    props.scheduleItem.date,
    props.scheduleItem.title,
    props.scheduleItem.meeting,
    props.scheduleItem.deliverableDue,
    props.scheduleItem.notebookLink,
    props.scheduleItem.recordingLink,
    props.scheduleItem.drillLink,
    props.scheduleItem.submitLink,
  ];

  return (
    <Col style={styles.mainContainer}>
      <Container style={styles.dateContainer}>
        <p style={styles.date}>{date}</p>
        <hr style={styles.line} />
      </Container>
      <Container style={styles.titleTime}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.time}>{meeting}</p>
      </Container>
      <Container style={styles.allButtonsContainer}>
        <Row style={styles.buttonRow}>
          <FirstRowButton text="Workshop Notebook" link={notebookLink} />
          <FirstRowButton text="Recording Link" link={recordingLink} />
          <FirstRowButton text="Drill" link={drillLink} />
        </Row>
        <Row style={styles.buttonRow}>
          <SubmitDelivButton
            deliverableDue={deliverableDue}
            link={submitLink}
          />
        </Row>
      </Container>
    </Col>
  );
};

const FirstRowButton = (props) => {
  const [hovering, setHovering] = React.useState(false);

  const firstRowButtonStyles = {
    current: {
      backgroundColor: COLORS.primary_blue_70,
      fontSize: "1.1em",
      borderRadius: "40px",
      borderColor: COLORS.gray_font_60,
      borderWidth: "1px",
      fontWeight: "500",
      marginLeft: "10px",
      paddingInline: "20px",
    },
  };

  if (hovering) {
    firstRowButtonStyles.current.backgroundColor = COLORS.primary_green;
    firstRowButtonStyles.current.color = COLORS.primary_blue;
  } else {
    firstRowButtonStyles.current.backgroundColor = COLORS.primary_blue;
    firstRowButtonStyles.current.color = COLORS.white;
  }

  return (
    <Button
      style={firstRowButtonStyles.current}
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
      onClick={() => {
        window.location.href = props.link;
      }}
    >
      {props.text}
    </Button>
  );
};

const SubmitDelivButton = (props) => {
  const [hovering, setHovering] = React.useState(false);

  const submitDelivButtonStyles = {
    delivButton: {
      backgroundColor: COLORS.primary_green,
      borderRadius: "40px",
      borderColor: COLORS.gray_font_60,
      borderWidth: "1px",
      fontWeight: "500",
      marginLeft: "10px",
      marginTop: "13px",
      paddingInline: "20px",
      textAlign: "left",
    },
    submit: {
      color: COLORS.primary_blue,
      fontWeight: "bold",
      fontSize: "1.2em",
    },
    due: {
      color: COLORS.gray_font_60,
      fontStyle: "italic",
      fontSize: "0.9em",
    },
  };

  if (hovering) {
    submitDelivButtonStyles.delivButton.backgroundColor = COLORS.primary_blue;
    submitDelivButtonStyles.submit.color = COLORS.white;
    submitDelivButtonStyles.due.color = COLORS.white;
  } else {
    submitDelivButtonStyles.delivButton.backgroundColor = COLORS.primary_green;
    submitDelivButtonStyles.submit.color = COLORS.primary_blue;
    submitDelivButtonStyles.due.color = COLORS.gray_font_60;
  }

  return (
    <Button
      style={submitDelivButtonStyles.delivButton}
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
      onClick={() => {
        window.location.href = props.link;
      }}
    >
      <span style={submitDelivButtonStyles.submit}>Submit Deliverable</span>
      <br />
      <span style={submitDelivButtonStyles.due}>
        Due {props.deliverableDue}
      </span>
    </Button>
  );
};

const styles = {
  mainContainer: {
    width: "80%",
    marginBlock: "10px",
  },
  title: {
    fontSize: "2em",
    fontWeight: "650",
    color: COLORS.primary_blue,
    margin: "0",
  },
  titleTime: {
    margin: "0",
  },
  time: {
    color: COLORS.light_blue,
  },
  allButtonsContainer: {
    borderLeft: "6px solid",
    borderColor: COLORS.primary_green,
    paddingBlock: "10px",
  },
  buttonRow: {
    margin: "0",
  },
  delivButton: {
    backgroundColor: COLORS.primary_green,
    borderRadius: "40px",
    borderColor: COLORS.gray_font_60,
    borderWidth: "1px",
    fontWeight: "500",
    marginLeft: "10px",
    marginTop: "13px",
    paddingInline: "20px",
    textAlign: "left",
  },
  submit: {
    color: COLORS.primary_blue,
    fontWeight: "bold",
    fontSize: "1.2em",
  },
  due: {
    color: COLORS.gray_font_60,
    fontStyle: "italic",
    fontSize: "0.9em",
  },
  dateContainer: {
    margin: "0",
  },
  date: {
    color: COLORS.primary_blue,
    fontSize: "1.1em",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  line: {
    borderColor: COLORS.black,
    borderWidth: "3px",
    margin: "0",
    width: "100%",
  },
};

export default ScheduleItem;
