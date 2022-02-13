import Button from "@material-ui/core/Button";
import COLORS from "../../constants";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react";

const WelcomeToNewMsg = (props) => {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>
        <span style={styles.title}>Welcome to Our Redesigned Website</span>
      </DialogTitle>
      <DialogActions>
        <Button style={styles.button} onClick={props.handleClose}>
          Take me home
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: COLORS.gray_font_60,
  },
  title: {
    color: COLORS.primary_blue,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    color: COLORS.primary_blue,
    margin: "auto",
    textTransform: "capitalize",
  },
};

export default WelcomeToNewMsg;
