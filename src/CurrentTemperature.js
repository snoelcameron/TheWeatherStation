import "./CurrentTemperature.css";

import React from "react";

export default function Forecast(props) {
  return (
    <div className="weather-temperature">
      <span className="temperature">{props.temperature}</span>

      <span class="temp-scale">
        <a href="#" id="celsius-link">
          °C{" "}
        </a>{" "}
        |
        <a href="#" id="fahrenheit-link">
          °F
        </a>
      </span>
    </div>
  );
}

<div class="row">
  <div class="col-12">
    <div class="weather-temperature">
      <span class="temperature">6</span>
      <span class="current-temperature" id="temperature"></span>
    </div>
  </div>
</div>;
