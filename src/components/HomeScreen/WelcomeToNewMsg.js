import React from "react";
import COLORS from "../../constants";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const WelcomeToNewMsg = (props) => {
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
           Greetings from GeeksforGeeks
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you do coding ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           Close
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
           Yes
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
  button: {

  }
};

export default WelcomeToNewMsg;
