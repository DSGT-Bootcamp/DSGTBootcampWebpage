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
    drillLink,
    submitLink,
    recordingLink,
  ] = [
    props.scheduleItem.date,
    props.scheduleItem.title,
    props.scheduleItem.meeting,
    props.scheduleItem.deliverableDue,
    props.scheduleItem.notebookLink,
    props.scheduleItem.drillLink,
    props.scheduleItem.submitLink,
    props.scheduleItem.recordingLink,
  ];

  return (
    <Col style={styles.mainContainer}>
      <Container style={styles.dateContainer}>
        <hr style={styles.line} />
        <p style={styles.date}>{date}</p>
      </Container>
      <Container style={styles.titleTime}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.time}>{meeting}</p>
      </Container>
      <Container style={styles.allButtonsContainer}>
        <Row style={styles.buttonRow}>
          <FirstRowButton text="Workshop Notebook" link={notebookLink} />
          <FirstRowButton text="Drill" link={drillLink} />
          {recordingLink ? (
            <FirstRowButton text="Recording" link={recordingLink} />
          ) : undefined}
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

  let disabled = false;
  if (props.link === "") {
    disabled = true;
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
        window.open(props.link, '_blank');
      }}
      disabled={disabled}
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
        if (props.link === "") {
          var opened = window.open("");
          opened.document.write(
            "<html><head><style>" +
            "body {background-color: #1EA39E;}" +
            "h1 {color:#262730;font-family:arial black;font-size:56px;font-style:bold;}" +
            "p {color:#262730;font-family:arial;font-size:36px;font-style:bold;}</style>" + 
            "<title>To be determined</title></head>" + 
            "<body><center><h1>Submission details are to be determined.</h1>" +
            "<p>Check back soon!</p></center></body></html>"
            );
        } else {
          window.open(props.link, '_blank');
        }
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
    color: COLORS.cyan,
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
