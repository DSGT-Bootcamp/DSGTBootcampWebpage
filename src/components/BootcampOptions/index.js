import React from "react";
import COLORS from "../../constants";
import { Table } from "react-bootstrap";
import "./tableStyleFile.css";

const BootcampOptions = () => {
  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.title}>Bootcamp Options</h1>
      <Table responsive borderless style={styles.table}>
        <thead>
          <tr>
            <th style={styles.cell_empty}></th>
            <th style={styles.cell_header_resource}>In-Person Bootcamp</th>
            <th style={styles.cell_header_prereq}>Udemy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.cell_header_left}>Topics Covered</td>
            <td style={styles.cell_normal}>Introductory data science skills</td>
            <td style={styles.cell_normal}>Introductory data science skills</td>
          </tr>
          <tr>
            <td style={styles.cell_header_left}>Attendance</td>
            <td style={styles.cell_normal}>
              Biweekly workshops and weekly mentor meetings{" "}
              <strong>required</strong>
            </td>
            <td style={styles.cell_normal}>Self-paced</td>
          </tr>
          <tr>
            <td style={styles.cell_header_left}>Mentor</td>
            <td style={styles.cell_normal}>
              Project component guided by a mentor
            </td>
            <td style={styles.cell_normal}>
              No guided projects (but meet other students on the Udemy Slack
              group and make your own project!)
            </td>
          </tr>
          <tr>
            <td style={styles.cell_header_left}>Workspace</td>
            <td style={styles.cell_normal}>Discord</td>
            <td style={styles.cell_normal}>Slack</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    paddingBlock: "20px",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "3em",
    color: COLORS.primary_blue,
  },
  table: {
    width: "70%",
    margin: "40px auto",
    backgroundColor: COLORS.full_transparent,
    textAlign: "center",
},
cell_empty: {
    backgroundColor: COLORS.full_transparent,
    width: "33.3%",
    borderRight: "0.5px solid " + COLORS.gray_font_60,
    borderBottom: "0.5px solid " + COLORS.gray_font_60,
},
cell_header_resource: {
    backgroundColor: COLORS.full_transparent,
    color: COLORS.primary_blue,
    fontSize: "1.5em",
    fontWeight: "bold",
    width: "33.3%",
    borderRight: "0.5px solid " + COLORS.gray_font_60,
    borderBottom: "0.5px solid " + COLORS.gray_font_60,
},
cell_header_prereq: {
    backgroundColor: COLORS.full_transparent,
    color: COLORS.primary_blue,
    fontSize: "1.5em",
    fontWeight: "bold",
    width: "33.3%",
    borderBottom: "0.5px solid " + COLORS.gray_font_60,
},
cell_header_left: {
    backgroundColor: COLORS.full_transparent,
    color: COLORS.primary_blue,
    fontSize: "1.5em",
    fontWeight: "bold",
    width: "33.3%",
    verticalAlign: "middle",
},
  cell_normal: {
    backgroundColor: COLORS.full_transparent,
    color: COLORS.gray_font_60,
    fontSize: "1.1em",
    width: "33.3%",
    borderLeft: "0.5px solid " + COLORS.gray_font_60,
    verticalAlign: "middle",
  },
};

export default BootcampOptions;
