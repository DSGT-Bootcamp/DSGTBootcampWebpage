import COLORS from "../../constants";
import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { PieChart } from "react-minimal-pie-chart";

const makeTooltipContent = (entry) => {
  return `${entry.longTitle} (${entry.value}%)`;
};

const Ethinicities = (props) => {
  // Adapted from https://github.com/toomuchdesign/react-minimal-pie-chart/blob/master/stories/FullOption.tsx
  const colorChoices = props.colors;

  const dataValues = [
    {
      title: "East Asian",
      longTitle: "East Asian",
      value: 18.7,
      color: colorChoices[0 % colorChoices.length],
    },
    {
      title: "South Asian",
      longTitle: "South Asian",
      value: 38.7,
      color: colorChoices[1 % colorChoices.length],
    },
    {
      title: "White",
      longTitle: "White",
      value: 16.0,
      color: colorChoices[2 % colorChoices.length],
    },
    {
      title: "Hispanic",
      longTitle: "Hispanic or Latino",
      value: 5.3,
      color: colorChoices[3 % colorChoices.length],
    },
    {
      title: "Mixed",
      longTitle: "Mixed",
      value: 2.7,
      color: colorChoices[4 % colorChoices.length],
    },
    {
      title: "SE Asian",
      longTitle: "Southeast Asian",
      value: 12.0,
      color: colorChoices[5 % colorChoices.length],
    },
    {
      title: "-",
      longTitle: "Prefer not to say",
      value: 2.7,
      color: colorChoices[6 % colorChoices.length],
    },
    {
      title: "ME",
      longTitle: "Middle Eastern",
      value: 2.7,
      color: colorChoices[7 % colorChoices.length],
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

  return (
    <div style={props.style.mainContainer}>
      <h3 style={props.style.title}>Ethinicities</h3>
      <div data-tip="" data-for="chart" style={{width: "100%"}}>
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

export default Ethinicities;
