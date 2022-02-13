import { Marker } from "react-globe";

const markers = [
  {
    id: 1,
    location: "In-state",
    color: "red",
    coordinates: [33.7694, -84.40321],
    value: 360
  },
  {
    id: 2,
    location: "Out-of-state",
    color: "blue",
    coordinates: [39.8283, -98.5795],
    value: 307
  },
  {
    id: 3,
    location: "International",
    color: "orange",
    coordinates: [0, 0],
    value: 333
  }
];

export default markers;
