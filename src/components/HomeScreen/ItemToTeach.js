import COLORS from "../../constants";
import React from "react";

const ItemToTeach = (props) => {
  return (
    <div style={styles.mainContainer}>
      <img style={styles.logo} src={props.logo} />
      <div style={styles.details}>
        <h3 style={styles.detailsTitle}>{props.title}</h3>
        <hr style={styles.lineSpearator} />
        <p style={styles.detailsText}>{props.text}</p>
      </div>
    </div>
  );
};

export default ItemToTeach;

const styles = {
  mainContainer: {
    height: "100px",
    width: "650px",
    color: COLORS["primary_blue"],
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: "120px",
    width: "120px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "75%",
  },
  detailsTitle: {
    fontSize: "3em",
    fontWeight: "700",
    color: COLORS.primary_blue,
  },
  lineSpearator: {
    color: COLORS.primary_green,
    borderWidth: "3px",
    width: "50%",
    marginLeft: "0",
  },
  detailsText: {
    fontSize: "1em",
    color: COLORS.primary_blue_50,
  },
};
