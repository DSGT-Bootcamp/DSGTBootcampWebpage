import COLORS from "../../constants";
import React from "react";
import { Row, Container } from "react-bootstrap";

const ResourceItem = (props) => {
  const [name, prereq, link] = [
    props.resourceItem.name,
    props.resourceItem.prereq,
    props.resourceItem.link,
  ];

  return (
    <Row style={styles.mainContainer}>
      <Container style={styles.detailsContainer}>
        <h2 style={styles.title}>
          <a href={link} style={{ color: "inherit" }}>
            {name}
          </a>
        </h2>
        <hr style={styles.line} />
        <p style={styles.headline}>
          <strong>Prerequisites:</strong> {prereq}
        </p>
      </Container>
    </Row>
  );
};

const styles = {
  mainContainer: {
    paddingTop: "20px",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "3em",
    color: COLORS.primary_blue,
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
  detailsContainer: {},
  headline: {
    color: COLORS.light_blue,
  },
  line: {
    borderColor: COLORS.primary_green,
    borderWidth: "3px",
    margin: "0",
    width: "100%",
  },
  fun_fact: {
    color: COLORS.primary_blue,
    fontSize: "1.5em",
    fontStyle: "italic",
  },
};

export default ResourceItem;
