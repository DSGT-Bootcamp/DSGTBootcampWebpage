import COLORS from "../../constants";
import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

const Major = (props) => {
  // Adapted from https://github.com/toomuchdesign/react-minimal-pie-chart/blob/master/stories/FullOption.tsx
  const colorChoices = props.colors;

  const dataValues = [
    { title: "Computer Science ", value: 56.0, color: colorChoices[0] },
    {
      title: "Materials Science and Engineering",
      value: 4.0,
      color: colorChoices[1],
    },
    { title: "Industrial Engineering", value: 24.0, color: colorChoices[2] },
    { title: "Mathematics", value: 5.3, color: colorChoices[3] },
    {
      title: "Electrical and Computational Engineering",
      value: 2.7,
      color: colorChoices[4],
    },
    {
      title: "Aerespace Engineering",
      value: 1.3,
      color: colorChoices[5 % colorChoices.length],
    },
  ];

  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  const data = dataValues.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: "grey",
      };
    }
    return entry;
  });

  const lineWidth = 60;

  return (
    <div style={props.style.mainContainer}>
      <h3 style={props.style.title}>Major</h3>
      <PieChart
        style={{
          fontSize: "8px",
        }}
        data={data}
        radius={PieChart.defaultProps.radius - 6}
        lineWidth={60}
        segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
        segmentsShift={(index) => (index === selected ? 6 : 1)}
        animate
        label={({ dataEntry }) => {
          return (
            dataEntry.title + " (" + Math.round(dataEntry.percentage) + "%)"
          );
        }}
        labelPosition={80}
        labelStyle={{
          fill: COLORS.primary_blue_50,
          fontSize: "0.5em",
          opacity: 1.0,
          pointerEvents: "none",
          fontStyle: "italic",
          fontWeight: "bold",
        }}
        onClick={(_, index) => {
          setSelected(index === selected ? undefined : index);
        }}
        onMouseOver={(_, index) => {
          setHovered(index);
        }}
        onMouseOut={() => {
          setHovered(undefined);
        }}
      />
    </div>
  );
};

export default Major;
