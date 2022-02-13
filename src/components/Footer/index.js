import COLORS from "../../constants";
import DSGTLogo from "../../images/logos/dsgt-logo-light.png";
import EmailLogo from "../../images/footer/email.png";
import FacebookLogo from "../../images/footer/facebook.png";
import LinkedInLogo from "../../images/footer/linkedin.png";
import { Button } from "react-bootstrap";

const Contact = () => {
  const thisYear = new Date().getFullYear();
  return (
    <div style={styles.mainContainer}>
      <Button
        style={styles.logoButton}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <img src={DSGTLogo} style={styles.dsgtLogo} />
      </Button>
      <p style={styles.copyright}>
        Copyright © {thisYear} DSGT. All rights reserved.
      </p>
      <div style={styles.contacts}>
        <Button
          style={styles.contactButton}
          onClick={() => {
            window.location.href = "https://www.facebook.com/datasciencegt/";
          }}
        >
          <img src={FacebookLogo} style={styles.contactLogo} />
        </Button>
        <Button
          style={styles.contactButton}
          onClick={() => {
            window.location.href = "mailto:hello@datasciencegt.org";
          }}
        >
          <img src={EmailLogo} style={styles.contactLogo} />
        </Button>
        <Button
          style={styles.contactButton}
          onClick={() => {
            window.location.href = "https://www.linkedin.com/company/dsgt/";
          }}
        >
          <img src={LinkedInLogo} style={styles.contactLogo} />
        </Button>
      </div>
    </div>
  );
};

export default Contact;

const styles = {
  mainContainer: {
    height: "200px",
    backgroundColor: COLORS.primary_blue,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: "0",
  },
  copyright: {
    color: COLORS.white,
    fontSize: "1em",
  },
  dsgtLogo: {
    height: "80px",
    width: "80px",
  },
  contacts: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contactLogo: {
    height: "100%",
    width: "100%",
  },
  logoButton: {
    ackgroundColor: COLORS.full_transparent,
    borderColor: COLORS.full_transparent,
    margin: "10px",
    width: "50px",
    height: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginInline: "25px",
  },
  contactButton: {
    backgroundColor: COLORS.full_transparent,
    borderColor: COLORS.full_transparent,
    padding: "0",
    margin: "0",
    width: "50px",
    height: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginInline: "25px",
  },
};
