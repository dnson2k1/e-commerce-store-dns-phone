import React from "react";
import ReactMapGL from "react-map-gl";
import { useState } from "react";
const MapBox = () => {
  const [viewport, setViewport] = useState({
    width: 1100,
    height: 500,
    latitude: 13.893276,
    longitude: 108.97234,
    zoom: 8,
  });
  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken="pk.eyJ1IjoiZG5zYW5nMjAwMSIsImEiOiJja3l2YTJuc2kxdm5pMndwaDAwaWFlaTZpIn0.7KbYBgdDAgb0WdiN2o6mJQ"
    />
  );
};

export default MapBox;
