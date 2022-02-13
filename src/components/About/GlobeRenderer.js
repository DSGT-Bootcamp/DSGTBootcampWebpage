// adapted from https://www.npmjs.com/package/react-globe (https://codesandbox.io/s/knhlr) on 2/12/2022

import * as React from "react";
import { render } from "react-dom";
import ReactGlobe from "react-globe";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import markers from "./markers";
import markerRenderer from "./markerRenderer";

function markerTooltipRenderer(marker) {
  return `${marker.location} (Percentage: ${marker.value / 10}%)`;
}

const options = {
  markerRenderer,
  markerTooltipRenderer,
};

function GlobeRenderer() {
  return (
    <div className="App">
      <ReactGlobe
        height="100vh"
        globeTexture="https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg"
        markers={markers}
        // onClickMarker={onClickMarker}
        width="100vw"
        options={options}
      />
    </div>
  );
}

export default GlobeRenderer;
