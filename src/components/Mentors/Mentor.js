import COLORS from "../../constants";
import React from "react";
import { Row, Image, Container } from "react-bootstrap";

const Mentor = (props) => {
  const [name, img, headline, fun_fact] = [
    props.name,
    props.img,
    props.headline,
    props.fun_fact,
  ];

  return (
    <Row style={styles.mainContainer}>
      <Image
        style={styles.pic}
        src={img}
        alt={name + "'s picture"}
        roundedCircle
      />
      <Container style={styles.detailsContainer}>
        <h2 style={styles.title}>{name}</h2>
        <hr style={styles.line} />
        <p style={styles.headline}>{headline}</p>
        <p style={styles.fun_fact}>“{fun_fact}”</p>
      </Container>
    </Row>
  );
};

const styles = {
  mainContainer: {
    paddingTop: "20px",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  pic: {
    maxWidth: "250px",
    maxHeight: "250px",
  },
  title: {
    fontSize: "2em",
    fontWeight: "650",
    color: COLORS.primary_blue,
  },
  detailsContainer: {
    maxWidth: "60%",
    margin: "0 0 0 30px",
  },
  headline: {
    color: COLORS.light_blue,
  },
  line: {
    borderColor: COLORS.primary_green,
    borderWidth: "3px",
    margin: "0",
    width: "50%",
  },
  fun_fact: {
    color: COLORS.primary_blue,
    fontSize: "1.5em",
    fontStyle: "italic",
  },
};

export default Mentor;
