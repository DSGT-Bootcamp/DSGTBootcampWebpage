import COLORS from "../../constants";
import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { PieChart } from "react-minimal-pie-chart";

const makeTooltipContent = (entry) => {
  return `${entry.title} (${entry.value}%)`;
};

const Year = (props) => {
  // Adapted from https://github.com/toomuchdesign/react-minimal-pie-chart/blob/master/stories/FullOption.tsx
  const colorChoices = props.colors;

  const dataValues = [
    { title: "1st Year", value: 56.0, color: colorChoices[0] },
    {
      title: "2nd Year",
      value: 28.0,
      color: colorChoices[1],
    },
    { title: "3rd Year", value: 12.0, color: colorChoices[2] },
    { title: "Masters/PhD", value: 5.3, color: colorChoices[3] },
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

  return (
    <div style={props.style.mainContainer}>
      <h3 style={props.style.title}>Year</h3>
      <div data-tip="" data-for="chart" style={{ width: "100%" }}>
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
        <ReactTooltip
          id="chart"
          getContent={() =>
            typeof hovered === "number"
              ? makeTooltipContent(data[hovered])
              : null
          }
        />
      </div>
    </div>
  );
};

export default Year;
