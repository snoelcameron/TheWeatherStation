import React from "react";
import "./Description";
import "./CurrentTemperature";

export default function Description(props) {
  return (
    <div className="Description">
      <div className="container">
        <div className="row">
          <div class="col-sm">
            <h1>{props.city}</h1>
            <h4 id="date">{props.date}</h4>
            <h4 id="description">{props.description}</h4>
            <h4 id="humidity">{props.humidity}</h4>
            <h4 id="windspeed">{props.windspeed}</h4>
          </div>
          <div class="col-sm">
            <div class="current-temperature" id="temperature">
              {props.currentTemperature}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
