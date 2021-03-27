import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import "./App.css";
import Form from "./Form";
import Description from "./Description";
import CurrentTemperature from "./CurrentTemperature";
import Image from "./Image";

export default function App(
  city,
  description,
  date,
  temperature,
  measure,
  result
) {
  return (
    <div className="App">
      <Container>
        <div class="header">The Weather Station</div>
        <div class="row">
          <div class="col-5">
            <Description
              city="Montreal"
              date="Sunday, March 26, 8:00pm"
              description="Sunny"
              measure="Conditions"
              result="20°"
              measure="Humidity"
              result="20%"
              measure="Wind Speed"
              result="9km/h"
            />
            <div className="CurrentTemperature">
              <CurrentTemperature temperature={26} />
            </div>
          </div>
          <div class="col-7">
            <div class="imageContainer">
              <div>
                <img src="" alt="conditions icon" id="iconLarge" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
