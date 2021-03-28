import "./FarenheitConversion.css";

import React from "react";

export default function FarenheitConversion(props) {
  return (
    <div className="weather-temperature">
      <div className="temperature">{props.temperature}</div>

      <span className="temperatureUnit">
        <a href="#" id="celsiusLink">
          °C{" "}
        </a>{" "}
        |
        <a href="#" id="fahrenheitLink">
          °F
        </a>
      </span>
    </div>
  );
}

<div className="row">
  <div className="col-12">
    <div className="weather-temperature">
      <span className="temperature">26</span>
      <span className="temp-scale">
        <a href="#" id="celsiusLink" className="active">
          °C{" "}
        </a>{" "}
        |
        <a href="#" id="fahrenheitLink">
          °F
        </a>
      </span>
    </div>
  </div>
</div>;
