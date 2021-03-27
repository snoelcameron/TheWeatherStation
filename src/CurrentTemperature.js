import "./CurrentTemperature.css";

import React from "react";

export default function Forecast(props) {
  return (
    <div className="CurrentTemperature">
      <span className="temperature">6</span>
      <a href="#" id="celsiusLink">
        °C{" "}
      </a>{" "}
      |
      <a href="#" id="fahrenheitLink">
        °F
      </a>
    </div>
  );
}
